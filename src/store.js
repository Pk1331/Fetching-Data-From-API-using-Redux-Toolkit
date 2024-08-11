import { configureStore, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
let initialData={
    users:[],
    status:"",
    error:false
}
export let fetchdata=createAsyncThunk('user/fetch',
   async ()=>
    {
       try
       {
        const out= await fetch("https://jsonplaceholder.typicode.com/users");
        return await out.json()
       }
       catch(error)
       {
         throw error
       }
    }
)
const userSlicer=createSlice({
    name:"user",
    initialState:initialData,
    reducers:{
            fetchusers:(state,action)=>
            {
                 
            }
    
    },
    // Checking Status :Pending,Success,Error
    extraReducers:(builder)=>
    {
       builder.addCase(fetchdata.pending,(state)=>
        {
            state.status="Loading"
        })
        .addCase(fetchdata.fulfilled,(state,action)=>{
            state.status="Completed",
            state.users=action.payload

        })
        .addCase(fetchdata.rejected,(state,action)=>{
            state.status="Error",
            state.users=[]
            state.error=action.error.message

        })
    },
})
const store=configureStore(
    {
        reducer:
        {
            usersdata:userSlicer.reducer
        }
    }
)
export default store