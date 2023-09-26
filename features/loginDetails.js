// userSlice.js
//import { createSlice } from "@reduxjs/toolkit";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  name: "John Doe",
  image: require("../assets/images/userImage.jpg"),
};

// export const fetchUserData = createAsyncThunk(
//   "user/fetchUserData",
//   async (_, { getState, rejectWithValue }) => {
//     try {
//       const user = auth.currentUser;
//       console.log(user.uid);
//       const docData = await getDoc(
//         doc(FIRESTORE_DB, "galleryUsers", user.uid),
//         {}
//       );

//       if (docData.exists()) {
//         const data = docData.data();
//         return data;
//       } else {
//         console.log("NO SUCH DATA");
//         return {};
//       }
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//       return rejectWithValue(error.message);
//     }
//   }
// );

const loginDetailsSlice = createSlice({
  name: "loginDetails",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },

    setImage: (state, action) => {
      state.image = action.payload;
    },
  },
});

export const { setName, setData, setImage } = loginDetailsSlice.actions;

export default loginDetailsSlice.reducer;