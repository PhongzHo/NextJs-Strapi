'use client'
import React from 'react'
import { useEffect, useState } from 'react'

function page() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, [])

    return (
        <div>
            {!isLoading ? <LoadingComponent /> : <div>Loaded</div>}
        </div>
    )
}
export default page

function LoadingComponent() {
    return (
        <div className='w-[288px] animate-pulse rounded shadow-xl border-[1px] flex flex-col gap-4 m-4'>
            <div className='bg-gray-800/20 rounded w-full h-[168px]'> </div>
            <div className='p-4 flex flex-col gap-4'>
                <div className='bg-gray-800/20 rounded w-[90%] h-4'></div>
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
        </div>
    )
}