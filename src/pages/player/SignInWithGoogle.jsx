import React, { Component } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { getDatabase, ref, child, push, update } from "firebase/database";
    import Cookies from "js-cookie";
import { app } from "../../fireBaseConfig";
const provider = new GoogleAuthProvider();

const auth = getAuth(app);
const db = getDatabase();


const SignInWithGoogle = () => {
    const navigate = useNavigate()

    const login = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const { uid, photoURL, displayName, email } = result.user;
                // writeUserData(uid, displayName, email, photoURL)
                // IdP data available using getAdditionalUserInfo(result)
                            navigate('/pickGame')
    
                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(errorMessage);
                console.log(errorCode);
                console.log(email);
                // console.log(error);
                // ...
            });
    };
    
    return (
        <>
            <button onClick={login}>sign in with google</button>


        </>
    );
};

export default SignInWithGoogle;
