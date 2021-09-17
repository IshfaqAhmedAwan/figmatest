import { SUBMIT } from "../types";

export const figma = (state = { user_data: [] }, action: any) => {
  switch (action.type) {
    case SUBMIT: {
      return {
        ...state,
        user_data: [...state.user_data, action.payload],
      };
    }

    default: {
      return state;
    }
  }
};