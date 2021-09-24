import * as Yup from 'yup';

export const signUpSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is Required!'),
  lastName: Yup.string().required('Last Name is Required!'),
  password: Yup.string()
    .required('Password is Required!')
    .min(8, 'Password must be 8 character Long')
    .matches(/^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*)+$/, 'Password must contain atleast 1 uppercase, lowercase and number'),
  email: Yup.string().required('Email is Required!').email('Invalid email address!'),
  phoneNumber: Yup.string()
    .required('Phone Number is Required!')
    .when('country', {
      is: 'US',
      then: Yup.string().matches(/^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/, 'invalid Phone Number'),
    }),
    
});
