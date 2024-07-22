import { requestSignUp } from '@/api/user';
import type { SignUpFormType } from '@/feature/SignUp/SignUp.constants';
import { useNavigate } from 'react-router-dom';

type useSignUpType = () => {
  signUpAndGoToHomepage: (form: SignUpFormType) => Promise<void>;
};

const useSignUp: useSignUpType = () => {
  const navigate = useNavigate();

  const signUpAndGoToHomepage = async (form: SignUpFormType) => {
    await requestSignUp({ email: form.email, password: form.password, name: form.username });

    navigate('/sign-in');
  };

  return {
    signUpAndGoToHomepage,
  };
};

export { useSignUp };
