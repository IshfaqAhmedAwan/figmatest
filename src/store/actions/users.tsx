import { IFormInput } from "components/interfaces";
import { SUBMIT } from "store/types";

export const submitUser = (value: IFormInput) => ({
  type: SUBMIT,
  payload: value,
});
