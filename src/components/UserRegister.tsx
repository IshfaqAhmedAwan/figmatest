import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import LoadingOverlay from 'react-loading-overlay-ts';
import { yupResolver } from '@hookform/resolvers/yup';
import Grid from '@material-ui/core/Grid';
import Australia from 'assets/images/Australia.png';
import america from 'assets/images/america.png';
import FlagSelect from 'components/FlagSelect';
import { IFormInput } from 'pages/User/interfaces';
import { useHistory } from 'react-router-dom';
import { path } from 'paths';
import { capitalizeFirstLetter } from 'HelperFunctions';
import SubmitButton, { LoadingBackground, StyledTextField } from 'StyledComponents/UserStyle';
import { InputAdornment } from '@material-ui/core';
import { Background, FormBackground, Logo } from 'StyledComponents/CommonStyle';
import { signUpSchema } from 'pages/User/validations';

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
  const [loaded, setLoaded] = useState(true);
  const resolver = yupResolver(signUpSchema);

  useEffect(() => {
    return () => setisFlagDialog(false);
  }, []);

  const { handleSubmit, formState, control, setValue } = useForm<any>({ mode: 'onBlur', resolver });
  const { isValid } = formState;

  const onSubmit = (data: IFormInput) => {
    setLoaded(!loaded);
    data = {
      ...data,
      firstName: capitalizeFirstLetter(data.firstName),
      // lastName: capitalizeFirstLetter(data.lastName),
    };
    props.submitUser(data);

    setTimeout(() => {
      setLoaded(true);
      history.push(path.HOME_PAGE);
    }, 3000);
  }; // your form submit function which will invoke after successful validation

  //Call back function for FlagSelect component
  const flagStateChange = (index: number) => {
    setisFlagDialog(false);
    setSelectedFlag(Flags[index].img);
    Flags[index].code === '+1-United States' ? setPhonePattern('US') : setPhonePattern('AUS');
  };

  return (
    <div>
      <LoadingBackground disappear={!loaded}>
        <LoadingOverlay
          active={true}
          // spinner={<BounceLoader />}
          spinner={true}
        ></LoadingOverlay>
      </LoadingBackground>
      <Background>
        <FormBackground>
          <Logo />{' '}
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container direction='row' spacing={0}>
              <Grid container spacing={6}>
                <Grid item xs={5}>
                  <Controller
                    render={({ field, formState }) => (
                      <StyledTextField
                        variant={'outlined'}
                        width='170px'
                        height='58px'
                        id='standard-basic'
                        label='First Name'
                        {...field}
                        error={!!formState.errors?.firstName}
                        helperText={!!formState.errors?.firstName ? formState.errors.firstName.message : ''}
                      />
                    )}
                    name='firstName'
                    control={control}
                    defaultValue=''
                  />
                </Grid>
                <Grid item xs={5}>
                  <Controller
                    render={({ field, formState }) => (
                      <StyledTextField
                        variant={'outlined'}
                        width='170px'
                        height='58px'
                        id='standard-basic'
                        label='last Name'
                        {...field}
                        error={!!formState.errors?.lastName}
                        helperText={!!formState.errors?.lastName ? formState.errors.lastName.message : ''}
                      />
                    )}
                    name='lastName'
                    control={control}
                    defaultValue=''
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Controller
                    render={({ field, formState }) => (
                      <StyledTextField
                        variant={'outlined'}
                        width='366px'
                        height='58px'
                        id='standard-basic'
                        label='Phone Number'
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position='start'>
                              <img src={selectedFlag} alt='logo' onClick={() => setisFlagDialog(true)} />
                            </InputAdornment>
                          ),
                        }}
                        {...field}
                        error={!!formState.errors?.phoneNumber}
                        helperText={!!formState.errors?.phoneNumber ? formState.errors.phoneNumber.message : ''}
                      />
                    )}
                    name='phoneNumber'
                    control={control}
                    defaultValue=''
                  />
                </Grid>

                <Grid item xs={12}>
                  <Controller
                    render={({ field, formState }) => (
                      <StyledTextField
                        variant={'outlined'}
                        width='366px'
                        height='58px'
                        id='standard-basic'
                        label='Email'
                        {...field}
                        error={!!formState.errors?.email}
                        helperText={!!formState.errors?.email ? formState.errors.email.message : ''}
                      />
                    )}
                    name='email'
                    control={control}
                    defaultValue=''
                  />
                </Grid>

                <Grid item xs={12}>
                  <Controller
                    render={({ field, formState }) => (
                      <StyledTextField
                        variant={'outlined'}
                        width='366px'
                        height='58px'
                        id='standard-basic'
                        label='Password'
                        type='password'
                        {...field}
                        error={!!formState.errors?.password}
                        helperText={!!formState.errors?.password ? formState.errors.password.message : ''}
                      />
                    )}
                    name='password'
                    control={control}
                    defaultValue=''
                  />
                </Grid>
                <Grid item xs={12}>
                  {/* Created a custum field in register validate according to country in yup schema */}
                  {setValue('country', phonePattern)}

                  <SubmitButton type='submit' disabled={!isValid}>
                    {' '}
                    Next{' '}
                  </SubmitButton>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </FormBackground>

        <FlagSelect isFlagDialog={isFlagDialog} getIndex={flagStateChange} />
      </Background>
    </div>
  );
};

export default UserForm;
