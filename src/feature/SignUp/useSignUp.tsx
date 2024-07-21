import { requestSignUp } from '@/api/user';
import type { SignUpFormType } from '@/feature/SignUp/SignUp.constants';
import { actions } from '@/store';
import { useNavigate } from 'react-router-dom';

type useSignUpType = () => {
  signUpAndGoToHomepage: (form: SignUpFormType) => Promise<void>;
};

const useSignUp: useSignUpType = () => {
  const navigate = useNavigate();

  const signUpAndGoToHomepage = async (form: SignUpFormType) => {
    await requestSignUp({ ...form });

    actions.userLoginAction({ username: form.username });
    navigate(0);
  };

  return {
    signUpAndGoToHomepage,
  };
};

export { useSignUp };
