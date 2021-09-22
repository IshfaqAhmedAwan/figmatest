import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import LoadingOverlay from 'react-loading-overlay-ts';
import Grid from '@material-ui/core/Grid';
import Australia from 'assets/images/Australia.png';
import america from 'assets/images/america.png';
import FlagSelect from 'components/FlagSelect';
import { IFormInput } from 'pages/User/interfaces';
import { useHistory } from 'react-router-dom';
import { path } from 'paths';
import { capitalizeFirstLetter } from 'HelperFunctions';
import SubmitButton, { Body, FormField, Logo, StyledTextField, Wall } from 'StyledComponents/UserStyle';
import { InputAdornment } from '@material-ui/core';

const Flags = [
  {
    img: america,
    code: '+1-United States',
  },
  {
    img: Australia,
    code: '+61-Australia',
  },
];

const UserForm = (props: any) => {
  let history = useHistory();
  //This state is to send true or false to component FlagSelect to trigger dialogue box
  const [isFlagDialog, setisFlagDialog] = useState(false);
  const [selectedFlag, setSelectedFlag] = React.useState(Flags[0].img);
  const [phonePattern, setPhonePattern] = useState('US');
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    return () => setisFlagDialog(false);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormInput>({ mode: 'onChange' });

  const onSubmit = (data: IFormInput) => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 5000);

    data = {
      ...data,
      firstName: capitalizeFirstLetter(data.firstName),
      lastName: capitalizeFirstLetter(data.lastName),
    };
    props.submitUser(data);
    history.push(path.HOME_PAGE);
  }; // your form submit function which will invoke after successful validation

  //Call back function for FlagSelect component
  const flagStateChange = (index: number) => {
    setisFlagDialog(false);
    setSelectedFlag(Flags[index].img);
    Flags[index].code === '+1-United States' ? setPhonePattern('US') : setPhonePattern('AUS');
  };

  return (
    <div>
      <Body>
        <LoadingOverlay active={loader} spinner={true} text='Loading ...'>
          <Wall>
            <Logo />{' '}
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container direction='row' spacing={0}>
                <Grid container spacing={6}>
                  <Grid item xs={5}>
                    <StyledTextField
                      variant={'outlined'}
                      width='170px'
                      height='58px'
                      error={!!errors?.firstName}
                      id='standard-basic'
                      label='First Name'
                      {...register('firstName', {
                        required: true,
                        pattern: /^[A-Za-z]+$/i,
                      })}
                      helperText={!!errors?.firstName ? 'Required or invalid' : ''}
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <StyledTextField
                      variant={'outlined'}
                      width='170px'
                      height='58px'
                      error={!!errors?.lastName}
                      id='standard-basic'
                      label='Last Name'
                      {...register('lastName', {
                        required: true,
                        pattern: /^[A-Za-z]+$/i,
                      })}
                      helperText={!!errors?.lastName ? 'Required or invalid' : ''}
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <StyledTextField
                      variant={'outlined'}
                      width='366px'
                      height='58px'
                      error={!!errors?.phoneNumber}
                      id='standard-basic'
                      label='Phone Number'
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <img src={selectedFlag} alt='logo' onClick={() => setisFlagDialog(true)} />
                          </InputAdornment>
                        ),
                      }}
                      {...register('phoneNumber', {
                        required: true,
                        pattern: phonePattern === 'AUS' ? /^[0-9\s]*$/i : /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/i,
                      })}
                      helperText={!!errors?.phoneNumber ? 'invalid phone number' : ''}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <StyledTextField
                      variant={'outlined'}
                      width='366px'
                      height='58px'
                      error={!!errors?.email}
                      id='standard-basic'
                      label='Email'
                      {...register('email', {
                        required: true,
                        pattern: /^[a-z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      })}
                      helperText={!!errors?.email ? 'Invalid email address' : ''}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <StyledTextField
                      variant={'outlined'}
                      width='366px'
                      height='58px'
                      error={!!errors?.password}
                      id='standard-basic'
                      label='Password'
                      {...register('password', {
                        required: true,
                        minLength: 8,
                        pattern: /^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*)$/i,
                      })}
                      helperText={
                        errors?.password?.type === 'required'
                          ? 'Required'
                          : errors?.password?.type === 'minLength'
                          ? 'Oops! You need a password longer than 8 characters with numbers and letters.'
                          : errors?.password?.type === 'pattern'
                          ? 'Password must contain atleast 1 uppercase, lowercase and number'
                          : ''
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <SubmitButton disabled={!isValid} type='submit'>
                      {' '}
                      Next{' '}
                    </SubmitButton>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </Wall>
        </LoadingOverlay>

        <FlagSelect isFlagDialog={isFlagDialog} getIndex={flagStateChange} />
      </Body>
    </div>
  );
};

export default UserForm;
