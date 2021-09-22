import React from 'react';
import { Grid } from '@material-ui/core';
import { RootStateOrAny, useSelector } from 'react-redux';
import { Body, Heading, Logo, MessageIcon, Paragraph, Wall } from 'StyledComponents/UserStyle';

function HomePage() {
  const user = useSelector((state: RootStateOrAny) => state.user.info);

  return (
    <Body>
      <Wall>
        <Logo />

        <Grid container direction='row' spacing={0}>
          <Grid container spacing={6}>
            <Grid item xs={1}>
              <MessageIcon />
            </Grid>
            <Grid item xs={2}>
              <Heading>
                Thanks, {user.firstName}! <br /> We've received your <br /> Application
              </Heading>
            </Grid>
          </Grid>
        </Grid>

        <div>
          <Paragraph>
            We’ll process your application as soon as possible and send you a decision within 30 days to {user.phoneNumber} or{' '}
            {user.email}.com. We will contact you in case more information is needed. While we’re reviewing your application,
            please don’t submit another application for the uPet’s breeder program.
          </Paragraph>
        </div>
      </Wall>
    </Body>
  );
}

export default HomePage;
