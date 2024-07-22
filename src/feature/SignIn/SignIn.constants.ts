import type { TextInputAttributteProps } from '@/components/types';
import type { ButtonBaseProps } from '@carbon/react';
import type { PasswordInputProps } from '@carbon/react/lib/components/TextInput/PasswordInput';

const SIGN_IN_DEFAULT_VALUE = {
  email: '',
  password: '',
};

const passwordInputProps: PasswordInputProps = {
  id: 'password',
  labelText: '비밀번호',
  required: true,
  type: 'password',
};

const emailInputProps: TextInputAttributteProps = {
  id: 'email',
  labelText: '이메일',
  required: true,
  type: 'text',
};

const submitButtonProps: ButtonBaseProps = {
  type: 'submit',
};

const goToSignUpPageButtonProps: ButtonBaseProps = {
  type: 'button',
  href: '/sign-up',
  kind: 'secondary',
};

type SignInFormType = typeof SIGN_IN_DEFAULT_VALUE;

export type { SignInFormType };
export { SIGN_IN_DEFAULT_VALUE, emailInputProps, passwordInputProps, submitButtonProps, goToSignUpPageButtonProps };
