

 import { Link } from "react-router-dom"
 import calendar from '../assets/calendar.png'
 import moodInput from '../assets/mood-input.png'
 import flower from '../assets/flower.png'
 import SignUp from "../components/SignUp"
 
 export default function LandingPage() {
   return (
     <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 mx-auto">
       <div className="container px-4 md:px-6 mx-auto">
         <div className="flex flex-col items-center space-y-4 text-center">
           <div className="">
             <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl/none">
               a simple way to stay on track
             </h1>
             <p className="mx-auto max-w-[700px] my-10">
               manage your birth control with ease, get notified when it's time to take your pill, change your patch, or get a new ring
             </p>
           </div>

           <div className="w-full max-w-sm space-y-2 mt-4">
              <Link to="/register" className="btn btn-primary btn-block">
                sign up
              </Link>
           </div>

            <div className="w-full max-w-sm space-y-2 mt-4">
              
            </div>
         </div>

         <div className="hero mt-40 bg-base-200 rounded-xl shadow-xl">
            <div className="hero-content flex justify-between">
              <img src={calendar} className="max-w-sm rounded-lg shadow-2xl" />
              <div className="ml-40">
                <h2 className="text-4xl font-bold">never skip birth control again</h2>
                <p className="py-6 w-3/4">
                  your history is logged overtime for you to view and track your mental health and bc usage
                </p>
                <Link to='/register' className="btn btn-primary">get started</Link>
              </div>
            </div>
          </div>

          <div className="mt-40 flex items-center bg-base-200 rounded-xl shadow-xl">
            <div className="ml-10">
              <h2 className="text-4xl font-bold mb-4">manage your mental health</h2>
              <p>
                keep a pulse on your emotions and discover patterns that could be affecting your well-being
              </p>
            </div>

            <div className="mockup-phone border- -rotate-12 float-right">
              <div className="camera"></div> 
              <div className="display">
                <div className="artboard artboard-demo phone-3 bg-base-100">
                  <img src={moodInput} alt="" className="w-4/5"/>
                </div>
              </div>
            </div>
          </div>

          <div className="card card-side bg-base-200 rounded-xl shadow-xl shadow-xl mt-40">
            <img src={flower} className="w-1/3"/>
            <div className="card-body">
              <h2 className="card-title font-bold text-4xl">sign up</h2>
              
              <SignUp></SignUp>
            </div>
          </div>

       </div>
     </section>
   )
 }
 
 