import { call, put, takeLatest } from "redux-saga/effects";
import { INewsApiResponse, IError, TPage } from "../../interfaces/interface";
import * as API from "../../services/api";
import { allNewsFailed, allNewsRetrieved, newsRequest } from "./slice";
import { PayloadAction } from "@reduxjs/toolkit";

function* getAllNews(action: PayloadAction<TPage>) {
  try {
    const response: INewsApiResponse = yield call(() =>
      API.allNewsApi(action.payload)
    );
    if (response?.data?.status == "ok") {
      yield put(allNewsRetrieved(response?.data));
    } else {
      const errMessage: IError = {
        error: "Cannot Retrieve Sports News at this time",
        errorCode: response?.data?.status,
      };
      yield put(allNewsFailed(errMessage));
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
    yield put(allNewsFailed(errMessage));
  }
}

export const getAllNewsData = [takeLatest(newsRequest, getAllNews)];
