import React from 'react'
import firebase from '../firebase'
import { v4 as uuidv4 } from 'uuid';
import { setDoc, doc, getDoc, collection } from 'firebase/firestore'
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import { format } from "date-fns"; 

function Dashboard() {

  const {currentUser} = useAuth()
  console.log(currentUser);

  const handleCheckIn = async () => {

    const payload = {
      birthControl: false,
      mood: 'sad',
      date: new Date(),
      journal: 'I am feeling shit today but its okay',
      userID: currentUser.uid
    }

    const today = format(new Date(), "yyyy-MM-dd"); // Format today's date as YYYY-MM-DD
    const docId = currentUser.uid + '_' + today; // Create a unique doc ID based on user ID and date
    const docRef = doc(db, "check-ins", docId);

    // Try to retrieve an existing check-in document for today
    const docSnap = await getDoc(docRef);

    if(docSnap.exists()) {
      await setDoc(docRef, payload, { merge: true })
    } else {
      await setDoc(docRef, payload)
    }
  }

  return (
    <div>
      <button className="btn btn-primary btn-lg" onClick={handleCheckIn}>check in</button>
    </div>
  )
}

export default Dashboard
