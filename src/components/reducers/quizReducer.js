import { types } from "../../types/types";

const init = {
  name: "",
  pointers: 0,
};

export const quizReducer = (state = init, action) => {
  switch (action.type) {
    case types.quiz_corect:
      return {
        ...state,
        pointers: action.payload,
      };
    case types.quiz_reset:
        return {
            ...state,
            pointers: 0
        }
    default:
      return state;
  }
};
