import { useEffect } from 'react'
import { userLocalService } from '../service/localSevice'
const withAuth = (WrappedComponent) => {
    function WithAuth() {
        useEffect(() => {
            if (userLocalService.get()?.maLoaiNguoiDung !== "QuanTri")
                window.location.href = '/'
        }, [])
        return <WrappedComponent />
    }
    return WithAuth
}
export default withAuth