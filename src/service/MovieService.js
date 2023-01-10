
import { https } from './configURL';
export let getMovie = () => {
    return https.get('/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP05')
}

///api/QuanLyRap/LayThongTinLichChieuHeThongRap
export let getMovieByTheater = () => {
    return https.get('/api/QuanLyRap/LayThongTinLichChieuHeThongRap')
}