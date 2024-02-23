import React, { useEffect } from 'react';
import { useState } from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from '../Firebase/FireBase.Config';


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);
   
        //   user login
        
        const logIn = (email , password) => 
        {
          setLoading(true);
          return signInWithEmailAndPassword(auth, email, password);
        };
      
        const logOut = () => {
          setLoading(true);
          return signOut(auth);
        };
      
                  // create new user
        const createUser  = ( email, password) =>
        {
              setLoading (true);
           return createUserWithEmailAndPassword(auth , email , password);
       };
      
       const updateUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        });
      };
    
      //forget pass

      const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
      };
          //  goggle
      
        const Googleprovider = new GoogleAuthProvider();
      
      
        const googleSignIn = () => {
          setLoading(true);
          return signInWithPopup(auth, Googleprovider);
        };

        useEffect(() => {
          const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log("current User", currentUser);
      
      
            setLoading(false)
      
          
          });
          return () => {
            return unsubscribe;
          };
        }, []);

        const authInfo = {
          user,
          logIn,
          logOut,
          loading,
          createUser,
          updateUser,
          googleSignIn,
          resetPassword
     
        };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;