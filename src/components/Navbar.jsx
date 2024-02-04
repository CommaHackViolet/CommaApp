import React from 'react'
import { useAuth } from '../context/AuthContext'

function Navbar() {
    const {currentUser, signOutHandler} = useAuth()

  return (
    <div className="navbar bg-base-100">
        <div className="flex-1">
            <a className="btn btn-ghost text-xl">comma</a>
        </div>

        <div className="flex-none">
            { currentUser == null 
            ?
            <>
                <a href="/login" className="badge p-4 mr-2 font-semibold">login</a>
                <a href="/register" className="badge badge-primary p-4 font-semibold">register</a>
            </>
            :
            <button onClick={signOutHandler} className="badge p-4">logout</button>
            }
        </div>
    </div>
  )
}

export default Navbar