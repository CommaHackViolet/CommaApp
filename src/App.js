
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage';

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AuthDetails from './components/AuthDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        
        

      </Routes>
      <SignIn></SignIn>
      <SignUp></SignUp>
      <AuthDetails></AuthDetails>
    </Router>
  );
}

export default App;
