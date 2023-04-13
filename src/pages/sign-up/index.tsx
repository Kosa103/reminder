import { useRouter } from 'next/router';
import React from 'react';
import { UserSignUpBody } from '@/common/models/user';
import { PATHS } from '@/common/utils/paths';
import { useLoadingLayer, useSnackbar } from '@/common/utils/hooks';
import { SNACKBAR_MESSAGES } from '@/common/utils/messages';
import SignUpForm from '@/components/forms/SignUpForm';
import { postSignUp } from '@/api/services/auth/signUp';

const SignUpPage = () => {
  const router = useRouter()
  const loadingLayer = useLoadingLayer();
  const snackbar = useSnackbar();

  const handleSignUp = async (values: UserSignUpBody): Promise<void> => {
    try {
      loadingLayer.show();
      const response = await postSignUp(values);
      const { data, status } = response;

      if (status >= 200 && status < 300 && data) {
        snackbar.open({
          message: SNACKBAR_MESSAGES.SIGN_UP.SUCCESS,
        });

        router.push(PATHS.SIGN_IN);
      }
    } catch (err: any) {
      snackbar.open({
        message: err?.message || SNACKBAR_MESSAGES.GENERAL.ERROR,
        color: 'error',
      });
    } finally {
      loadingLayer.hide();
    }

  };

  return (
    <>
      <h1>Sign Up Page</h1>
      <SignUpForm onSubmit={handleSignUp} />
    </>
  );
};

export default SignUpPage;
