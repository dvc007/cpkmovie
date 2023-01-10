import React, { useEffect, useState } from 'react'
import { deleteUser, getUserList } from '../../service/adminService'
import { Button, Space, Table, Tag, message } from 'antd';
import { userColums } from './utils';
import withAuth from '../../HOC/withAuth';


function AdminUserPage() {
    const [userArr, setUserArr] = useState([])
    useEffect(() => {
        let fetchUserList = () => {

            const handleRemoveUser = (account) => {
                deleteUser(account)
                    .then((result) => {
                        message.success('Xóa thành công')
                        fetchUserList()
                        console.log(result);
                    }).catch((err) => {
                        message.error('Thất bại')
                        console.log(err.response.data.content);
                    });
            }

            getUserList()
                .then((result) => {
                    let userList = result.data.content.map((item) => {
                        return {
                            ...item, key: item.taiKhoan, action:
                                <div className='space-x-5'>
                                    <Button type='primary' danger onClick={() => { handleRemoveUser(item.taiKhoan) }}>Xóa</Button>
                                    <Button type='dashed' >Sửa</Button>
                                </div>
                        }
                    })
                    setUserArr(userList)
                }).catch((err) => {
                    console.log(err);
                });
        }
        fetchUserList()
    }, [])

    return (
        <div>
            <Table
                columns={userColums}
                dataSource={userArr}
            />
        </div>
    )
}

export default withAuth(AdminUserPage)