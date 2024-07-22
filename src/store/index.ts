import { store } from '@/store/store';
import type { UserAtomValue } from '@/store/authAtom';
import { userAtom, userLoginAction, userSessionDeleteAction } from '@/store/authAtom';

const actions = {
  userLoginAction,
  userSessionDeleteAction,
};

const atoms = {
  userAtom,
};

export { store, actions, atoms };
export type { UserAtomValue };
