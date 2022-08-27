import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    user:null,
    isError:false,
    isSuccsess:false,
    isLoading:false,
    message:""
}
export const LoginUser=createAsyncThunk("user/loginUser",async(user,ThunkAPI)=>{
    try {
        const response = await axios.post('http://localhost:5000/login',{
            email:user.email,
            password:user.password
        })
        return response.data;
    } catch (error) {
        if(error.response){
            const message = error.response.data.msg;
            return ThunkAPI.rejectWithValue(message);
        }
    }
});
export const getMe=createAsyncThunk("user/getMe",async(_,ThunkAPI)=>{
    try {
        const response = await axios.get('http://localhost:5000/me');
        return response.data;
    } catch (error) {
        if(error.response){
            const message = error.response.data.msg;
            return ThunkAPI.rejectWithValue(message);
        }
    }
});
export const LogOut=createAsyncThunk("user/Logout",async()=>{
         await axios.delete('http://localhost:5000/logout');
    })
export const AuthSlice= createSlice({
    name:"auth",
    initialState,
    reducers:{
        reset:(state)=> initialState
    },
    extraReducers:(builder)=>{
        builder.addCase(LoginUser.pending,(state)=>{
            state.isLoading=true;
        });
        builder.addCase(LoginUser.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isSuccsess=true;
            state.user=action.payload;
        });
        builder.addCase(LoginUser.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=true;
            state.message=action.payload;


        })
        // get user login
        builder.addCase(getMe.pending,(state)=>{
            state.isLoading=true;
        });
        builder.addCase(getMe.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isSuccsess=true;
            state.user=action.payload;
        });
        builder.addCase(getMe.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=true;
            state.message=action.payload;


        })
    }
});
export const {reset}=AuthSlice.actions;
export default AuthSlice.reducer;