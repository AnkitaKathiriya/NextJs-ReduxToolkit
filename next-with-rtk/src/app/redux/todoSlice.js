const { createSlice, nenoid } = require("@reduxjs/toolkit");
const initialState = {
  todos:[]
}
const Slice  = createSlice({
  name:"totoList",
  initialState,
  reducers:{
    addTotods:(state,action)=>{
      const data = {
        id:nenoid,
        name:action.payload
      }
      state.todos.push(data)
    }
  }
})
export const {addTotods} = Slice.actions;
export default Slice.reducer