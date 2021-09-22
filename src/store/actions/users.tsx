import { IFormInput } from "config/interfaces";
import { SUBMIT } from "store/types";

export const submitUser = (value: IFormInput) => ({
  type: SUBMIT,
  payload: value,
});
