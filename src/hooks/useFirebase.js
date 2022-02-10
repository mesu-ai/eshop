import { getAuth, signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile,onAuthStateChanged,signOut } from "firebase/auth";

import { useEffect, useState } from "react";

import firebaseInitialization from "../components/Firebase/firebase.init";

firebaseInitialization();

const useFirebase = () => {

    const [user,setUser]=useState({});
    const [error,setError]=useState([]);

    const [isLoading,setLoading]=useState(true);

    
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const signInUsingGoogle=(location,navigate)=>{
      setLoading(true);
      const redirect_uri=location?.state?.from || '/';
    
    signInWithPopup(auth, provider)
    .then((result) => {
    const user = result.user;
    setUser(user);

    navigate(redirect_uri);
    

    }).catch((error) => {
    
    const errorCode = error.code;
    const errorMessage = error.message;
    const errorEmail = error.email;

    setError(errorCode,errorMessage,errorEmail);

    
    }).finally(()=>setLoading(false));
    }



    const signUpUsingEmail=(name,email,password,location,navigate)=>{

      setLoading(true);

      const redirect_uri=location?.state?.from || '/';


      createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {

        const newUser={email:email,displayName:name}
        setUser(newUser);
        


        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {
          // Profile updated!
          
        }).catch((error) => {
          setError(error)
        })

        navigate(redirect_uri);
        
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        
        setError(errorCode,errorMessage);
      }).finally(()=>setLoading(true));
      
    }

    const signInUsingEmail=(email, password,location,navigate)=>{
      setLoading(true);
      const redirect_uri=location?.state?.from || '/'
      signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
   
       setUser(result.user);
       navigate(redirect_uri);
      
      })
      .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      setError(errorCode,errorMessage);


      }).finally(()=>setLoading(false));

    }

    useEffect(()=>{
      setLoading(true);

     const unsubscribed= onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        
        } else {
          setUser({});
          
        }
        setLoading(false);
      });
      return ()=>unsubscribed;

    },[auth])

    const userLogOut=()=>{
      setLoading(true);
       
        signOut(auth).then(() =>{
            setUser({});
          }).catch((error) => {
            setError(error.message);
          }).finally(()=>setLoading(false));
    }

    return {user,error,isLoading,signInUsingGoogle,signUpUsingEmail,signInUsingEmail,userLogOut};
};

export default useFirebase;