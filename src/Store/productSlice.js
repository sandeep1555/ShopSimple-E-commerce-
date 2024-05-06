import { createSlice } from "@reduxjs/toolkit";

const productSlice=createSlice({
    name:"products",
    initialState:{
        allProducts:null,
        categoryList:null,
        categoryItems:null,
    },
    reducers:{
        addAllProducts:(state,action)=>
        {
            state.allProducts=action.payload;
        },
        addCategoryList:(state,action)=>
        {
            state.categoryList=action.payload;
        },
            getcategoryItems:(state,action)=>
            {
                state.categoryItems=action.payload;
            },
    
    }
})

export const {addAllProducts,addCategoryList,getcategoryItems}=productSlice.actions
export  default productSlice.reducer