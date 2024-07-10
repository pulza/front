import { store } from '@/store/store';
import type { UserRole, UserAtomValue } from '@/store/authAtom';
import { userAtom, userLoginAction, userSessionDeleteAction } from '@/store/authAtom';

const actions = {
  userLoginAction,
  userSessionDeleteAction,
};

const atoms = {
  userAtom,
};

export { store, actions, atoms };
export type { UserRole, UserAtomValue };
