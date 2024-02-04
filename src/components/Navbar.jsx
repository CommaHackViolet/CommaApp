import React from 'react'
import { useAuth } from '../context/AuthContext'
import { PiFlowerTulipFill, PiCalendarDuotone, PiSignOutBold } from "react-icons/pi";
import { Link } from 'react-router-dom'
import { MdMenu } from "react-icons/md";
import logo from '../assets/logo.png'

function Navbar() {
    const {currentUser, signOutHandler} = useAuth()

  return (
    <div className="navbar bg-base-100 w-11/12 mx-auto">
        <Link to='/' className="flex-1">
            <img src={logo} className='w-[50px]' alt="" />
            <a className="btn btn-ghost text-xl">comma</a>
        </Link>


        <div className="flex-none">
            { currentUser == null 
            ?
            <>
                <a href="/login" className="badge p-4 mr-2 font-semibold">login</a>
                <a href="/register" className="badge badge-primary p-4 font-semibold">register</a>
            </>
            :
            <>
                <div className="hidden lg:block">
                    <div className="flex items-center justify-between">
                        <Link to="/check-in" className="btn btn-ghost">
                            <PiFlowerTulipFill className='text-2xl'/>
                            check in
                        </Link>
                        <Link to="/dashboard" className="btn btn-ghost">
                            <PiCalendarDuotone className='text-2xl'/>
                            dashboard
                        </Link>
                        <button onClick={signOutHandler} className="badge p-4">logout</button>
                    </div>
                </div>
                
                <div className="lg:hidden block">
                    <details className="dropdown dropdown-end">
                        <summary className="m-1 btn">
                            <MdMenu className='text-2xl'/>
                        </summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li className='my-4'>
                                <div>
                                    <PiFlowerTulipFill className='text-2xl'/>
                                    <Link to='/check-in'>check in</Link>
                                </div>
                            </li>
                            <li className='my-4'>
                                <div>
                                    <PiCalendarDuotone className='text-2xl'/>
                                    <Link to='/dashboard'>dashboard</Link>
                                </div>
                            </li>
                            <li onClick={signOutHandler} className='my-4'>
                                <span>
                                    <PiSignOutBold className='text-2xl' />
                                    logout
                                </span>
                            </li>
                        </ul>
                    </details>
                </div>
            </>
            }
        </div>
    </div>
  )
}

export default Navbar