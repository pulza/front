import type { PropsWithChildren } from 'react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import clsx from 'clsx';
import { Content, Theme } from '@carbon/react';
import { Gnb } from '@/feature/Gnb';
import { useThemeDetector } from '@/styles/useDarkmode';

import styles from '@/App.module.scss';

export const App: React.FC<PropsWithChildren> = () => {
  const darkmode = useThemeDetector();

  return (
    <Theme theme={darkmode ? 'g90' : 'g10'} className={clsx(styles.container)}>
      <Gnb />
      <Content>
        <Outlet />
      </Content>
    </Theme>
  );
};
