import { useRouter } from 'next/router';
import React from 'react';
import { UserSignInBody } from '@/common/models/user';
import { PATHS } from '@/common/utils/paths';
import { handleTokenStorage, handleUserStorage } from '@/common/utils/helpers';
import { useLoadingLayer, useSnackbar } from '@/common/utils/hooks';
import SignInForm from '@/components/forms/SignInForm';
import { postSignIn } from '@/api/services/auth/signIn';
import { SNACKBAR_MESSAGES } from '@/common/utils/messages';

const SignInPage = () => {
  const router = useRouter()
  const loadingLayer = useLoadingLayer();
  const snackbar = useSnackbar();

  const handleSignIn = async (values: UserSignInBody): Promise<void> => {
    try {
      loadingLayer.show();
      const response = await postSignIn(values);
      const { data, status } = response;

      if (status >= 200 && status < 300 && data) {
        const { token, user } = data.data;

        if (token && user) {
          handleTokenStorage.remove();
          handleUserStorage.remove();
          handleTokenStorage.set(token);
          handleUserStorage.set(user);
          router.push(PATHS.BOARDS);
        }

        snackbar.open({
          message: SNACKBAR_MESSAGES.SIGN_IN.SUCCESS(user.username),
        });
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
      <h1>Sign In Page</h1>
      <SignInForm onSubmit={handleSignIn} />
    </>
  );
};

export default SignInPage;
