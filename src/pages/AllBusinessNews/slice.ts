import { createSlice } from "@reduxjs/toolkit";
import {
  IBusinessNewsInitialState,
  INewsData,
  IError,
} from "../../interfaces/interface";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState: IBusinessNewsInitialState = {
  allBusinessNewsError: null,
  allBusinessNewsFail: false,
  allBusinessNewsSuccess: false,
  allBusinessNewsLoading: false,
  allBusinessNewsData: [],
};
const allBusinessNewsSlice = createSlice({
  name: "AllBusinessNews",
  initialState,
  reducers: {
    businessNewsRequest: (state) => {
      state.allBusinessNewsLoading = true;
      state.allBusinessNewsError = null;
    },
    allBusinessNewsRetrieved: (state, action: PayloadAction<INewsData>) => {
      state.allBusinessNewsLoading = false;
      state.allBusinessNewsSuccess = true;
      state.allBusinessNewsData = [
        ...state?.allBusinessNewsData,
        ...action.payload.articles,
      ];
    },
    allBusinessNewsFailed: (state, action: PayloadAction<IError>) => {
      state.allBusinessNewsLoading = false;
      state.allBusinessNewsFail = true;
      state.allBusinessNewsError = action.payload;
    },
  },
});
export const {
  allBusinessNewsFailed,
  allBusinessNewsRetrieved,
  businessNewsRequest,
} = allBusinessNewsSlice.actions;
export default allBusinessNewsSlice.reducer;
