import React from 'react';
import GoogleSignin from "../../img/login.png";
import CatChat from "../../img/logo.webp";
import { auth } from "../../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import'./Welcome.css'
const Welcome = () => {
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    };
    return (
        <div>
     <main className="welcome">
      <h2>Welcome to React Chat Cat.</h2>
      <img
              className='CatChat'
              src={CatChat}
              alt="CatChat"
            />
      <p>Sign in with Google to chat with with your fellow React Developers.</p>
      <button className="sign-in" onClick={googleSignIn}>
      sign-in
      <img
              src={GoogleSignin}
              alt="sign in with google"
              type="button"
            />
      </button>
    </main>
        </div>
    );
}

export default Welcome;