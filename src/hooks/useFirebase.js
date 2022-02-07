import { getAuth, signInWithPopup, GoogleAuthProvider,signOut } from "firebase/auth";

import { useState } from "react";

import firebaseInitialization from "../components/Firebase/firebase.init";

firebaseInitialization();

const useFirebase = () => {

    const [user,setUser]=useState({});
    const [error,setError]=useState([]);


    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const signInUsingGoogle=()=>{
    
    signInWithPopup(auth, provider)
    .then((result) => {
    const user = result.user;
    setUser(user);
    

    }).catch((error) => {
    
    const errorCode = error.code;
    const errorMessage = error.message;
    const errorEmail = error.email;

    setError(errorCode,errorMessage,errorEmail);

    
    });
    }

    const userLogOut=()=>{
       
        signOut(auth).then(() => {
            setUser({});
          }).catch((error) => {
            setError(error.message);
          });
    }

    return {user,error,signInUsingGoogle,userLogOut};
};

export default useFirebase;