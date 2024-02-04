import React, {useEffect, useState} from 'react'
import {useCheckIn} from '../context/CheckInContext'
import { Slider } from '../components/Slider'
import { TbMoodSad, TbMoodHappy } from "react-icons/tb";
import { useAuth } from '../context/AuthContext'
import { PiFlowerTulipFill } from "react-icons/pi";
import { Link } from 'react-router-dom';

function CheckInPage() {
    const {
        checkInMood,
        checkInProgress,
        checkInJournal,
        checkInBirthControl,
        setCheckInBirthControl,
        setCheckInProgress,
        setCheckInMood,
        setCheckInJournal,
        submitCheckIn,
    } = useCheckIn()
    const [moodValue, setMoodValue] = useState(2)

    const {currentUser} = useAuth()

    switch(checkInProgress) {
       
        case 'birth control':
            return (
                <div className='lg:w-1/2 mx-auto'>

                    <div className="flex items-center mx-auto w-fit mb-20">
                        <div className="w-20 bg-primary badge" onClick={() => {
                            setCheckInProgress('birth control')
                        }}> </div>
                        <div className="w-20 bg-base-content badge" onClick={() => {
                            setCheckInProgress('mood')
                        }}> </div>
                        <div className="w-20 bg-base-content badge" onClick={() => {
                            setCheckInProgress('journal')
                        }}> </div>
                    </div>

                    <h1 className='mx-auto text-7xl font-bold text-center'>did you take your birth control?</h1>

                    <div className='mt-40 w-1/2 mx-auto'>
                        <button className="btn btn-block bg-primary"
                        onClick={() => {
                            setCheckInBirthControl(true)
                            setCheckInProgress('mood')
                        }}>
                            yup
                        </button>
                        <button className="btn btn-block mt-8" onClick={() => {
                            setCheckInBirthControl(false)
                            setCheckInProgress('mood')
                        }}>
                            nope
                        </button>
                    </div>

                </div>
            )
        case 'mood':
            return (
                <div className='lg:w-1/2 mx-auto'>
                    
                    <div className="flex items-center mx-auto w-fit mb-20">
                        <div className="w-20 bg-base-content badge" onClick={() => {
                            setCheckInProgress('birth control')
                        }}> </div>
                        <div className="w-20 bg-primary badge" onClick={() => {
                            setCheckInProgress('mood')
                        }}> </div>
                        <div className="w-20 bg-base-content badge" onClick={() => {
                            setCheckInProgress('journal')
                        }}> </div>
                    </div>

                    <h1 className='mx-auto text-7xl font-bold text-center'>how was your mood today?</h1>

                    <div className='mt-40'>
                        <Slider value={[moodValue]} onValueChange={([newMoodValue]) => {
                            setMoodValue(newMoodValue)
                        }}></Slider>
                        <div className="flex items-end justify-between mt-10">
                            <div>
                                <TbMoodSad className='text-4xl' />
                            </div>
                            <div>
                                <TbMoodHappy className='text-4xl' />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between mt-40 mx-auto">
                        <button className="btn btn-block" onClick={() => {
                            setCheckInMood(moodValue)
                            setCheckInProgress('journal')
                        }}>next</button>
                    </div>

                </div>
            )
        case 'journal':
            return (
                <div className='lg:w-1/2 mx-auto'>

                    <div className="flex items-center mx-auto w-fit mb-20">
                        <div className="w-20 bg-base-content badge" onClick={() => {
                            setCheckInProgress('birth control')
                        }}> </div>
                        <div className="w-20 bg-base-content badge" onClick={() => {
                            setCheckInProgress('mood')
                        }}> </div>
                        <div className="w-20 bg-primary badge" onClick={() => {
                            setCheckInProgress('journal')
                        }}> </div>
                    </div>

                    <h1 className='mx-auto text-7xl font-bold text-center'>whats on your mind?</h1>

                    <div className='mt-40'>
                        <textarea className="textarea textarea-primary h-40 w-full" 
                            placeholder="let your thoughts flow"
                            value={checkInJournal}
                            onChange={(e) => {
                                setCheckInJournal(e.target.value)
                            }}
                        ></textarea>
                    </div>

                    <div className="mt-40 mx-auto">
                        <button className="btn btn-block btn-primary" onClick={() => {
                            submitCheckIn({
                                birthControl: checkInBirthControl,
                                mood: checkInMood,
                                journal: checkInJournal,
                                userID: currentUser.uid
                            })
                            setCheckInProgress('finished')
                        }}>submit</button>
                    </div>

                </div>
            )
        case 'finished':
            return (
                <div className='lg:w-1/2 mx-auto'>

                    <div className="flex items-center mx-auto w-fit mb-20">
                        <div className="w-20 bg-primary badge" onClick={() => {
                            setCheckInProgress('birth control')
                        }}> </div>
                        <div className="w-20 bg-primary badge" onClick={() => {
                            setCheckInProgress('mood')
                        }}> </div>
                        <div className="w-20 bg-primary badge" onClick={() => {
                            setCheckInProgress('journal')
                        }}> </div>
                    </div>

                    <h1 className='mx-auto text-7xl font-bold text-center'>you're set for today</h1>

                    <div className='mt-40'>
                       <div>
                        <PiFlowerTulipFill className='text-7xl mx-auto' />
                       </div>
                    </div>

                    <div className="mt-40 mx-auto">
                        <Link to='/dashboard' className="btn btn-block btn-primary">return to dashboard</Link>
                    </div>

                </div>
            )
    }
}

export default CheckInPage