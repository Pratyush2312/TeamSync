import React from "react";

import { useForm, type SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { loginEmployee, registerEmployee } from "../state/authAction";
import { useAppDispatch } from "./hooks";
import type {LoginFormData, RegisterFormData} from '../state/type'



const useAuth = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const loginForm= useForm<LoginFormData>(
  {
    mode: "onChange"
    })
  const registerForm = useForm<RegisterFormData>(
  {
    mode: "onChange"
    })

  
    
  const onLogin: SubmitHandler<LoginFormData> = async (data) => {
    dispatch(loginEmployee(data));
  };

  const onRegister: SubmitHandler<RegisterFormData> = async (data) => { 
    dispatch(registerEmployee(data));
  }

  return {
    loginUser: {
      register: loginForm.register,
      handleSubmit: loginForm.handleSubmit,
      errors: loginForm.formState.errors,
      isSubmitting: loginForm.formState.isSubmitting,
      onLogin,
    },
    registerUser: {
      register: registerForm.register,
      handleSubmit: registerForm.handleSubmit,
      errors: registerForm.formState.errors,
      isSubmitting: registerForm.formState.isSubmitting,
      watch: registerForm.watch,
      onRegister
    },
    navigate,
  };
};

export default useAuth;
