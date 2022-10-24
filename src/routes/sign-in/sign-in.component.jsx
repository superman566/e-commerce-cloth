import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import {
  signInWithGooglePopup,
  createUserDocFromAuth
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const signInGooglePopupHandler =async () =>{
    try {
      const { user } = await signInWithGooglePopup();
      await createUserDocFromAuth(user);
    } catch (error) {
      console.error('Error ->', error.message);
    }
  };

  return (
  <div>
    <h1>Sign IN</h1>
    <button onClick={signInGooglePopupHandler}>Sign In google</button>
    <SignUpForm />
  </div>
  );
}

export default SignIn;