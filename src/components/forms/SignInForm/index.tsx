import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { userSignInSchema } from '@/common/utils/validationSchemas/user';
import TextInputField from '@/components/ui/TextInputField';
import { UserSignInBody } from '@/common/models/user';

interface SignInFormProps {
  onSubmit: (values: UserSignInBody) => void;
}

const SignInForm: React.FC<SignInFormProps> = (props) => {
  const { onSubmit } = props;

  const { register, handleSubmit, formState: { errors } } = useForm<UserSignInBody>({
    resolver: yupResolver(userSignInSchema),
    mode: 'onBlur',
  });

  const initialValues: UserSignInBody = {
    email: '',
    password: '',
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInputField
        placeholder="Email"
        defaultValue={initialValues.email}
        error={errors.email?.message || ''}
        {...register('email')}
      />
      <TextInputField
        placeholder="Password"
        defaultValue={initialValues.password}
        error={errors.password?.message || ''}
        {...register('password')}
      />
      
      <input type="submit" />
    </form>
  );
};

export default SignInForm;
