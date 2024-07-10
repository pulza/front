import { atom } from 'jotai';
import { store } from '@/store';

export type UserRole = 'USER' | 'ADMIN';
export type UserAtom = {
  id: string;
  email: string;
  role: UserRole;
};

const defaultUser: UserAtom = {
  email: '',
  id: '',
  role: 'USER',
} as const;

const userAtom = atom(defaultUser);

store.set(userAtom, defaultUser);

const userLoginAction = (loginInfo: UserAtom) => {
  store.set(userAtom, (prev) => ({ ...prev, ...loginInfo }));
};

const userSessionDeleteAction = () => {
  store.set(userAtom, defaultUser);
};

export { userAtom, userLoginAction, userSessionDeleteAction };
