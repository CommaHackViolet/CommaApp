import React, {useState} from 'react'
import {auth} from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

const SignIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signInHandler = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then((useCredential) => {
            const user = useCredential.user
            console.log(user)
        }).catch((error) => {
            console.log(error)
        })
    }

  return (
    <div>
        <h1 className="text-2xl text-primary">Sign In</h1>

        <form onSubmit={signIn}>
            <input type="email" 
                placeholder='Enter your email' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            <input type="password" 
                placeholder='Enter your password' 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            <button className="btn" type='submit'></button>
        </form>
    </div>
  )
}

export default SignIn