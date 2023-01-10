import React from 'react'
import { useParams } from 'react-router-dom'

export default function DetailPage() {
    let params = useParams()
    console.log("params", params);
    return (
        <div>
            <h2 className='text-center '>
                Mã phim: {params.id}
            </h2>
        </div>
    )
}
