import { Column, Grid } from '@carbon/react';
import { SignUp } from '@/feature/SignUp';
import React from 'react';

const SignUpPage: React.FC = () => {
  return (
    <Grid fullWidth>
      <Column sm={{ span: 4, offset: 0 }} md={{ span: 8, offset: 0 }} lg={{ span: 8, offset: 4 }}>
        <SignUp />
      </Column>
    </Grid>
  );
};

export default SignUpPage;
