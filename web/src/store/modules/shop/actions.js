import types from "./types.js";

export function setCustom(customer) {
  return {
    type: types.SIGNUP,
    payload: { customer },
  };
}

export function requestPetshops() {
  return { type: types.REQUEST_PETSHOPS };
}

export function setPetshops(petshops) {
  return {
    type: types.SET_PETSHOPS,
    payload: petshops,
  };
}

export function setPetshop(petshopData) {
  return {
    type: types.SET_PETSHOP,
    payload: petshopData,
  };
}

export function setShopMapSelected(petshopId) {
  return { type: types.SET_PETSHOP_MAP_SELECTED, payload: petshopId };
}

export function setMapCenter(location) {
  return { type: types.SET_MAP_CENTER, location };
}

export function requestPetshop(id) {
  return { type: types.REQUEST_PETSHOP, payload: { id } };
}

export function toggleCartProduct(product) {
  return { type: types.TOGGLE_CART_PRODUCT, payload: { product } };
}
