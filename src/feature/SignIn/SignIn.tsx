import { Button, FlexGrid, PasswordInput, Row, Stack, TextInput, Form } from '@carbon/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { goToSignUpPageButtonProps, passwordInputProps, submitButtonProps, emailInputProps } from '@/feature/SignIn/SignIn.constants';
import { useSignIn } from '@/feature/SignIn/SignIn.hooks';

export const SignIn: React.FC = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const { signInAndGoToHomepage } = useSignIn();
  return (
    <Form
      onSubmit={handleSubmit(async ({ email, password }) => {
        await signInAndGoToHomepage({ email, password });
      })}
    >
      <Stack gap={7}>
        <TextInput {...{ ...emailInputProps }} {...register('email', { required: true })} />
        <PasswordInput {...{ ...passwordInputProps }} {...register('password', { required: true })} />
        <FlexGrid fullWidth>
          <Row>
            <Button {...submitButtonProps}>로그인</Button>
            <Button {...goToSignUpPageButtonProps} href="/sign-up">
              회원가입
            </Button>
          </Row>
        </FlexGrid>
      </Stack>
    </Form>
  );
};
