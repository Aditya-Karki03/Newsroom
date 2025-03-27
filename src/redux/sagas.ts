import { all } from "redux-saga/effects";
import { getSportsNewsData } from "../pages/AllSports/saga";
import { getAllNewsData } from "../pages/AllNews/saga";

function* rootSaga() {
  yield all([...getSportsNewsData, ...getAllNewsData]);
}
export default rootSaga;
