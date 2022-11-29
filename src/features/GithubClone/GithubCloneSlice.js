import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState={
    loading:false,
    user:{},
    userRepos:{},
    error:"",
    payload:""
} 

export const fetchUser=createAsyncThunk("GithubClone/fetchUser",async (username)=>{
    const res= await axios.get(`https://api.github.com/users/${username}`)
    const resRepos= await axios.get(`https://api.github.com/users/${username}/repos`)
    res.data.repos=resRepos.data
    console.log(resRepos.data)
    return res.data;    
})

export const GithubCloneSlice=createSlice({
    name:"GithubClone",
    initialState,
    reducers:{
        
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchUser.pending,(state)=>{
            state.loading=true;
        })
        .addCase(fetchUser.fulfilled,(state,action)=>{
            state.loading=false;
            state.user=action.payload;
            state.error="";
        })
        .addCase(fetchUser.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.error.message;
        })
    }
})

export default GithubCloneSlice.reducer;