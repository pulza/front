import { atom } from 'jotai';
import { store } from '@/store';

export type UserAtomValue = {
  username: string;
};

const defaultUser: UserAtomValue = {
  username: '',
} as const;

const userAtom = atom(defaultUser);

store.set(userAtom, defaultUser);

const userLoginAction = (loginInfo: UserAtomValue) => {
  store.set(userAtom, (prev) => ({ ...prev, ...loginInfo }));
};

const userSessionDeleteAction = () => {
  store.set(userAtom, defaultUser);
};

export { userAtom, userLoginAction, userSessionDeleteAction };
