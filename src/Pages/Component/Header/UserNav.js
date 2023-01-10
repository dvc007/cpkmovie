import React from 'react'
import { useSelector } from 'react-redux'
import { userLocalService } from '../../../service/localSevice';

export default function UserNav() {
    let user = useSelector((state) => {
        return state.userSlice.user;
    })
    console.log("User:", user);
    const handleLogout = () => {
        //xoa du lieu
        userLocalService.remove()
        window.location.href = '/'
        // window.location.reload()
    }
    const renderContent = () => {
        if (user) {
            //da dang nhap
            return (
                <>
                    <span>{user?.hoTen}</span>
                    <button onClick={handleLogout} className='border-2 px-5 py-2 border-black rounded'>Dang Xuat</button>
                </>
            )
        }
        else {
            return <div>
                <button
                    onClick={() => { window.location.href = '/login' }}
                    className='border-2 px-5 py-2 border-black rounded'
                >
                    Dang Nhap
                </button>
                <button className='border-2 px-5 py-2 border-black rounded'>Dang Ky</button>
            </div>
        }
    }

    return <>
        <div>{renderContent()}</div>
    </>
}
