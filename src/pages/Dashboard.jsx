import React, {useState} from 'react'
import firebase from '../firebase'
import { v4 as uuidv4 } from 'uuid';
import { setDoc, doc, getDoc, collection } from 'firebase/firestore'
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import { useCheckIn } from '../context/CheckInContext';

function Dashboard() {

  const {currentUser} = useAuth()
  const {currentCheckIn, addOrUpdateCheckIn} = useCheckIn()
  
  const [checkInData, setCheckInData] = useState({
    birthControl: false,
    mood: 'neutral',
    journal: 'I am feeling okay today',
  })

  const handleCheckIn = async () => {

    const payload = {
      birthControl: false,
      mood: 'sad',
      date: new Date(),
      journal: 'I am feeling shit today but its okay',
      userID: currentUser.uid
    }

    addOrUpdateCheckIn(checkInData)
  }

  return (
    <div>
      <div className="w-1/3">
        <h1 className="text-2xl font-semibold">did you take your birth control?</h1>
        <button className="btn btn-block btn-primary">yes</button>
        {/* <button className="btn btn-primary btn-lg" onClick={handleCheckIn}>check in</button> */}
      </div>
    </div>
  )
}

export default Dashboard
