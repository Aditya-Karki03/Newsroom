import { call, put, takeLatest } from "redux-saga/effects";
import { IAllSportsNewsApiResponse, IError } from "../../interfaces/interface";
// import { PayloadAction } from "@reduxjs/toolkit";
import * as API from "../../services/api";
import { allNewsFailed, allNewsRetrieved, newsRequest } from "./slice";

function* getAllNews() {
  try {
    const response: IAllSportsNewsApiResponse = yield call(API.allNewsApi);
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
