import { Column, Grid } from '@carbon/react';
import { SignUp } from '@/feature/SignUp';
import React from 'react';

const SignUpPage: React.FC = () => {
  return (
    <Grid fullWidth>
      <Column lg={{ span: 8, offset: 4 }}>
        <SignUp />
      </Column>
    </Grid>
  );
};

export default SignUpPage;
