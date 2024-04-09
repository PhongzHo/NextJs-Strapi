import React from 'react'
import Image from 'next/image'
import land from '@/lib/image/land.jpg'

interface Props {
    title: string
    className?: string
}
// <div className={`p-4 ${props.className}`}></div>

function CardBlog(props: Props) {
    return (
        <div>
            {/* each card */}
            <article className="flex max-w-xl flex-col items-start justify-between">
                <div>
                    <Image src={land} layout='reponsive' alt='land' className='rounded-2xl' />
                </div>
                <div className="flex items-center gap-x-4 text-xs">
                    {/* <time datetime="2020-03-16" className="text-gray-500">Mar 16, 2020</time> */}
                    <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a>
                </div>
                <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <a href="#">
                            <span className="absolute inset-0"></span>
                            {props.title}
                        </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                    <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                            <a href="#">
                                <span className="absolute inset-0"></span>
                                Michael Foster
                            </a>
                        </p>
                        <p className="text-gray-600">Co-Founder / CTO</p>
                        Image
                    </div>
                </div>
            </article>
        </div>
    )
}

export default CardBlog

{/* <div className='w-[288px] rounded shadow-xl border-[1px] flex flex-col gap-4 m-4'>
                <div className='bg-gray-800/20 rounded w-full h-[168px]'></div>
                <div className='p-4 flex flex-col gap-4'>
                    <div className='bg-red-300 rounded w-[90%] p-2 font-semibold'>
                        {props.title}
                    </div>
                    <section className='gap-3 flex flex-col'>
                        <div>
                            <div className='bg-gray-800/20 rounded h-4 w-16'></div>
                            <div className='bg-gray-800/20 rounded h-4 w-16'></div>
                        </div>
                        <div>
                            <div className='bg-gray-800/20 rounded h-4 w-16'></div>
                            <div className='bg-gray-800/20 rounded h-4 w-16'></div>
                        </div>
                        <div>
                            <div className='bg-gray-800/20 rounded h-4 w-16'></div>
                            <div className='bg-gray-800/20 rounded h-4 w-16'></div>
                        </div>
                    </section>
                </div>
            </div> */}