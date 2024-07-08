import type { TextInputAttributteProps } from '@/components/types';
import type { ButtonBaseProps } from '@carbon/react';
import type { PasswordInputProps } from '@carbon/react/lib/components/TextInput/PasswordInput';

const SIGN_UP_DEFAULT_VALUE = {
  username: '',
  password: '',
  email: '',
};

const usernameInputProps: TextInputAttributteProps = {
  id: 'username',
  labelText: '아이디',
  required: true,
  type: 'text',
  invalidText: '아이디는 필수입니다.',
};

const passwordInputProps: PasswordInputProps = {
  id: 'password',
  labelText: '비밀번호',
  required: true,
  type: 'password',
  invalidText: '비밀번호를 안내사항에 맞게 입력해주세요.',
  helperText: '비밀번호는 8자리 이상, 숫자, 영어를 섞어서 입력해주세요.',
};

const emailInputProps: TextInputAttributteProps = {
  id: 'email',
  labelText: '이메일',
  required: true,
  type: 'text',
  invalidText: '이메일값을 확인해주세요.',
};
const submitButtonProps: ButtonBaseProps = {
  type: 'submit',
};

const goToMainPageButtonProps: ButtonBaseProps = {
  type: 'button',
  href: '/',
  kind: 'secondary',
};
type SignUpFormType = typeof SIGN_UP_DEFAULT_VALUE;

export type { SignUpFormType };
export { SIGN_UP_DEFAULT_VALUE, emailInputProps, passwordInputProps, usernameInputProps, submitButtonProps, goToMainPageButtonProps };
