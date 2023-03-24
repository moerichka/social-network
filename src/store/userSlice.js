import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const endpoint = process.env.REACT_APP_ENDPOINT || "";

export const authUser = createAsyncThunk(
  "user/authUser",
  async function ({ email, password }, { rejectWithValue }) {

    try {
      const response = await fetch(
        `${endpoint}/users?email=${email}&password=${password}`
      );

      if (!response.ok) {
        throw new Error("Server error!");
      }

      const data = await response.json();

      if (data.length < 1) {
        throw new Error("There is no such user!");
      }

      localStorage.setItem("userEmail", email);
      localStorage.setItem("userPassword", password);

      return data[0];
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async function ({ email, password }, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(`${endpoint}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Server error!");
      }

      const data = await response.json();

      dispatch(authUser({ email, password }));

      return data[0];
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: { user: null, isLoading: false, isError: false, error: "" },
  reducers: {
    // Всегда синхронные
    // state иммутабельный
    logOut(state) {
      state.user = null;
      localStorage.setItem("userEmail", "");
      localStorage.setItem("userPassword", "");
    },
  },
  extraReducers: {
    [authUser.pending]: (state) => {
      state.isLoading = true;
    },
    [authUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    },
    [authUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.error = "";
      state.user = action.payload;
    },
  },
});

export const { logOut } = userSlice.actions;

export default userSlice.reducer;
