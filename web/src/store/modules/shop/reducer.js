import { produce } from "immer";
import types from "./types.js";

const INITIAL_STATE = {
  customer: {},
  petshops: [],
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

    default:
      return state;
  }
}
