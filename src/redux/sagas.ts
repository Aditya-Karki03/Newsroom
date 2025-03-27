import { all } from "redux-saga/effects";
import { getSportsNewsData } from "../pages/AllSports/saga";
import { getAllNewsData } from "../pages/AllNews/saga";
import { getAllBusinessNewsData } from "../pages/AllBusinessNews/saga";
import { getAllTechNews } from "../pages/AllTechNews/saga";

function* rootSaga() {
  yield all([
    ...getSportsNewsData,
    ...getAllNewsData,
    ...getAllBusinessNewsData,
    ...getAllTechNews,
  ]);
}
export default rootSaga;
