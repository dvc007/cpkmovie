import { https } from "./configURL"

export let postLogin = (xxx) => {
    return https.post('/api/QuanLyNguoiDung/DangNhap', xxx)
}

export let postRegister = (xxxx) => {
    return https.post('/api/QuanLyNguoiDung/ThemNguoiDung', xxxx)
}

