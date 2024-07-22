import {
  Header,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderMenu,
  HeaderMenuItem,
  HeaderName,
  HeaderNavigation,
  HeaderPanel,
  Switcher,
  SwitcherItem,
} from '@carbon/react';
import { User } from '@carbon/react/icons';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from '@/feature/Gnb/Gnb.module.scss';
import { atoms } from '@/store';
import { useAtom } from 'jotai';
import { useAutoLogin, useLogout } from './Authentication.hook';

export const Gnb: React.FC = () => {
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const [userAtom] = useAtom(atoms.userAtom);
  const { autoLogin } = useAutoLogin();
  const { logout } = useLogout();

  const doLogoutClick = async () => {
    logout();
  };

  useEffect(() => {
    autoLogin();
  }, [autoLogin]);

  return (
    <Header aria-label="header">
      <Link to="/" className={styles.homeLinkButton}>
        <HeaderName prefix="Pulza" />
      </Link>
      <HeaderNavigation aria-label="Pulza">
        <HeaderMenu aria-label="문제" menuLinkName="문제">
          <HeaderMenuItem href="#">새로운 문제보기</HeaderMenuItem>
          <HeaderMenuItem href="#">랜덤 문제</HeaderMenuItem>
          <HeaderMenuItem href="#">틀린 문제</HeaderMenuItem>
        </HeaderMenu>
      </HeaderNavigation>
      <HeaderGlobalBar>
        <HeaderGlobalAction
          isActive={openUserMenu}
          aria-label="회원 메뉴"
          onClick={() => {
            setOpenUserMenu((prev) => !prev);
          }}
        >
          <User size={20} />
        </HeaderGlobalAction>
      </HeaderGlobalBar>
      <HeaderPanel expanded={openUserMenu}>
        {userAtom.id === 0 && (
          <Switcher aria-label="회원 메뉴">
            <Link to="/sign-up" className={styles.userNav}>
              <SwitcherItem aria-label="회원가입">회원가입</SwitcherItem>
            </Link>
            <Link to="/sign-in" className={styles.userNav}>
              <SwitcherItem aria-label="로그인" href="/sign-in">
                로그인
              </SwitcherItem>
            </Link>
          </Switcher>
        )}
        {userAtom.id !== 0 && (
          <Switcher aria-label="회원 메뉴">
            <Link to="/" className={styles.userNav} onClick={doLogoutClick}>
              <SwitcherItem aria-label="로그아웃">로그아웃</SwitcherItem>
            </Link>
          </Switcher>
        )}
      </HeaderPanel>
    </Header>
  );
};
