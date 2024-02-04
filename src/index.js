import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { CheckInProvider } from './context/CheckInContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <AuthProvider>
      <CheckInProvider>
        <App />
      </CheckInProvider>
    </AuthProvider>
  </React.StrictMode>
);
