import * as Yup from 'yup';

export const signUpSchema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  password: Yup.string().required().min(8, 'Password must be 8 character Long'),
  email: Yup.string().required().email(),
  phoneNumber: Yup.string().required(),
});
