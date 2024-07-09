import type { ReactNode } from 'react';
import React from 'react';
import { ErrorPage } from '@/feature/Error';
import { Column, Grid } from '@carbon/react';
import { useQueryParams } from '@/util/useQueryParams';

const CommonErrorPage: React.FC<unknown> = () => {
  const queryParams = useQueryParams();
  const errorCodeNo = queryParams.get('code');

  const errorPageWarpper = (child: ReactNode) => (
    <Grid fullWidth>
      <Column sm={{ span: 4, offset: 1 }} md={{ span: 4, offset: 2 }} lg={{ span: 4, offset: 6 }}>
        {child}
      </Column>
    </Grid>
  );

  if (!errorCodeNo) {
    return errorPageWarpper(ErrorPage({ statusCode: 500 }));
  }

  return errorPageWarpper(ErrorPage({ statusCode: Number(errorCodeNo) }));
};

export default CommonErrorPage;
