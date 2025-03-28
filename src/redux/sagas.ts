import { all } from "redux-saga/effects";
import { getSportsNewsData } from "../pages/AllSports/saga";
import { getAllNewsData } from "../pages/AllNews/saga";
import { getAllBusinessNewsData } from "../pages/AllBusinessNews/saga";
import { getAllTechNews } from "../pages/AllTechNews/saga";
import { getSearchedNewsData } from "../pages/SearchedNews/saga";

function* rootSaga() {
  yield all([
    ...getSportsNewsData,
    ...getAllNewsData,
    ...getAllBusinessNewsData,
    ...getAllTechNews,
    ...getSearchedNewsData,
  ]);
}
export default rootSaga;
