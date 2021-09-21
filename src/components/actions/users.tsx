import { IFormInput } from "components/interfaces";
import { SUBMIT } from "components/types";

export const submitUser = (value: IFormInput) => ({
  type: SUBMIT,
  payload: value,
});
