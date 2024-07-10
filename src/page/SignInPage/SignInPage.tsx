import { SignIn } from '@/feature/SignIn';
import { Column, Grid } from '@carbon/react';
import React from 'react';

export const SignInPage: React.FC = () => {
  return (
    <Grid fullWidth>
      <Column sm={{ span: 4, offset: 0 }} md={{ span: 8, offset: 0 }} lg={{ span: 8, offset: 4 }}>
        <SignIn />
      </Column>
    </Grid>
  );
};
