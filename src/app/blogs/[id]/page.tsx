'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import useSWR from 'swr';

const SingleBlog = ({ params }: any) => {
  const id = params.id
  const fetcher = (url: any) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_STRAPI_URL_API}/blogs/${id}?populate=*`, fetcher)
  if (error) return <div>Error loading data...</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <div className='bg-blue-50 font-extrabold'>
        <h1 className='text-green-500 text-center text-5xl'>Single Blog</h1>
      </div>
      {data.data.attributes.Tittle} <br />
      {data.data.attributes.MainContent}
    </>
  )
}

export default SingleBlog