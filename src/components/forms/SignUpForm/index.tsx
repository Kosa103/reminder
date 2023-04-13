import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { userSignUpSchema } from '@/common/utils/validationSchemas/user';
import TextInputField from '@/components/ui/TextInputField';
import { UserSignUpBody } from '@/common/models/user';

interface SignUpFormProps {
  onSubmit: (values: UserSignUpBody) => void;
}

const SignUpForm: React.FC<SignUpFormProps> = (props) => {
  const { onSubmit } = props;

  const { register, handleSubmit, formState: { errors } } = useForm<UserSignUpBody>({
    resolver: yupResolver(userSignUpSchema),
    mode: 'onBlur',
  });

  const initialValues: UserSignUpBody = {
    email: '',
    firstName: '',
    lastName: '',
    username: '',
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
        placeholder="First name"
        defaultValue={initialValues.firstName}
        error={errors.firstName?.message || ''}
        {...register('firstName')}
      />
      <TextInputField
        placeholder="Last name"
        defaultValue={initialValues.lastName}
        error={errors.lastName?.message || ''}
        {...register('lastName')}
      />
      <TextInputField
        placeholder="Username"
        defaultValue={initialValues.username}
        error={errors.username?.message || ''}
        {...register('username')}
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

export default SignUpForm;
