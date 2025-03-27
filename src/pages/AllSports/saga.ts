import { call, put, takeLatest } from "redux-saga/effects";
import { IAllSportsNewsApiResponse, IError } from "../../interfaces/interface";
// import { PayloadAction } from "@reduxjs/toolkit";
import * as API from "../../services/api";
import {
  allSportsNewsFailed,
  allSportsNewsRetrieved,
  allSportsRequest,
} from "./slice";

function* getSportsNews() {
  try {
    const response: IAllSportsNewsApiResponse = yield call(API.sportsNewsApi);
    if (response?.data?.status == "ok") {
      console.log(response.data);
      yield put(allSportsNewsRetrieved(response?.data));
    } else {
      const errMessage: IError = {
        error: "Cannot Retrieve Sports News at this time",
        errorCode: response?.data?.status,
      };
      yield put(allSportsNewsFailed(errMessage));
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
    yield put(allSportsNewsFailed(errMessage));
  }
}

export const getSportsNewsData = [takeLatest(allSportsRequest, getSportsNews)];
