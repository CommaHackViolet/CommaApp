import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

// Create context
const AuthContext = createContext();

// Custom hook to use auth context
export const useAuth = () => useContext(AuthContext);

// Provider component
export const AuthProvider = ({ children }) => {
  
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true);

// SIGN UP
  const signUpHandler = (e, email, password) => {
    e.preventDefault()
    return createUserWithEmailAndPassword(auth, email, password)
    .then((useCredential) => {
        const user = useCredential.user
        setCurrentUser(user)
        return user
    }).catch((error) => {
        console.log(error)
    })
}

// SIGN IN
  const signInHandler = (e, email, password) => {
    e.preventDefault()
    return signInWithEmailAndPassword(auth, email, password)
    .then((useCredential) => {
        const user = useCredential.user
        console.log(user)
        setCurrentUser(user)
        return user
    }).catch((error) => {
        console.log(error)
    })
}

// SIGN OUT
  const signOutHandler = () => {
    signOut(auth).then(() => {
        console.log('signed out')
    })
}

  // Listen for user state changes
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if(user) {
          setCurrentUser(user)
          setLoading(false)
      } else {
          setCurrentUser(null)
          setLoading(false)
      }
  })

  return () => {
      listen()
  }
  }, []);

  // The value provided to the context consumers
  const value = {
    currentUser,
    signOutHandler,
    signInHandler,
    signUpHandler
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
