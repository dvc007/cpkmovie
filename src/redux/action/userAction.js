import { SET_USER_LOGIN } from './../constant/userConstant';
import { postLogin } from './../../service/userService';
import { message } from 'antd';
export const setUserAction = (payload) => {
    return {
        type: SET_USER_LOGIN,
        payload,
    }
}

// value thông tin từ form
export const setUserActionService = (values, onSuccess) => {
    return (dispatch) => {

        postLogin(values)
            .then((result) => {
                message.success('đăng nhập thành công')
                dispatch({
                    type: SET_USER_LOGIN,
                    payload: result.data.content
                })
                onSuccess();
            }).catch((err) => {
                message.err('đăng nhập thất bại')
            });

    }
}