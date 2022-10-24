import { useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocFromAuth,
  siginAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";

import FormInput from "../form-input/form-input.component";

import "./sign-in-form.styles.scss";

const defaultFormValues = {
  email: '',
  pwd: '',
};

const SignInForm =() => {
  const [formValues, setFormValues] = useState(defaultFormValues);
  const {
    email,
    pwd,
  } = formValues;

  const signInWithGoogle =async () =>{
    try {
      const { user } = await signInWithGooglePopup();
      await createUserDocFromAuth(user);
    } catch (error) {
      console.error('Error ->', error.message);
    }
  };

  const onChangeHandler = (event) => {
    const {name, value} = event.target;
    setFormValues({...formValues, [name]: value});
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      await siginAuthUserWithEmailAndPassword(email, pwd);
      resetFormHandler();
    } catch (error) {
      if(error.code === 'auth/wrong-password') {
        alert('Wrong password!');
      } else if(error.code === 'auth/user-not-found'){
        alert('Email cannot be found!');
      }
      console.error('Error ->', error.message);
    }
  };

  const resetFormHandler = () => {
    setFormValues(defaultFormValues);
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={submitHandler} >
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
        <div className="buttons-container">
          <Button 
            type="submit"
          >
            Sign In
          </Button>
          <Button 
            type="button"
            buttonType="google"
            onClick={signInWithGoogle}
          >
            Sign In
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;