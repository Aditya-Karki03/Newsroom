import { all } from "redux-saga/effects";
import { getSportsNewsData } from "../pages/AllSports/saga";

function* rootSaga() {
  yield all([...getSportsNewsData]);
}
export default rootSaga;
