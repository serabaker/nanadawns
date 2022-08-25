import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {ErrorMessage} from '@hookform/error-message';
import {
  SigninFormContainer,
  SigninContent,
  SigninForm,
  SigninFormButton,
  SigninFormH1,
  SigninFormWrapper, 
  SigninIcon,
  SigninFormLabel,
  SigninText,
  SigninFormInput,
  SpanInfo
} from './Signin';


const SignIn = () => {
  const {
    register,
    handleSubmit, 
    formState: {errors, isValidating, isValid, isDirty},
  } = useForm();

  const onSubmit = data => {

    console.log(data);
  };

  const signinCopy = {
    'signinLogoLink': 'Nana Dawn\'s Butters & Oils',
    'signinContinueButtonText': 'Continue',
    'signinForgotPasswordLink': 'Forgot Password',
    'signinIntoAccount': 'Register',
    'signinUsername': 'Username',
    'signinEmail': 'Email',
    'signinPassword': 'Password',
    'emailIsRequired': 'Email is required',  
  };
 
  return (
    <> 
      <SigninFormContainer>
        <SigninFormWrapper>
          <SigninIcon to='/'>{signinCopy.signinLogoLink}</SigninIcon>
            <SigninContent>
              <SigninForm action='#'onSubmit={handleSubmit(onSubmit)}>
                <SigninFormH1>{signinCopy.signinIntoAccount}</SigninFormH1>
               

                <SigninFormLabel htmlFor='for'>{signinCopy.signinUsername}</SigninFormLabel>
                <SigninFormInput
                  placeholder='Enter your username'
                  name='username'
                  type='text'
                  {...register('usernameRequired',
                  {required: 'Username should be at least 4 characters',
                  pattern: {
                    value: /[A-Za-z]{4}/,
                    message: 'Username should be 3-16 characters and shouldn\'t include any special characters' 
                    },
                   minLength: {
                    value: 4,
                    message: 'Username should be 3-16 characters and shouldn\'t include any special characters'
                    }
                  })}
                  />
                  <ErrorMessage
                    errors={errors}
                    isValidating={isValidating}
                    isDirty={isDirty}
                    isValid={isValid}
                    name='usernameRequired'
                    render={({message}) =>
                    <SpanInfo>{message}</SpanInfo>}
                  />

                  <SigninFormLabel htmlFor='for'>{signinCopy.signinEmail}</SigninFormLabel> 
                  <SigninFormInput
                   placeholder='Enter an email address'
                   name='email'
                   type='email'
                   required
                   {...register('emailRequired',
                   {required:'Enter a valid email address',
                   pattern: {
                    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/,
                    message: 'It should be a valid email address' 
                    },
                   })} />
                    <ErrorMessage
                    errors={errors}
                    name='emailRequired'
                    render={({message}) =>
                    <SpanInfo> {message}</SpanInfo>}
                  />

                  <SigninFormLabel htmlFor='for'>{signinCopy.signinPassword}</SigninFormLabel>
                  <SigninFormInput
                   placeholder='Create a password' 
                   name='password' 
                   type='password' 
                   {...register('passwordRequired',
                   {required:'The password should be 8-20 characters and include at least 1 letter, 1 number and 1 special charater',
                   pattern: {
                    value: /^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{11}$/
                   },
                   minLength: {
                    value: 8,
                    message: 'The password should be 8-20 characters and include at least 1 letter, 1 number and 1 speacial charater'
                    },
                    maxLength: {
                      value: 12,
                      message: 'The password should be 8-20 characters and include at least 1 letter, 1 number and 1 special charater'

                    }
                   })}/>
                    <ErrorMessage
                    errors={errors}
                    name='passwordRequired'
                    render={({message}) =>
                    <SpanInfo> {message}</SpanInfo>}
                  />
                  <SigninFormButton onClick={onSubmit()}  to='/' type='submit'> {signinCopy.signinContinueButtonText}</SigninFormButton>
                  <SigninText>{signinCopy.signinForgotPasswordLink}</SigninText>
              </SigninForm>
            </SigninContent>
        </SigninFormWrapper>
      </SigninFormContainer>
    </>
  )
}

export default SignIn;
