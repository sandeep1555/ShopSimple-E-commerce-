import { createSlice } from "@reduxjs/toolkit";

const config=createSlice({
    name:"config",
    initialState:{
        activeButton:false,
    },
    reducers:
    {
        ToggleactionButton:(state,action)=>
        {
            state.activeButton=action.payload;
        },
    }
})

export const {ToggleactionButton}=config.actions
export default config.reducer