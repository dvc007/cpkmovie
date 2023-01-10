import { Tag } from "antd"

export const userColums = [
    {
        title: 'Ten',
        dataIndex: 'hoTen',
        key: 'hoTen',
    },
    {
        title: 'Tai Khoan',
        dataIndex: 'taiKhoan',
        key: 'taiKhoan',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Loai Nguoi Dung',
        dataIndex: 'maLoaiNguoiDung',
        key: 'maLoaiNguoiDung',
        render: (text) => {
            if (text === "QuanTri") {
                return <><Tag className="text-red-500">{text}</Tag></>
            }
            else {
                return <><Tag className="text-blue-500">{text}</Tag></>

            }
        }

    },
    {
        title: 'Hành Động',
        dataIndex: 'action',
        key: 'action',
    },
]

