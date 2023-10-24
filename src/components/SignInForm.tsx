'use client';
import { useRouter } from 'next/navigation';
// Utils
import useField from '@/hooks/useField';
// Types
import { FormEvent } from 'react';
import StyledInputLabel from './StyledInputLabel';
import StyledAuthenticationInput from './StyledAuthenticationInput';
import StyledAuthenticationButton from './StyledAuthenticationButton';

const SignInForm = () => {
  const router = useRouter();
  const email = useField('text');
  const password = useField('password');

  return (
    <form>
      <div className='mb-6'>
        <StyledInputLabel htmlFor='username'>Username</StyledInputLabel>
        <StyledAuthenticationInput
          id='username'
          attributes={email.attributes}
        />
      </div>
      <div className='mb-10'>
        <StyledInputLabel htmlFor='password'>Password</StyledInputLabel>
        <StyledAuthenticationInput
          id='password'
          attributes={password.attributes}
        />
      </div>
      {/* TO DO: Add loading spinner or any indicator and disable the button while sign up is loading, create a reusable component to use in the sign in */}
      <StyledAuthenticationButton isLoading={false}>
        Sign in
      </StyledAuthenticationButton>
    </form>
  );
};

export default SignInForm;
