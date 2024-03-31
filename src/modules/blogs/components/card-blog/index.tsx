import React from 'react'

interface Props {
    title: string
    className?: string
}

function CardBlog(props: Props) {
    return (
        <div className={`bg-red-200 p-4 ${props.className}`}>
            <div>{props.title}</div>
        </div>
    )
}

export default CardBlog