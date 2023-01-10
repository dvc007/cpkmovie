import React from 'react'
import { Button, Checkbox, Form, Input, message } from 'antd';
import { postLogin } from './../../service/userService';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLocalService } from '../../service/localSevice';
import { setUserAction, setUserActionService } from './../../redux/action/userAction';
import { setUserInfo } from '../../redux_toolkit/userSlice';

export default function LoginPage() {
    let dispatch = useDispatch()

    let navigate = useNavigate()

    const onFinish = (values) => {
        // console.log('Success:', values);
        postLogin(values)
            .then((result) => {
                // console.log(result);
                message.success('đã đăng nhập')
                // dispatch(setUserAction(result.data.content))
                dispatch(setUserInfo(result.data.content))
                userLocalService.set(result.data.content)
                setTimeout(() => {
                    navigate('/') //sau khi đăng nhập thành công thì đều hướng về trang chủ
                }, 1000)
            }).catch((err) => {
                console.log(err);
            });
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    // const onFinishReduxThunk = (values) => {
    //     const handleNavgate = () => {
    //         setTimeout(() => {
    //             navigate('/') //sau khi đăng nhập thành công thì đều hướng về trang chủ
    //         }, 1000)
    //     }
    //     dispatch(setUserActionService(values, handleNavgate))
    // }

    return (
        <div className='w-screen h-screen justify-center  items-center'>
            <div className='container p-5 rounded bg-white flex'>
                <div className='w-1/2'>
                </div>
                <div className='w-1/2 pt-28'>
                    <Form
                        name="basic"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        // onFinish={onFinish}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Username"
                            name="taiKhoan"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="matKhau"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    )
}
