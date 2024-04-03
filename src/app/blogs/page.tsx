'use client'
import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
import Link from 'next/link'
import axios from 'axios';
import CardBlog from '@/modules/blogs/components/card-blog';

const fetcher = (url: any) => axios.get(url).then((res) => res.data);

const Blogs = () => {
  const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_STRAPI_URL_API}/blogs?populate=*`, fetcher)
  if (error) return <div>Error loading data...</div>;
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }, [])

  return (
    <>
      <div className='text-green-500 text-center text-5xl font-extrabold'>
        BLOGS
      </div>
      {isLoading ? <LoadingComponent /> : <div className='text-black'>
        {data?.data?.map((blog: any) => (
          <div key={blog.id}>
            <Link href={`/blogs/${blog.id}`}>
              <CardBlog className='underline' title={blog.attributes.Tittle} />
            </Link>
          </div>
        ))}
      </div>}
      <Link href={'/'}>Home</Link>
    </>

  )
}

export default Blogs

function LoadingComponent() {
  return (
    <div className='w-full h-[20px] bg-gray-700/40 animate-pulse'></div>
  )
}