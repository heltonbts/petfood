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
