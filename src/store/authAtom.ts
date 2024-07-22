import { atom } from 'jotai';
import { store } from '@/store';

export type UserAtomValue = {
  name: string;
  email: string;
  id: number;
  role: number;
};

const defaultUser: UserAtomValue = {
  name: '',
  email: '',
  id: 0,
  role: 0,
} as const;

const userAtom = atom(defaultUser);

const userLoginAction = (loginInfo: UserAtomValue) => {
  store.set(userAtom, (prev) => ({ ...prev, ...loginInfo }));
};

const userSessionDeleteAction = () => {
  store.set(userAtom, defaultUser);
};

export { userAtom, userLoginAction, userSessionDeleteAction };
