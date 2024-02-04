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

  const [birthControl, setBirthControl] = useState(false)
  const [mood, setMood] = useState(null)
  const [journal, setJournal] = useState('')

  const handleCheckIn = async () => {

    const checkInData = {
      birthControl,
      mood,
      journal,
      date: new Date(),
      userID: currentUser.uid
    }

    addOrUpdateCheckIn(checkInData)
  }

  return (
    <div>
      <div className="w-1/3">
        <h2 className="text-2xl font-semibold mb-8">did you take birth control?</h2>

        <div className={`btn btn-block hover:bg-red-300 hover:text-black ${birthControl ? 'btn-primary' : 'btn-outline btn-ghost'}`}
          onClick={() => {
            setBirthControl(!birthControl)
            console.log(birthControl)
          }}>
          {
          birthControl ? 'yes' : 'no'}
        </div>

        <div className='mt-14'>
          <h2 className="text-2xl font-semibold">how is your mood today?</h2>

          <div className="flex items-center my-5">
            <input type="radio" name="radio-5" className="radio radio-success" 
              value='fantastic'
              onChange={(e) => setMood(e.target.value)}
              />
            <span className="ml-2 font-semibold">fantastic</span>
          </div>

          <div className="flex items-center my-5">
            <input type="radio" name="radio-5" className="radio radio-primary" 
              value='good'
              onChange={(e) => setMood(e.target.value)}
              />
            <span className="ml-2 font-semibold">good</span>
          </div>

          <div className="flex items-center my-5">
            <input type="radio" name="radio-5" className="radio radio-secondary"
              value='okay'
              onChange={(e) => setMood(e.target.value)}
              />
            <span className="ml-2 font-semibold">okay</span>
          </div>

          <div className="flex items-center my-5">
            <input type="radio" name="radio-5" className="radio radio-neutral" 
              value='neutral'
              onChange={(e) => setMood(e.target.value)}
              />
            <span className="ml-2 font-semibold">neutral</span>
          </div>

          <div className="flex items-center my-5">
            <input type="radio" name="radio-5" className="radio radio-accent" 
              value='sad'
              onChange={(e) => setMood(e.target.value)}
              />
            <span className="ml-2 font-semibold">sad</span>
          </div>

          <div className="flex items-center my-5">
            <input type="radio" name="radio-5" className="radio radio-error text-red-900" 
              value='horrible'
              onChange={(e) => setMood(e.target.value)}
              />
            <span className="ml-2 font-semibold">horrible</span>
          </div>

        </div>

        <div className="mt-14"> 
          <h2 className="text-2xl font-semibold mb-6">whats been on your mind?</h2>
          <textarea className="textarea textarea-accent w-full h-60" 
            placeholder="let your thoughts flow"
            value={journal}
            onChange={(e) => setJournal(e.target.value)}
            ></textarea>
        </div>
        <button className={`btn btn-block mt-14 ${mood == null ? 'btn-disabled' : 'btn-primary'}`} 
          onClick={handleCheckIn}>check in</button>
      </div>
    </div>
  )
}

export default Dashboard
