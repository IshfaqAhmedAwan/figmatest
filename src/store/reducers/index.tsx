import { SUBMIT } from "store/types";

export const user = (state = { info: [] }, action: any) => {
  switch (action.type) {
    case SUBMIT: {
      return {
        ...state,
        info: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
