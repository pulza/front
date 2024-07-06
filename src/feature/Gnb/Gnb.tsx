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
import React, { useState } from 'react';

export const Gnb: React.FC = () => {
  const [openUserMenu, setOpenUserMenu] = useState(false);

  return (
    <Header aria-label="header">
      <HeaderName href="/" prefix="Pulza" />
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
        <Switcher aria-label="회원 메뉴">
          <SwitcherItem aria-label="회원가입" href="/sign-up">
            회원가입
          </SwitcherItem>
          <SwitcherItem aria-label="로그인" href="/sign-in">
            로그인
          </SwitcherItem>
          <SwitcherItem aria-label="로그아웃" href="#">
            로그아웃
          </SwitcherItem>
        </Switcher>
      </HeaderPanel>
    </Header>
  );
};
