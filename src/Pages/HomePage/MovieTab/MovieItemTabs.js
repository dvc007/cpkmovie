import React from 'react'
import moment from 'moment'
import "moment/locale/vi"
moment.locale('vi')
export default function MovieItemTabs({ movie }) {
    // console.log("Movie", movie);
    return (
        <div className='flex mt-10 space-x-4'>
            <img className='w-40 h-28 object-cover' src={movie.hinhAnh} alt='' />
            <div>
                <h3 className='font-medium text-3xl'>{movie.tenPhim}</h3>
                <div className='grid grid-cols-3 gap-7'>{movie.lstLichChieuTheoPhim.slice(0, 6).map((lichChieu, index) => {
                    return <p key={index} className='px-3 py-2 bg-red-500 text-white rounded font-medium'>{moment(lichChieu.ngayChieuGioChieu).format("DD/MM hh:mm A")}</p>
                })}</div>
            </div>

        </div>
    )
}

/**
 * 
 * [
 * lstLichChieuTheoPhim
    {
        "maLichChieu": 44239,
        "maRap": "525",
        "tenRap": "Rạp 5",
        "ngayChieuGioChieu": "2021-09-01T07:00:00",
        "giaVe": 100000
    }
]
 */