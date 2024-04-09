import React, { ReactNode } from 'react'

interface Props {
    children?: ReactNode;
}

export default function Container(props: Props) {
    return (
        <div className='px-80'>{props.children}</div>
    )
}
