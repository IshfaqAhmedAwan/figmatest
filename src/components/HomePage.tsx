import React from "react";
import Logo from "components/Logo.png";
import Message from "components/MessageLogo.png";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#FFFFFF",
      maxWidth: "414px",
      height: "836px",
      marginTop: "30px",
      paddingLeft: "25px",
      "& .MuiGrid-spacing-xs-6 > .MuiGrid-item": {
        paddingTop: "3px",
      },
    },

    logo: {
      marginTop: "34px",
      marginBottom: "30px",
      marginLeft: "10px",
      width: "96px",
      height: "30px",
    },
    message: {
      marginTop: "44px",
      marginBottom: "0px",
      marginLeft: "10px",
      width: "71px",
      height: "53.99px",
    },
  })
);

function HomePage(content: any) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src={Logo} alt="logo" className={classes.logo} />

      <Grid container direction="row" spacing={0}>
        <Grid container spacing={6}>
          <Grid item xs={1}>
            <img src={Message} alt="logo" className={classes.message} />
          </Grid>
          <Grid item xs={2}>
            <h1>
              Thanks, {content.userdata.firstName}! <br /> We've received your{" "}
              <br /> Application
            </h1>
          </Grid>
        </Grid>
      </Grid>

      <div>
        <text>
          We’ll process your application as soon as possible and send you a
          decision within 30 days to {content.userdata.phoneNumber} or{" "}
          {content.userdata.email}.com. We will contact you in case more
          information is needed. While we’re reviewing your application, please
          don’t submit another application for the uPet’s breeder program.
        </text>
      </div>
    </div>
  );
}

export default HomePage;
