import type { PropsWithChildren } from 'react';
import React from 'react';
import { useThemeDetector } from './styles/useDarkmode';
import { Content, Theme } from '@carbon/react';
import { Gnb } from './feature/Gnb';
import clsx from 'clsx';

import styles from './App.module.scss';

export const App: React.FC<PropsWithChildren> = ({ children }) => {
  const darkmode = useThemeDetector();

  return (
    <Theme theme={darkmode ? 'g90' : 'g10'} className={clsx(styles.container)}>
      <Gnb />
      <Content>{children}</Content>
    </Theme>
  );
};
