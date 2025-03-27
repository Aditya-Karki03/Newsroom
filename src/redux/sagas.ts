import { all } from "redux-saga/effects";
import { getSportsNewsData } from "../pages/AllSports/saga";
import { getAllNewsData } from "../pages/AllNews/saga";
import { getAllBusinessNewsData } from "../pages/AllBusinessNews/saga";

function* rootSaga() {
  yield all([
    ...getSportsNewsData,
    ...getAllNewsData,
    ...getAllBusinessNewsData,
  ]);
}
export default rootSaga;
