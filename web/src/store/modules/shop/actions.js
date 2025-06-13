import types from "./types.js";

export function setCustom(customer) {
  return {
    type: types.signup,
    payload: { customer },
  };
}

export function requestPetshops() {
  return { type: types.request_petshops };
}

export function setPetshops(petshops) {
  return {
    type: types.set_petshops,
    payload: petshops,
  };
}

export function setShopMapSelected(petshop) {
  return { type: types.set_petshop_map_selected, petshop };
}

export function setMapCenter(location) {
  return { type: types.set_map_center, location };
}
