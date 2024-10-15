import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const fetcActivityes = createAsyncThunk('users/fetcActivityes', async () => {
    const response = await fetch('https://bored.api.lewagon.com/api/activity/');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  });




const initialState={
activeAr:[],
loading:false,
error:null,
click:0,
detailsButton:false,
buttonDetails:{}
}

const activitySlice=createSlice({
name:"activity",
initialState,
reducers:{
    HandleClick:(state,action)=>{
state.click +=1;
console.log(state.click)


    },
showClick:(state,action)=>{
    const key =action.payload
    state.buttonDetails[key] = !state.buttonDetails[key];
    }


},
extraReducers:(builder)=>{
    builder.addCase(fetcActivityes.pending, (state) => {
        state.loading = true;
        state.error = null;
      });
      builder.addCase(fetcActivityes.fulfilled, (state,action) => {
        state.loading = false;
        if(state.click>0)state.activeAr=[...state.activeAr,action.payload]
        
      });
      builder.addCase(fetcActivityes.rejected, (state,action) => {
        state.loading = false;
        state.error = action.error.message;
      });



}
})

export const {HandleClick,showClick}=activitySlice.actions
export default activitySlice.reducer