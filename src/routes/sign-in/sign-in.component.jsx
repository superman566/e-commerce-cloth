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
      console.error('Error for google Sign In', error.message);
    }
  };

  return (
  <div>
    <h1>Sign IN</h1>
    <button onClick={signInGooglePopupHandler}>Sign In google</button>
  </div>
  );
}

export default SignIn;