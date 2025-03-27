import { createSlice } from "@reduxjs/toolkit";
import {
  ITechNewsInitialState,
  IAllSportsNewsData,
  IError,
} from "../../interfaces/interface";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState: ITechNewsInitialState = {
  allTechNewsError: null,
  allTechNewsFail: false,
  allTechNewsSuccess: false,
  allTechNewsLoading: false,
  allTechNewsData: [],
};
const allTechNewsSlice = createSlice({
  name: "AllTechNews",
  initialState,
  reducers: {
    techNewsRequest: (state) => {
      state.allTechNewsLoading = true;
      state.allTechNewsError = null;
    },
    allTechNewsRetrieved: (
      state,
      action: PayloadAction<IAllSportsNewsData>
    ) => {
      state.allTechNewsLoading = false;
      state.allTechNewsSuccess = true;
      state.allTechNewsData = [
        ...state?.allTechNewsData,
        ...action.payload.articles,
      ];
    },
    allTechNewsFailed: (state, action: PayloadAction<IError>) => {
      state.allTechNewsLoading = false;
      state.allTechNewsFail = true;
      state.allTechNewsError = action.payload;
    },
  },
});
export const { allTechNewsFailed, allTechNewsRetrieved, techNewsRequest } =
  allTechNewsSlice.actions;
export default allTechNewsSlice.reducer;
