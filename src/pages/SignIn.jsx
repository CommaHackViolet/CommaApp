import React, {useState} from 'react'

import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {

    const {signInHandler} = useAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

  return (
    <div className='w-1/3 mx-auto mt-20'>
        <h1 className="text-2xl text-primary">login to your account</h1>

        <form onSubmit={(e) => {
            e.preventDefault()
            signInHandler(email, password)
            .then(() => navigate('/dashboard'))
        }}>
            <input type="email" 
                className='input input-primary my-4 w-full'
                placeholder='Enter your email' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            <br />
            <input type="password" 
                className='input input-primary mb-4 w-full'
                placeholder='Enter your password' 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            <br />
            <button className="btn btn-block" type='submit'>login</button>
        </form>
    </div>
  )
}

export default SignIn