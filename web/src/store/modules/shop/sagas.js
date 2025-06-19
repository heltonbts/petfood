import { takeLatest, all, call, put } from "redux-saga/effects";

import types from "./types.js";
import api from "../../../services/api.js";
import { setPetshops, setPetshop } from "./actions.js";

export function* requestPetshops() {
  const response = yield call(api.get, "/petshops");
  const res = response.data;
  yield put(setPetshops(res));
}

export function* requestPetshop(action) {
  const { id } = action.payload;

  const response = yield call(api.get, `/petshops/${id}`);
  const { petshop, produtos } = response.data;

  // ✅ combinar petshop com produtos
  const petshopCompleto = { ...petshop, products: produtos };

  yield put(setPetshop(petshopCompleto));
  console.log("Petshop completo:", petshopCompleto);
}

export default function* shopSaga() {
  yield all([
    takeLatest(types.REQUEST_PETSHOP, requestPetshop),
    takeLatest(types.REQUEST_PETSHOPS, requestPetshops),
  ]);
}
