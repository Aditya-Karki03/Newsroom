import { call, put, takeLatest } from "redux-saga/effects";
import { INewsApiResponse, IError } from "../../interfaces/interface";
// import { PayloadAction } from "@reduxjs/toolkit";
import * as API from "../../services/api";
import {
  allTechNewsFailed,
  allTechNewsRetrieved,
  techNewsRequest,
} from "./slice";

function* getTechNews() {
  try {
    const response: INewsApiResponse = yield call(API.allTechNewsApi);
    if (response?.data?.status == "ok") {
      yield put(allTechNewsRetrieved(response?.data));
    } else {
      const errMessage: IError = {
        error: "Cannot Retrieve Sports News at this time",
        errorCode: response?.data?.status,
      };
      yield put(allTechNewsFailed(errMessage));
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
    yield put(allTechNewsFailed(errMessage));
  }
}

export const getAllTechNews = [takeLatest(techNewsRequest, getTechNews)];
