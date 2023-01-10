import React from 'react'
import { RingLoader } from 'react-spinners'
import { useSelector } from 'react-redux';
export default function Spinner() {
    let isLoading = useSelector((state) => {
        return state.spinnerSlice.isLoading
    })
    return isLoading ? (
        <div className='fixed bg-black w-screen h-screen top-0 left-0 z-50'><RingLoader color="#36d7b7" /></div>
    )
        :
        (<></>)
}
