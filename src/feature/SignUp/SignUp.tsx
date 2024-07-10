import React from 'react';
import { Button, FlexGrid, Form as FormContainer, PasswordInput, Row, Stack, TextInput } from '@carbon/react';
import { useForm } from 'react-hook-form';
import {
  emailInputProps,
  goToMainPageButtonProps,
  passwordInputProps,
  submitButtonProps,
  usernameInputProps,
  type SignUpFormType,
} from '@/feature/SignUp/SignUp.constants';
import { useSignUp } from '@/feature/SignUp/useSignUp';

const SignUp: React.FC<unknown> = () => {
  const {
    handleSubmit,
    register,
    formState: {
      errors: { email: emailError, password: passwordError, username: usernameError },
    },
  } = useForm<SignUpFormType>();
  const { signUpAndGoToHomepage } = useSignUp();
  const emailRegEx = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

  return (
    <FormContainer
      onSubmit={handleSubmit(
        async (formData) => {
          await signUpAndGoToHomepage({ ...formData });
        },
        (e) => {
          console.log(e);
        }
      )}
    >
      <Stack gap={7}>
        <TextInput
          {...{ ...usernameInputProps, invalid: !!usernameError }}
          {...(register('username'),
          {
            maxLength: 255,
            required: true,
          })}
        />
        <TextInput
          {...{ ...emailInputProps, invalid: !!emailError }}
          {...register('email', { required: true, validate: (email) => emailRegEx.test(email), maxLength: 255 })}
        />
        <PasswordInput
          {...{ ...passwordInputProps, invalid: !!passwordError }}
          {...register('password', { required: true, minLength: 8, maxLength: 255, validate: (password) => passwordRegEx.test(password) })}
        />
        <FlexGrid fullWidth>
          <Row>
            <Button {...submitButtonProps}>회원가입 진행</Button>
            <Button {...goToMainPageButtonProps}>메인페이지로 이동</Button>
          </Row>
        </FlexGrid>
      </Stack>
    </FormContainer>
  );
};
export { SignUp };
