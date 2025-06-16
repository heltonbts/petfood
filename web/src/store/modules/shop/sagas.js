import { takeLatest, all, call, put } from "redux-saga/effects";

import types from "./types.js";
import api from "../../../services/api.js";
import { setPetshops } from "./actions.js";

export function* requestPetshops() {
  const response = yield call(api.get, "/petshops");
  const res = response.data;
  yield put(setPetshops(res));
  console.log(res);
}

export default function* shopSaga() {
  yield all([takeLatest(types.REQUEST_PETSHOPS, requestPetshops)]);
}
