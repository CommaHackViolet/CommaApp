import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, {useEffect, useState} from 'react'
import { auth } from '../firebase'

function AuthDetails() {
    const [authUser, setAuthUser] = useState(null)

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if(user) {
                setAuthUser(user)
            } else {
                setAuthUser(null)
            }
        })

        return () => {
            listen()
        }
    }, [])

    const signOutHandler = () => {
        signOut(auth).then(() => {
            console.log('signed out')
        })
    }
  return (
    <div>
        {authUser 
            ? 
            <button className="btn btn-outline" onClick={signOutHandler}>Sign Out</button> 
            : 
            <p>signed out</p>}
    </div>
  )
}

export default AuthDetails
