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
        <h2 className="text-2xl font-semibold">did you take your birth control?</h2>
        <button className="btn btn-block btn-primary">yes</button>

        <h2 className="text-2xl font-semibold">how is your mood today?</h2>
        <div>

          <div className="flex items-center">
            <span className="mr-2">fantastic</span>
            <input type="radio" name="radio-5" className="radio radio-success" />
          </div>

          <div className="flex items-center">
            <span className="mr-2">good</span>
            <input type="radio" name="radio-5" className="radio radio-success" />
          </div>

          <div className="flex items-center">
            <span className="mr-2">okay</span>
            <input type="radio" name="radio-5" className="radio radio-success" />
          </div>

          <div className="flex items-center">
            <span className="mr-2">neutral</span>
            <input type="radio" name="radio-5" className="radio radio-success" />
          </div>

          <div className="flex items-center">
            <span className="mr-2">sad</span>
            <input type="radio" name="radio-5" className="radio radio-success" />
          </div>

          <div className="flex items-center">
            <span className="mr-2">horrible</span>
            <input type="radio" name="radio-5" className="radio radio-success" />
          </div>

        </div>
        {/* <button className="btn btn-primary btn-lg" onClick={handleCheckIn}>check in</button> */}
      </div>
    </div>
  )
}

export default Dashboard
