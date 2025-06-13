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
    case types.signup: {
      return produce(state, (draft) => {
        draft.customer = action.payload.customer;
      });
    }

    case types.set_petshops: {
      return produce(state, (draft) => {
        draft.petshops = action.payload;
      });
    }

    case types.set_petshop_map_selected: {
      return produce(state, (draft) => {
        draft.petshopMapSelected = action.petshops;
      });
    }

    case types.set_map_center: {
      return produce(state, (draft) => {
        draft.mapCenter = action.location;
      });
    }

    default:
      return state;
  }
}
