import { IFormInput } from "../interfaces";
import { SUBMIT} from "../types";
let id=0

export const submitUser = (value:IFormInput) => (
    {
        type: SUBMIT,
        payload: {
            id: ++id,
            content: value
        }
    }
);