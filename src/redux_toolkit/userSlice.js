import { createSlice } from "@reduxjs/toolkit";
import { userLocalService } from "../service/localSevice";

const initialState = {
    user: userLocalService.get(),
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setUserInfo: (state, action) => {
            state.user = action.payload
        }
    }
})

export const { setUserInfo } = userSlice.actions
export default userSlice.reducer