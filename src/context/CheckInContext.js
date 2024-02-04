// CheckInContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../firebase'; // Import your Firestore configuration
import { doc, getDoc, setDoc, getDocs, collection, where, query } from 'firebase/firestore';
import { format } from 'date-fns'; // For formatting dates
import { useAuth } from './AuthContext';

const CheckInContext = createContext();

export const useCheckIn = () => useContext(CheckInContext);

export const CheckInProvider = ({ children }) => {

  const {currentUser} = useAuth()

  const [checkInProgress, setCheckInProgress] = useState('birth control');
  const [currentCheckIn, setCurrentCheckIn] = useState(null);

  const [checkInBirthControl, setCheckInBirthControl] = useState(false);
  const [checkInMood, setCheckInMood] = useState(3);
  const [checkInJournal, setCheckInJournal] = useState('');

  const [checkInLogs, setCheckInLogs] = useState([]);
  

  // Fetch all check-ins for the current user
  const fetchCheckInLogs = async () => {
    const q = query(collection(db, 'check-ins'), where('userID', '==', currentUser.uid));
    const querySnapshot = await getDocs(q);
    const checkInsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setCheckInLogs(checkInsData);
  };

  // Function to add or update a check-in
  const submitCheckIn = async (checkInData) => {
    
    const today = format(new Date(), 'yyyy-MM-dd');
    checkInData.date = today;
    const docId = currentUser.uid + '_' + today; // Create a unique doc ID based on user ID and date
    const docRef = doc(db, 'check-ins', docId);

    try {
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        // Update existing document
        await setDoc(docRef, checkInData, { merge: true });
      } else {
        // Create a new document
        await setDoc(docRef, checkInData);
      }

      setCurrentCheckIn(checkInData);
    } catch (error) {
      console.error("Error adding/updating check-in: ", error);
    }
  };

  // Optionally, fetch current check-in data on component mount or user change
  useEffect(() => {
    // Define a function to fetch the current check-in (if needed)
    const fetchCurrentCheckIn = async (userId) => {
      // Implementation similar to submitCheckIn, but for fetching
      // Remember to handle loading and error states as needed
    };

    // Call fetchCurrentCheckIn here if auto-fetching current check-in on load
  }, []); // Add dependencies as needed, e.g., userId

  const value = {
    checkInMood,
    checkInProgress,
    checkInJournal,
    checkInBirthControl,
    checkInLogs,
    fetchCheckInLogs,
    setCheckInProgress,
    setCheckInBirthControl,
    setCheckInMood,
    setCheckInJournal,
    submitCheckIn,
  };

  return (
    <CheckInContext.Provider value={value}>
      {children}
    </CheckInContext.Provider>
  );
};
