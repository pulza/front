import { Button, FlexGrid, PasswordInput, Row, Stack, TextInput, Form } from '@carbon/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import {
  emailInputProps,
  goToSignUpPageButtonProps,
  passwordInputProps,
  submitButtonProps,
  usernameInputProps,
} from '@/feature/SignIn/SignIn.constants';

export const SignIn: React.FC = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  });
  return (
    <Form
      onSubmit={handleSubmit(
        () => {
          // submit to user form
        },
        (e) => {
          console.log(e);
        }
      )}
    >
      <Stack gap={7}>
        <TextInput
          {...usernameInputProps}
          {...(register('username'),
          {
            required: true,
          })}
        />
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
