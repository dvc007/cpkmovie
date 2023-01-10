import React, { useState, useEffect } from 'react'
import { postRegister } from '../../service/userService';
import { getUserList } from './../../service/adminService';
import {
    AutoComplete,
    Button,
    Cascader,
    Checkbox,
    Col,
    Form,
    Input,
    InputNumber,
    Row,
    Select,
} from 'antd';
import AdminUserPage from '../AdminUserPage/AdminUserPage';
const { Option } = Select;
const residences = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake',
                    },
                ],
            },
        ],
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                    },
                ],
            },
        ],
    },
];
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

    const onFinish = (values) => {
        postRegister(values)
            .then((result) => {
                console.log(result);
            }).catch((err) => {
                console.log(err);
            });
        console.log('Value ', values);
    };

    //getListUser

    useEffect(() => {
        getUserList()
            .then((result) => {
                console.log(result);
            }).catch((err) => {
                console.log(err);
            });
    }, [])

    return (
        <>

            <div className='h-screen w-screen flex justify-center items-center'>
                <Form
                    {...formItemLayout}
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    initialValues={{
                        prefix: '84',
                    }}
                    scrollToFirstError
                >
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
                        name="maLoaiNguoiDung"
                        label="Loại người dùng"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng chọn loại người dùng!',
                            },
                        ]}
                    >
                        <Select placeholder="Loại người dùng">
                            <Option value="QuanTri">Quản Trị</Option>
                            <Option value="KhachHang">Khách Hàng</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="agreement"
                        valuePropName="checked"
                        rules={[
                            {
                                validator: (_, value) =>
                                    value ? Promise.resolve() : Promise.reject(new Error('Nên chấp nhận thõa thuận')),
                            },
                        ]}
                        {...tailFormItemLayout}
                    >

                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button type="dashed" htmlType="submit">
                            Đăng Ký
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <div>

            </div>
        </>
    )
}
