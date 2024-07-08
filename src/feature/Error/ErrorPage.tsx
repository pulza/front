import { Column, Grid, Stack } from '@carbon/react';
import { WarningHexFilled } from '@carbon/react/icons';

import React from 'react';
import { ERROR_CODE_AND_MESSAGE } from './ErrorPage.constant';

export type ErrorPageProps = {
  statusCode: number;
};

export const ErrorPage: React.FC<ErrorPageProps> = ({ statusCode }) => {
  const errorMessage = ERROR_CODE_AND_MESSAGE[statusCode];

  return (
    <>
      <Grid>
        <Column sm={{ offset: 0 }}>
          <WarningHexFilled size={64} />
        </Column>
        <Column sm={'75%'} md={{ offset: 1, span: '50%' }}>
          <Stack gap={5}>
            <span>{errorMessage.en}</span>
            <span>{errorMessage.ko}</span>
          </Stack>
        </Column>
      </Grid>
    </>
  );
};
