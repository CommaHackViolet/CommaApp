import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useEffect } from 'react'

const PrivateRoutes = () => {
    
  const {currentUser} = useAuth()
  
  useEffect(() => {

    console.log('current', currentUser);
  })

return (
    currentUser != null ? <Outlet/> : <Navigate to='/login'/>
  )
}

export default PrivateRoutes