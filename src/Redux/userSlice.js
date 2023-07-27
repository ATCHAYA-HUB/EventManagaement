import {createSlice} from "@reduxjs/toolkit";
export const userSlice = createSlice({
    name:"user",mail:"mail",rate:"rate",
    initialState:{
        user:{
            user:''
        },
        mail:{
            mail:''
        },
        rate:{
            rate:''
        }
    },
    reducers:{
        login:(state,action)=>{
            state.user=action.payload;
        },
        logout:(state)=>{
            state.user=null;
        },
        mailin:(state,action)=>{
            state.mail=action.payload;
        },
        mailout:(state)=>{
            state.mail=null;
        },
        ratein:(state,action)=>{
            state.rate=action.payload;
        },
        rateout:(state)=>{
            state.rate=null;
        }
    },
});
export const{login,logout}=userSlice.actions;
export const{ratein,rateout}=userSlice.actions;
export const{mailin,mailout}=userSlice.actions;
export const selectUser = (state)=>state.user.user.user;
export const selectMail = (state)=>state.mail.mail.mail;
export const selectRate = (state)=>state.rate.rate.rate;
export default userSlice.reducer;