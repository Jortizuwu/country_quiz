import { types } from "../../types/types";

const init = {
  countrys: [],
  loading: true,
  err: null,
};

export const fetchReducer = (state = init, action) => {
  switch (action.type) {
    case types.country_success:
      return {
        ...state,
        countrys: action.payload,
        loading: false,
      };
    case types.country_failure:
      return {
        ...state,
        err: action.payload,
      };
    default:
      return state;
  }
};
