import { IFormInput } from "pages/User/interfaces";
import { SUBMIT } from "store/types";

export const submitUser = (value: IFormInput) => ({
  type: SUBMIT,
  payload: value,
});
