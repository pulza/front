import { useNavigate } from 'react-router-dom';
import { requestSignIn } from '@/api/user';
import { actions } from '@/store';
import type { SignInFormType } from '@/feature/SignIn/SignIn.constants';

type useSignUpType = () => {
  signInAndGoToHomepage: (form: SignInFormType) => Promise<void>;
};

const useSignIn: useSignUpType = () => {
  const navigate = useNavigate();

  const signInAndGoToHomepage = async (form: SignInFormType) => {
    const username = await requestSignIn({ id: form.username, password: form.password });

    actions.userLoginAction({ username });
    navigate(0);
  };

  return {
    signInAndGoToHomepage,
  };
};

export { useSignIn };
