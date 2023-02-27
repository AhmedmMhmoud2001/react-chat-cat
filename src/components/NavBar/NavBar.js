import React from 'react';
import "./NavBar.css"
import GoogleSignin from "../../img/login.png";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
const NavBar = () => {
    const [user] = useAuthState(auth);
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
      };
      const signOut = () => {
        auth.signOut();
      };
    return (
      <nav className="nav-bar">
        <h1>React Chat Cat</h1>
        {user ? (
          <button onClick={signOut} className="sign-out" type="button">
            Sign Out
          </button>
        ) : (
          <button className="sign-in" onClick={googleSignIn}>
            sign-in
            <img
              src={GoogleSignin}
              alt="sign in with google"
              type="button"
            />
          </button>
        )}
      </nav>
    );
}

export default NavBar;