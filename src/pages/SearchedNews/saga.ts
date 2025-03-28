import { call, put, takeLatest } from "redux-saga/effects";
import { INewsApiResponse, IError, IQuery } from "../../interfaces/interface";
import * as API from "../../services/api";
import { searchNewsFailed, searchNewsRetrieved, searchRequest } from "./slice";
import { PayloadAction } from "@reduxjs/toolkit";

function* getSearchedNews(action: PayloadAction<IQuery>) {
  try {
    const response: INewsApiResponse = yield call(() =>
      API.searchNewsApi(action.payload)
    );
    if (response?.data?.status == "ok") {
      yield put(searchNewsRetrieved(response?.data));
    } else {
      const errMessage: IError = {
        error: "Cannot Retrieve Sports News at this time",
        errorCode: response?.data?.status,
      };
      yield put(searchNewsFailed(errMessage));
    }
  } catch (error: any) {
    let message = "Something went wrong. while fetching all connections";
    if (error?.response?.data?.message) {
      message = error?.response?.data?.message;
    }
    const errMessage: IError = {
      error: message,
      errorCode: error?.response?.status,
    };
    yield put(searchNewsFailed(errMessage));
  }
}

export const getSearchedNewsData = [takeLatest(searchRequest, getSearchedNews)];
