import { createSlice } from "@reduxjs/toolkit";
import {
  IAllNewsInitialState,
  IAllSportsNewsData,
  IError,
} from "../../interfaces/interface";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState: IAllNewsInitialState = {
  allNewsError: null,
  allNewsFail: false,
  allNewsSuccess: false,
  allNewsLoading: false,
  allNewsData: [],
};
const allNewsSlice = createSlice({
  name: "AllNews",
  initialState,
  reducers: {
    newsRequest: (state) => {
      state.allNewsLoading = true;
      state.allNewsError = null;
    },
    allNewsRetrieved: (state, action: PayloadAction<IAllSportsNewsData>) => {
      state.allNewsLoading = false;
      state.allNewsSuccess = true;
      state.allNewsData = [...state?.allNewsData, ...action.payload.articles];
    },
    allNewsFailed: (state, action: PayloadAction<IError>) => {
      state.allNewsLoading = false;
      state.allNewsFail = true;
      state.allNewsError = action.payload;
    },
  },
});
export const { allNewsFailed, allNewsRetrieved, newsRequest } =
  allNewsSlice.actions;
export default allNewsSlice.reducer;
