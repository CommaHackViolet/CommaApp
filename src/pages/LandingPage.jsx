/**
 * v0 by Vercel.
 * @see https://v0.dev/t/GAYSyiM5o0Y
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
 
 import { Link } from "react-router-dom"
 
 export default function LandingPage() {
   return (
     <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
       <div className="container px-4 md:px-6">
         <div className="flex flex-col items-center space-y-4 text-center">
           <div className="space-y-2">
             <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
               never skip birth control again
             </h1>
             <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
               Manage your birth control with ease. Get notified when it's time to take your pill, change your patch, or get a new ring.
             </p>
           </div>
           <div className="w-full max-w-sm space-y-2">
             <form className="flex space-x-2">
               <input className="max-w-lg flex-1 input-primary input" placeholder="Enter your email" type="email" />
               <button className="btn btn-primary" type="submit">Sign Up</button>
             </form>
             <p className="text-xs text-gray-500 dark:text-gray-400">
               Sign up to get notified when we launch.
               <Link className="underline underline-offset-2" href="#">
                 Terms & Conditions
               </Link>
             </p>
           </div>
         </div>
       </div>
     </section>
   )
 }
 
 