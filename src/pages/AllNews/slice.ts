import { createSlice } from "@reduxjs/toolkit";
import {
  IAllNewsInitialState,
  INewsData,
  IError,
  TPage,
} from "../../interfaces/interface";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState: IAllNewsInitialState = {
  allNewsError: null,
  allNewsFail: false,
  allNewsSuccess: false,
  allNewsLoading: false,
  infiniteScrollLoading: false,
  allNewsData: [],
};
const allNewsSlice = createSlice({
  name: "AllNews",
  initialState,
  reducers: {
    newsRequest: (state, _action: PayloadAction<TPage>) => {
      //if the data was already present then we are doing the infinite scrolling
      state.allNewsData.length > 0
        ? (state.infiniteScrollLoading = true)
        : (state.allNewsLoading = true);
      state.allNewsError = null;
    },
    allNewsRetrieved: (state, action: PayloadAction<INewsData>) => {
      state.allNewsLoading = false;
      state.infiniteScrollLoading = false;
      state.allNewsSuccess = true;
      state.allNewsData = [...state?.allNewsData, ...action.payload.articles];
    },
    allNewsFailed: (state, action: PayloadAction<IError>) => {
      state.allNewsLoading = false;
      state.infiniteScrollLoading = false;
      state.allNewsFail = true;
      state.allNewsError = action.payload;
    },
  },
});
export const { allNewsFailed, allNewsRetrieved, newsRequest } =
  allNewsSlice.actions;
export default allNewsSlice.reducer;
