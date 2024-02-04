import React, {useState} from 'react'
import firebase from '../firebase'
import { v4 as uuidv4 } from 'uuid';
import { setDoc, doc, getDoc, collection } from 'firebase/firestore'
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import { useCheckIn } from '../context/CheckInContext';
import { useEffect } from 'react';
import { format } from 'date-fns'; // For formatting dates
import { BsJournal } from "react-icons/bs";

function Dashboard() {

  const {currentUser} = useAuth()

  const {
    checkInMood,
    checkInJournal,
    checkInBirthControl,
    setCheckInBirthControl,
    setCheckInMood,
    setCheckInJournal,
    checkInLogs,
    fetchCheckInLogs,
    addOrUpdateCheckIn,
  } = useCheckIn()

  useEffect(() => {
    fetchCheckInLogs()
    console.log(checkInLogs);
  }, []);

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
    <div className='w-10/12 mx-auto'>
      
      <div className="lg:grid lg:grid-cols-2">

        <div className="lg:grid">

          <h2 className='text-3xl font-bold mb-10'>journals</h2>

          {checkInLogs.map((log, i) => {
            return (
              <div key={i} className="my-2 font-bold flex">
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn" onClick={()=> {
                  document.getElementById('my_modal_'+i).showModal()}
                }>
                  <BsJournal className='text-2xl mr-2'/>
                  <h3>{format(log.date, 'eeee dd / yy')}</h3>
                </button>

                <dialog id={`my_modal_${i}`} className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg">{`journal entry for ${format(log.date, 'eeee dd / yy').toLowerCase()}`}</h3>
                    <p className="py-4 font-medium">{log.journal}</p>
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
              </div>
            )
          })}

        </div>
      </div>
    </div>
  )
}

export default Dashboard
