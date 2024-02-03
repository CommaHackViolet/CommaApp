import React, {useState} from 'react'
import {auth} from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const SignUp = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signUpHandler = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then((useCredential) => {
            const user = useCredential.user
            console.log(user)
        }).catch((error) => {
            console.log(error)
        })
    }

  return (
    <div>
        <h1 className="text-2xl text-primary">create an account</h1>

        <form onSubmit={signUpHandler}>
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
            <button className="btn" type='submit'>sign up</button>
        </form>
    </div>
  )
}

export default SignUp