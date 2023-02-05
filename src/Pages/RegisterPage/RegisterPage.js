import React, { useState, useEffect } from 'react'
import { deleteUser, getUserList, postRegister } from './../../service/adminService';
import { userColums } from '../AdminUserPage/utils';
import { setUserInfo } from '../../redux_toolkit/userSlice';
import { useDispatch } from 'react-redux';
import { userLocalService } from '../../service/localSevice';
import {
    Button,
    Form,
    Input,
    message,
    Select,
    Table,

} from 'antd';

const { Option } = Select;

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};
export default function RegisterPage() {
    const [form] = Form.useForm();
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="84">+84</Option>
            </Select>
        </Form.Item>
    );
    let dispatch = useDispatch()

    const onFinish = (values) => {
        postRegister(values)
            .then((result) => {
                message.success('ĐK Thành Công')
                dispatch(setUserInfo(result.data.content))
                userLocalService.set(result.data.content)
                console.log(result.data.content);
            }).catch((err) => {
                console.log(err);
            });
        console.log('Value ', values);
    };




    //getListUser
    const [userArr, setUserArr] = useState([])
    console.log(userArr);
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
        <>

            <div className='flex justify-center items-center'>
                <Form
                    {...formItemLayout}
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    scrollToFirstError
                >

                    <Form.Item
                        name="taiKhoan"
                        label="Tai Khoan"
                        tooltip="What do you want others to call you?"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập tài khoản!',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        label="E-mail"
                        rules={[
                            {
                                type: 'email',
                                message: 'Sai cấu trúc Email',
                            },
                            {
                                required: true,
                                message: 'Vui lòng nhập E-mail!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="matKhau"
                        label="Mật Khẩu"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập mật khẩu!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="hoTen"
                        label="Họ và tên"
                        tooltip="What do you want others to call you?"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập họ và tên!',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>


                    <Form.Item
                        name="soDt"
                        label="Số điện thoại"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập số điện thoại!',
                            },
                        ]}
                    >
                        <Input
                            addonBefore={prefixSelector}
                            style={{
                                width: '100%',
                            }}
                        />
                    </Form.Item>




                    <Form.Item
                        name="maNhom"
                        label="Mã Nhóm"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng chọn mã nhóm!',
                            },
                        ]}
                    >
                        <Select placeholder="Chọn mã nhóm của bạn">
                            <Option value="GP00">GP00</Option>
                        </Select>
                    </Form.Item>


                    <Form.Item {...tailFormItemLayout}>
                        <Button type="dashed" htmlType="submit">
                            Đăng Ký
                        </Button>
                    </Form.Item>

                </Form>
            </div>

            <div>
                <Table
                    columns={userColums}
                    dataSource={userArr}
                />
            </div>
        </>
    )
}
