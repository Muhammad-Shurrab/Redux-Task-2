// import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//   user: null,
//   loading: false,
//   error: null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     loginStart: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     loginSuccess: (state, action) => {
//       state.user = action.payload;
//       state.loading = false;
//       state.error = null;
//     },
//     loginFailure: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },
//     logout: (state) => {
//       state.user = null;
//       state.loading = false;
//       state.error = null;
//     },
//   },
// });

// export const { loginStart, loginSuccess, loginFailure, logout } =
//   authSlice.actions;

// // Thunk action for login
// export const login = (credentials) => async (dispatch) => {
//   dispatch(loginStart());
//   try {
//     const response = await axios.post("/api/auth/login", credentials);
//     dispatch(loginSuccess(response.data.user));
//     // Store JWT token in cookie (implement this part)
//   } catch (error) {
//     dispatch(loginFailure(error.response.data.message));
//   }
// };

// // Thunk action for registration
// export const register = (userData) => async (dispatch) => {
//   dispatch(loginStart());
//   try {
//     const response = await axios.post("/api/auth/register", userData);
//     dispatch(loginSuccess(response.data.user));
//     // Store JWT token in cookie (implement this part)
//   } catch (error) {
//     dispatch(loginFailure(error.response.data.message));
//   }
// };

// export default authSlice.reducer;
