import React, {useState} from 'react'
import {auth} from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useAuth } from '../context/AuthContext'

const SignUp = () => {

    const {signUpHandler} = useAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  return (
    <div>
        <h1 className="text-2xl text-primary">create an account</h1>

        <form onSubmit={() => {
            signUpHandler(email, password)
        }}>
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