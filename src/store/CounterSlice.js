import { createSlice } from "@reduxjs/toolkit";

let initialState = {  // must be named initialState
    count:0
}

let counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers:{  // pure functions
        /* increase:(state,actions)=>{
            state.count += 1
        }, */
        /* decrease:(state,actions)=>{
            state.count -= 1
        } */
        AddtoNavCount:(state,actions)=>{
            state.count += actions.payload
        }
    }
})

export default counterSlice.reducer
export let {AddtoNavCount} = counterSlice.actions