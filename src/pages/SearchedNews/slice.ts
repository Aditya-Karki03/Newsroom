import { createSlice } from "@reduxjs/toolkit";
import {
  ISearchNewsInitialState,
  INewsData,
  IError,
  IQuery,
} from "../../interfaces/interface";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState: ISearchNewsInitialState = {
  searchNewsError: null,
  searchNewsFail: false,
  searchNewsSuccess: false,
  searchNewsLoading: false,
  searchNewsData: [],
};
const searchNewsSlice = createSlice({
  name: "SearchNews",
  initialState,
  reducers: {
    searchRequest: (state, _action: PayloadAction<IQuery>) => {
      state.searchNewsLoading = true;
      state.searchNewsError = null;
      state.searchNewsData = [];
    },
    searchNewsRetrieved: (state, action: PayloadAction<INewsData>) => {
      state.searchNewsLoading = false;
      state.searchNewsSuccess = true;
      state.searchNewsData = [
        ...state?.searchNewsData,
        ...action.payload.articles,
      ];
    },
    searchNewsFailed: (state, action: PayloadAction<IError>) => {
      state.searchNewsLoading = false;
      state.searchNewsFail = true;
      state.searchNewsError = action.payload;
    },
  },
});
export const { searchNewsFailed, searchNewsRetrieved, searchRequest } =
  searchNewsSlice.actions;
export default searchNewsSlice.reducer;
