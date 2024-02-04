
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import PrivateRoutes from './components/PrivateRoutes';

import SignIn from './pages/SignIn';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import CheckInPage from './pages/CheckInPage';

function App() {
  return (
    <Router>
      <div className="lg:w-10/12 w-11/12 mx-auto">

        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route element={<PrivateRoutes/>}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/check-in" element={<CheckInPage />} />
          </Route>
        

        </Routes>
      </div>
    </Router>
  );
}

export default App;
