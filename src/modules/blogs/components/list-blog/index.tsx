'use client'
import axios from 'axios';
import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import useSWR from 'swr';
import CardBlog from '../card-blog';


const fetcher = (url: any) => axios.get(url).then((res) => res.data);


export default function ListBlog() {
    const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_STRAPI_URL_API}/blogs?populate=*`, fetcher)
    if (error) return <div>Error loading data...</div>;
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 500)
    }, [])
    return (
        <div className="mx-auto mt-10 grid gap-x-12 gap-y-12 max-w-2xl border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {data?.data?.map((blog: any) => (
                <div key={blog.id}>
                    <Link href={`/blogs/${blog.id}`}>
                        <CardBlog title={blog.attributes.Tittle} />
                    </Link>
                </div>
            ))}
        </div>
    )
}
