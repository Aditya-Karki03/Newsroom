import { createSlice } from "@reduxjs/toolkit";
import {
  IAllSportsInitialState,
  IAllSportsNewsData,
  IError,
} from "../../interfaces/interface";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState: IAllSportsInitialState = {
  allSportsNewsError: null,
  allSportsNewsFail: false,
  allSportsNewsSuccess: false,
  allSportsNewsLoading: false,
  allSportsNewsData: [],
};
const sportsNewsSlice = createSlice({
  name: "Sports",
  initialState,
  reducers: {
    allSportsRequest: (state) => {
      state.allSportsNewsLoading = true;
      state.allSportsNewsError = null;
    },
    allSportsNewsRetrieved: (
      state,
      action: PayloadAction<IAllSportsNewsData>
    ) => {
      state.allSportsNewsLoading = false;
      state.allSportsNewsSuccess = true;

      state.allSportsNewsData = [
        ...state?.allSportsNewsData,
        ...action.payload.articles,
      ];
    },
    allSportsNewsFailed: (state, action: PayloadAction<IError>) => {
      state.allSportsNewsLoading = false;
      state.allSportsNewsFail = true;
      state.allSportsNewsError = action.payload;
    },
  },
});
export const { allSportsNewsFailed, allSportsNewsRetrieved, allSportsRequest } =
  sportsNewsSlice.actions;
export default sportsNewsSlice.reducer;
