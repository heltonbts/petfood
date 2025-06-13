import { all } from "redux-saga/effects";

import shopSaga from "./shop/sagas.js";

export default function* rootSaga() {
  yield all([shopSaga()]);
}
