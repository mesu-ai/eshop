import { getAuth, signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile,onAuthStateChanged,signOut } from "firebase/auth";

import { useEffect, useState } from "react";

import firebaseInitialization from "../components/Firebase/firebase.init";

firebaseInitialization();

const useFirebase = () => {

    const [user,setUser]=useState({});
    const [error,setError]=useState([]);

    const [isLoading,setLoading]=useState(true);
    const [isAdmin,setAdmin]=useState({});

    
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const signInUsingGoogle=(location,navigate,handleClose)=>{
      setLoading(true);
      const redirect_uri=location?.pathname || '/';
    
    signInWithPopup(auth, provider)
    .then((result) => {
    const user = result.user;
    setUser(user);
  
    navigate(redirect_uri);
    saveUser(user.email,user.displayName,"PUT");
    handleClose();
    
    }).catch((error) => {
    
    const errorCode = error.code;
    const errorMessage = error.message;
    const errorEmail = error.email;

    setError(errorCode,errorMessage,errorEmail);

    
    }).finally(()=>setLoading(false));
    }



    const signUpUsingEmail=(name,email,password,location,navigate,handleClose)=>{

      setLoading(true);

      const redirect_uri=location?.pathname || '/';


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
         saveUser(email,name,"POST");
         handleClose();
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        
        setError(errorCode,errorMessage);
      }).finally(()=>setLoading(true));
      
    }

    const signInUsingEmail=(email, password,location,navigate,handleClose)=>{
      setLoading(true);
      const redirect_uri=location?.pathname || '/';
      signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
   
       setUser(result.user);
       navigate(redirect_uri);
       handleClose();
      
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

    const saveUser=(email,name,methodname)=>{
      const user={email:email,displayName:name};
      const url='https://mysterious-basin-77883.herokuapp.com/users';
      
      fetch(url,{
        method:methodname,
        headers:{
          'content-type':'application/json',
        },
        body:JSON.stringify(user)
        
      })
      .then(result=>{
        console.log(result);

      }).catch((error) => {
    
        const errorCode = error.code;
        const errorMessage = error.message;
        const errorEmail = error.email;
    
        setError(errorCode,errorMessage,errorEmail);


    });

  }

  useEffect(()=>{
    fetch(`https://mysterious-basin-77883.herokuapp.com/users/${user.email}`)
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      setAdmin(data.admin)
    })

  },[user.email])

    return {user,isAdmin,error,isLoading,signInUsingGoogle,signUpUsingEmail,signInUsingEmail,userLogOut};
};

export default useFirebase;