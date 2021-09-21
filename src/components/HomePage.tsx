import React from 'react';
import Logo from 'components/Logo.png';
import Message from 'components/MessageLogo.png';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { RootStateOrAny, useSelector } from 'react-redux';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wall: {
      background: '#e5e5e5',
      width: '100%',
      minHeight: '900px',
    },
    root: {
      backgroundColor: '#FFFFFF',
      maxWidth: '414px',
      height: '836px',
      marginTop: '30px',
      paddingLeft: '25px',
      marginLeft: '333px',
      '& .MuiGrid-spacing-xs-6 > .MuiGrid-item': {
        paddingTop: '3px',
      },
    },
    logo: {
      marginTop: '34px',
      marginBottom: '30px',
      marginLeft: '10px',
      width: '96px',
      height: '30px',
    },
    message: {
      marginTop: '44px',
      marginBottom: '0px',
      marginLeft: '10px',
      width: '71px',
      height: '53.99px',
    },
    heading: {
      position: 'absolute',
      width: '277px',
      height: '87px',
      marginTop: '20px',
      paddingLeft: '55px',
      fontFamily: 'Rawline',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '22px',
      lineHeight: '29px',
      color: '#000000',
    },
    text: {
      position: 'absolute',
      width: '366px',
      height: '181px',
      marginLeft: '10px',
      marginTop: '30px',
      fontFamily: 'Rawline',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '15px',
      lineHeight: '21px',
      color: 'rgba(0, 0, 0, 0.54)',
    },
  })
);

function HomePage() {
  const classes = useStyles();
  //useSelector hook is used to make store object to get data from store
  const user = useSelector((state: RootStateOrAny) => state.user.info);
  console.log('HomePage user data ', user);

  return (
    <div className={classes.wall}>
      <div className={classes.root}>
        <img src={Logo} alt='logo' className={classes.logo} />

        <Grid container direction='row' spacing={0}>
          <Grid container spacing={6}>
            <Grid item xs={1}>
              <img src={Message} alt='logo' className={classes.message} />
            </Grid>
            <Grid item xs={2}>
              <h1 className={classes.heading}>
                Thanks, {user.firstName}! <br /> We've received your <br /> Application
              </h1>
            </Grid>
          </Grid>
        </Grid>

        <div>
          <text className={classes.text}>
            We’ll process your application as soon as possible and send you a decision within 30 days to {user.phoneNumber} or{' '}
            {user.email}.com. We will contact you in case more information is needed. While we’re reviewing your application,
            please don’t submit another application for the uPet’s breeder program.
          </text>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
