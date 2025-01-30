import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../services/firebase';

export const AuthContext = createContext(null);

// auth provider
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

// register with email and pass
const registerUsingEmailPass =(userInfo)=>{
    return createUserWithEmailAndPassword(auth,userInfo?.email,userInfo?.password);
}
// add username and image in firebase
const updateUserProfile =(userInfo)=>{
    return updateProfile(auth.currentUser,{ displayName:userInfo?.displayName,photoURL:userInfo?.photoURL})
}
// login with email pass
const userLoginByEmailPass =(userInfo)=>{
    return signInWithEmailAndPassword(auth, userInfo?.email, userInfo?.password)
}
// google SignIn
const userGoogleSignIn =()=>{
    const provider = new GoogleAuthProvider()
    return signInWithPopup(auth, provider)
}
// sign Out
const userSignOut =()=>{
    return signOut()
}






useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth,( currentUser)=>{
      if(currentUser){
          setUser(currentUser);
          setLoading(false)
      }
      setUser(null);
      setLoading(false)
  })
  
    return ()=> unsubscribe();

},[])






  // transporter
  const authInfo = {
    name: 'riody',
    user,
    loading,
    registerUsingEmailPass,
    updateUserProfile,
    userLoginByEmailPass,
    userGoogleSignIn,
    userSignOut
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
