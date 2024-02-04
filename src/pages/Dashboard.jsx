import React, {useState} from 'react'
import firebase from '../firebase'
import { v4 as uuidv4 } from 'uuid';
import { setDoc, doc, getDoc, collection } from 'firebase/firestore'
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import { useCheckIn } from '../context/CheckInContext';
import { format } from 'date-fns'; // For formatting dates

function Dashboard() {

  const {currentUser} = useAuth()
  const {
    checkInMood,
    checkInJournal,
    checkInBirthControl,
    setCheckInBirthControl,
    setCheckInMood,
    setCheckInJournal,
    addOrUpdateCheckIn,
  } = useCheckIn()

  const handleCheckIn = async () => {

    const checkInData = {
      checkInBirthControl,
      checkInMood,
      checkInJournal,
      date: new Date(),
      userID: currentUser.uid
    }

    addOrUpdateCheckIn(checkInData)
  }

  return (
    <div>
      <div className="w-1/3">
        <h1 className='text-2xl font-bold mb-10'>{`daily check in for ${format(new Date(), 'eee').toLowerCase()} ${format(new Date(), 'MMM dd yyy').toLowerCase()}`}</h1>
        <h2 className="text-2xl font-semibold mb-8">did you take birth control?</h2>

        <div className={`btn btn-block hover:bg-red-300 hover:text-black ${checkInBirthControl ? 'btn-primary' : 'btn-outline btn-ghost'}`}
          onClick={() => {
            setCheckInBirthControl(!checkInBirthControl)
            console.log(checkInBirthControl)
          }}>
          {
          checkInBirthControl ? 'yes' : 'no'}
        </div>
        <div className="flex items-center">
          <div>no</div>
          <div>yes</div>
        </div>

        <div className='mt-14'>
          <h2 className="text-2xl font-semibold">how is your mood today?</h2>

          <div className="flex items-center my-5">
            <input type="radio" name="radio-5" className="radio radio-success" 
              value='fantastic'
              onChange={(e) => setCheckInMood(e.target.value)}
              />
            <span className="ml-2 font-semibold">fantastic</span>
          </div>

          <div className="flex items-center my-5">
            <input type="radio" name="radio-5" className="radio radio-primary" 
              value='good'
              onChange={(e) => setCheckInMood(e.target.value)}
              />
            <span className="ml-2 font-semibold">good</span>
          </div>

          <div className="flex items-center my-5">
            <input type="radio" name="radio-5" className="radio radio-secondary"
              value='okay'
              onChange={(e) => setCheckInMood(e.target.value)}
              />
            <span className="ml-2 font-semibold">okay</span>
          </div>

          <div className="flex items-center my-5">
            <input type="radio" name="radio-5" className="radio radio-neutral" 
              value='neutral'
              onChange={(e) => setCheckInMood(e.target.value)}
              />
            <span className="ml-2 font-semibold">neutral</span>
          </div>

          <div className="flex items-center my-5">
            <input type="radio" name="radio-5" className="radio radio-accent" 
              value='sad'
              onChange={(e) => setCheckInMood(e.target.value)}
              />
            <span className="ml-2 font-semibold">sad</span>
          </div>

          <div className="flex items-center my-5">
            <input type="radio" name="radio-5" className="radio radio-error text-red-900" 
              value='horrible'
              onChange={(e) => setCheckInMood(e.target.value)}
              />
            <span className="ml-2 font-semibold">horrible</span>
          </div>

        </div>

        <div className="mt-14"> 
          <h2 className="text-2xl font-semibold mb-6">whats been on your mind?</h2>
          <textarea className="textarea textarea-accent w-full h-60" 
            placeholder="let your thoughts flow"
            value={checkInJournal}
            onChange={(e) => setCheckInJournal(e.target.value)}
            ></textarea>
        </div>
        <button className={`btn btn-block mt-14 ${checkInMood == null ? 'btn-disabled' : 'btn-primary'}`} 
          onClick={handleCheckIn}>check in</button>
      </div>
    </div>
  )
}

export default Dashboard
