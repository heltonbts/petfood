import { produce } from "immer";
import types from "./types.js";

const INITIAL_STATE = {
  customer: {},
  petshops: [],
  petshopMapSelected: null,
  mapCenter: {
    lat: -23.561684,
    lng: -46.625378,
  },
};

export default function shop(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SIGNUP: {
      return produce(state, (draft) => {
        draft.customer = action.payload.customer;
      });
    }

    case types.SET_PETSHOPS: {
      return produce(state, (draft) => {
        draft.petshops = action.payload;
      });
    }

    case types.SET_PETSHOP_MAP_SELECTED: {
      return produce(state, (draft) => {
        draft.petshopMapSelected = action.payload;
      });
    }

    case types.SET_MAP_CENTER: {
      return produce(state, (draft) => {
        draft.mapCenter = action.location;
      });
    }

    default:
      return state;
  }
}
