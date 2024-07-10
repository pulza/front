import { Button, FlexGrid, PasswordInput, Row, Stack, TextInput, Form } from '@carbon/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { goToSignUpPageButtonProps, passwordInputProps, submitButtonProps, usernameInputProps } from '@/feature/SignIn/SignIn.constants';
import { requestSignIn } from '@/api/user';

export const SignIn: React.FC = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });
  return (
    <Form
      onSubmit={handleSubmit(async ({ username, password }) => {
        await requestSignIn({ id: username, password });
      })}
    >
      <Stack gap={7}>
        <TextInput
          {...usernameInputProps}
          {...(register('username'),
          {
            required: true,
          })}
        />
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
