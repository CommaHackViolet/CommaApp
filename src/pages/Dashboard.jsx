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
        <button className="btn btn-block btn-primary mt-6">yes</button>

        <div className='mt-14'>
          <h2 className="text-2xl font-semibold">how is your mood today?</h2>

          <div className="flex items-center my-5">
            <input type="radio" name="radio-5" className="radio radio-success" />
            <span className="ml-2 font-semibold">fantastic</span>
          </div>

          <div className="flex items-center my-5">
            <input type="radio" name="radio-5" className="radio radio-primary" />
            <span className="ml-2 font-semibold">good</span>
          </div>

          <div className="flex items-center my-5">
            <input type="radio" name="radio-5" className="radio radio-secondary" />
            <span className="ml-2 font-semibold">okay</span>
          </div>

          <div className="flex items-center my-5">
            <input type="radio" name="radio-5" className="radio radio-neutral" />
            <span className="ml-2 font-semibold">neutral</span>
          </div>

          <div className="flex items-center my-5">
            <input type="radio" name="radio-5" className="radio radio-accent" />
            <span className="ml-2 font-semibold">sad</span>
          </div>

          <div className="flex items-center my-5">
            <input type="radio" name="radio-5" className="radio radio-error" />
            <span className="ml-2 font-semibold">horrible</span>
          </div>

        </div>

        <div className="mt-14"> 
          <h2 className="text-2xl font-semibold mb-6">whats been on your mind?</h2>
          <textarea className="textarea textarea-accent w-full h-60" placeholder="let your thoughts flow"></textarea>
        </div>
        {/* <button className="btn btn-primary btn-lg" onClick={handleCheckIn}>check in</button> */}
      </div>
    </div>
  )
}

export default Dashboard
