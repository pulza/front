import { SignIn } from '@/feature/SignIn';
import { Column, Grid } from '@carbon/react';
import React from 'react';

export const SignInPage: React.FC = () => {
  return (
    <Grid fullWidth>
      <Column lg={{ span: 8, offset: 4 }}>
        <SignIn />
      </Column>
    </Grid>
  );
};
