'use client'
import React from 'react'
import useSWR from 'swr'
import Link from 'next/link'
import axios from 'axios';
import CardBlog from '@/modules/blogs/components/card-blog';

const fetcher = (url: any) => axios.get(url).then((res) => res.data);

const Blogs = () => {
  const {data, error} = useSWR(`${process.env.NEXT_PUBLIC_STRAPI_URL_API}/blogs?populate=*`, fetcher)
  if (error) return <div>Error loading data...</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <div className='text-green-500 text-center text-5xl font-extrabold'>
        BLOGS
      </div>
      <div className='text-black'>
          {data?.data?.map((blog : any) => (
            <div key={blog.id}>
              <Link href={`/blogs/${blog.id}`}> 
                <CardBlog className='underline' title={blog.attributes.Tittle} />
              </Link>
            </div>
          ))}
        </div>
      <Link href={'/'}>Home</Link>
    </>

  )
}

export default Blogs

// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL_API}/blogs?populate=*`)
//   const posts = await res.json()

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       posts,
//     },
//   }
// }
