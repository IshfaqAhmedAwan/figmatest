import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import LoadingOverlay from 'react-loading-overlay-ts';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Australia from 'assets/images/Australia.png';
import america from 'assets/images/america.png';
import FlagSelect from 'components/FlagSelect';
import { IFormInput } from 'pages/User/interfaces';
import { useHistory } from 'react-router-dom';
import { path } from 'paths';
import { capitalizeFirstLetter } from 'HelperFunctions';
import formStyles from 'components/FormStyle';
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#FFFFFF',
      maxWidth: '414px',
      height: '836px',
      marginTop: '30px',
      paddingLeft: '25px',

      '& .MuiGrid-spacing-xs-2 > .MuiGrid-item': {
        padding: '18px',
      },
      '& .MuiFormLabel-root.Mui-focused': {
        color: '#02E0B1',
      },
    },

    logo: {
      marginTop: '34px',
      marginBottom: '30px',
      marginLeft: '10px',
      width: '96px',
      height: '30px',
    },

    formnames: {
      width: '170px',
      height: '58px',
      marginLeft: '10px',
      marginBottom: '20px',
    },
    formfields: {
      width: '366px',
      height: '58px',
    },
    phonenumber: {
      width: '366px',
      height: '58px',

      '& .MuiOutlinedInput-input:-webkit-autofill': {
        paddingLeft: '44px',
      },
      '& .MuiOutlinedInput-input': {
        paddingLeft: '41px',
      },
    },

    container: {
      position: 'relative',
      padding: '0',
      margin: '0',

      '& .MuiFormLabel-root.Mui-focused': {
        paddingLeft: '5px',
      },
      '& .MuiInputLabel-outlined': {
        paddingLeft: '30px',
      },
    },
    flagimg: {
      position: 'absolute',
      bottom: '20px',
      left: '12px',
      width: '24px',
      height: '16px',
    },
  })
);

const UserForm = (props: any) => {
  let history = useHistory();
  const classes = useStyles();
  const formClasses = formStyles();
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
    <div className={formClasses.wall}>
      <div className={formClasses.body}>
        <LoadingOverlay active={loader} spinner={true} text='Loading ...'>
          <div className={classes.root}>
            <div>
              {' '}
              <img src='Logo.png' alt='logo' className={classes.logo} />{' '}
            </div>  
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container direction='row' spacing={0}>
                <Grid container spacing={6}>
                  <Grid item xs={5}>
                    <TextField
                      variant={'outlined'}
                      error={!!errors?.firstName}
                      id='standard-basic'
                      label='First Name'
                      className={classes.formnames}
                      {...register('firstName', {
                        required: true,
                        pattern: /^[A-Za-z]+$/i,
                      })}
                      helperText={!!errors?.firstName ? 'Required or invalid' : ''}
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      variant={'outlined'}
                      error={!!errors?.lastName}
                      id='standard-basic'
                      label='Last Name'
                      className={classes.formnames}
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
                    <div className={classes.container}>
                      <TextField
                        variant={'outlined'}
                        error={!!errors?.phoneNumber}
                        id='standard-basic'
                        label='Phone Number'
                        className={classes.phonenumber}
                        {...register('phoneNumber', {
                          required: true,
                          pattern: phonePattern === 'AUS' ? /^[0-9\s]*$/i : /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/i,
                        })}
                        helperText={!!errors?.phoneNumber ? 'invalid phone number' : ''}
                      />
                      <img src={selectedFlag} alt='logo' className={classes.flagimg} onClick={() => setisFlagDialog(true)} />
                    </div>
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      variant={'outlined'}
                      error={!!errors?.email}
                      id='standard-basic'
                      label='Email'
                      className={classes.formfields}
                      {...register('email', {
                        required: true,
                        pattern: /^[a-z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      })}
                      helperText={!!errors?.email ? 'Invalid email address' : ''}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      variant={'outlined'}
                      error={!!errors?.password}
                      id='standard-basic'
                      label='Password'
                      className={classes.formfields}
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
                    <input disabled={!isValid} type='submit' className={formClasses.button} />
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </div>
        </LoadingOverlay>

        <FlagSelect isFlagDialog={isFlagDialog} getIndex={flagStateChange} />
      </div>
    </div>
  );
};

export default UserForm;
