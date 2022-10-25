import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";

import FormInput from "../form-input/form-input.component";

import "./sign-up-form.styles.scss";

const defaultFormValues = {
  displayName: '',
  email: '',
  pwd: '',
  confirmedPwd: ''
};

const SignUpForm =() => {
  const [formValues, setFormValues] = useState(defaultFormValues);
  const {
    displayName,
    email,
    pwd,
    confirmedPwd
  } = formValues;

  const onChangeHandler = (event) => {
    const {name, value} = event.target;
    setFormValues({...formValues, [name]: value});
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if(pwd !== confirmedPwd) {
      alert('Password does not match the Confirm Password');
      return;
    }
    try {
      const {user} = await createAuthUserWithEmailAndPassword(email, pwd);
      await createUserDocFromAuth(user, { displayName });
      alert('Sign up successfully!');
      console.log('Sign up a user:', displayName, '->', email);
      resetFormHandler();
    } catch (error) {
      if(error.code === 'auth/weak-password') {
        alert('Password should be at least 6 characters');
      } else if (error.code === 'auth/email-already-in-use') {
        alert('This email is regiestered!');
      }
      console.error('Error ->', error.message);
    }
  };

  const resetFormHandler = () => {
    setFormValues(defaultFormValues);
  };
  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={submitHandler} >
        <FormInput 
          label="Display Name"
          required 
          type="text"
          onChange={onChangeHandler} 
          name="displayName" 
          value={displayName}
        />
        <FormInput 
          label="Email"
          required 
          type="email" 
          onChange={onChangeHandler}
          name="email" 
          value={email}
        />
        <FormInput
          label="Password"
          required 
          type="password" 
          onChange={onChangeHandler}
          name="pwd" 
          value={pwd}
        />
        <FormInput 
          label="Password"
          required 
          type="password" 
          onChange={onChangeHandler} 
          name="confirmedPwd" 
          value={confirmedPwd}
        />
        <Button type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
}

export default SignUpForm;