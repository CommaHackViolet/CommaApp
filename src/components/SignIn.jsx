import React, {useState} from 'react'

import { useAuth } from '../context/AuthContext'

const SignIn = () => {

    const {signInHandler} = useAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


  return (
    <div>
        <h1 className="text-2xl text-primary">login to your account</h1>

        <form onSubmit={(e) => {
            signInHandler(e, email, password)
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
            <button className="btn" type='submit'>login</button>
        </form>
    </div>
  )
}

export default SignIn