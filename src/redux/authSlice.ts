import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { AuthModel, LoginRequest, LoginResponse } from "../models/Auth";
import { authAPI, setAxiosToken } from "../api";
// import { setLoginCompleted } from "./appSlice";

const initialState = {
  logged: false,
  userInfo: {} as AuthModel,
};

export const login = createAsyncThunk<LoginResponse, LoginRequest>(
  "me/login",
  async (payload, { dispatch, rejectWithValue }) => {
    const { login, password } = payload;

    try {
      const response = await authAPI.login(login, password);
      if (response?.status === 200) {
        localStorage.setItem("access-token", response.data.accessToken);
        localStorage.setItem("refresh-token", response.data.refreshToken);
        dispatch(authUser());
      }

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getUserInfo = createAsyncThunk(
  "me/getUserInfo",
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      const response: any = await authAPI.getUserInfo();

      if (response?.status === 200) {
        localStorage.setItem(
          "user-profile",
          JSON.stringify(response.data.data.userInfo)
        );
        localStorage.setItem(
          "quiz-info",
          JSON.stringify(response.data.data.quizInfo)
        );

        setTimeout(() => {
          window.location.href = "/start-game";
        });
      }

      return response.data as AuthModel;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const authUser = createAsyncThunk(
  "me/auth",
  async (payload, { dispatch, rejectWithValue }) => {
    const accessToken = localStorage.getItem("access-token") ?? "";
    const refreshToken = localStorage.getItem("refresh-token") ?? "";

    if (accessToken) {
      setAxiosToken(accessToken);
      dispatch(getUserInfo());
    } else if (refreshToken) {
      //
    }
  }
);

export const authSlice = createSlice({
  name: "me",
  initialState,
  reducers: {
    setLogged: (state, action: PayloadAction<boolean>) => {
      state.logged = action.payload;
    },
    setUserInfo: (state, action: PayloadAction<AuthModel>) => {
      state.userInfo = action.payload;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(getUserInfo.fulfilled, (state, action) => {
    //   state.userInfo = action.payload;
    // });
  },
});

export const { setUserInfo, setLogged } = authSlice.actions;

export default authSlice.reducer;
