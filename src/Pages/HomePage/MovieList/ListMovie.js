import React from 'react'
import { Card } from 'antd';
import { NavLink } from 'react-router-dom';
const { Meta } = Card;

export default function ListMovie({ movie }) {
    let renderListMovie = () => {
        return movie?.slice(0, 20).map((item, idx) => {
            return (
                <Card key={idx}
                    hoverable
                    style={{
                        width: "100%",
                    }}
                    cover={<img className=' pt-6 h-96 object-cover' alt="example" src={item.hinhAnh} />}
                >
                    <Meta className='h-10' title={item.tenPhim} />
                    <NavLink className="bg-red-600 px-2 py-2 rounded text-white" to={`/detail/${item.maPhim}`}>Xem chi tiet</NavLink>
                </Card>
            )
        })
    }
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 '> {renderListMovie()}</div>
    )
}
