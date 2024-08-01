const { createSlice,nanoid, current, createAsyncThunk } = require("@reduxjs/toolkit");
const initialState = {
  // users:[]
  userAPIData:[],
  users:JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : []
}
export const fetchApiUserData = createAsyncThunk("fetchApiUserData",async()=>{
  const result = await fetch("https://jsonplaceholder.typicode.com/users")
  return result.json();
})
const Slice = createSlice({
  name:"addUserSlice",
  initialState,
  reducers:{
    addUser : (state,action) => {
      // console.log(action)
      const data={
        id:nanoid(),
        name:action.payload
      }
      state.users.push(data);
      let UserData = JSON.stringify(current(state.users));
      localStorage.setItem("user", UserData)
    },
    removeUser:(state, action)=>{
      const data = state.users.filter((item)=>{
        return item.id!=action.payload
      })
      state.users = data;
      let UserData = JSON.stringify(data);
      localStorage.setItem("user", UserData)
    }
  },
  extraReducers:(builder)=>{
    builder.addCase(fetchApiUserData.fulfilled,(state,action)=>{
      state.isLoading=false,
      state.userAPIData=action.payload
    })
  }
});
export const {addUser, removeUser} = Slice.actions;
export default Slice.reducer;