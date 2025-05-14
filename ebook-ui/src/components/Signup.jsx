import { useState } from "react"

const Signup = () =>{
   const [type,setType] = useState('password')
    return (

        <div className="bg-gray-200 min-h-screen flex items-center justify-center nimate__animated animate__fadeIn ">
              <div className="bg-white w-[480px]     rounded shadow p-5 animate__animated animate__pulse" >
                 <h1 className="text-center text-2xl font-semibold mb-4">Hi User!</h1>
                 <form action="" className="flex flex-col gap-5">
                   <div className="flex flex-col gap-2">
                        <label className="font-medium text-base">fullname</label>
                        <input 
                        className="border  border-gray-300 rounded p-2"
                        name="name"
                        type="text" placeholder="mail@gmail.com" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-medium text-base">email</label>
                        <input 
                        className="border  border-gray-300 rounded p-2"
                        name="email"
                        type="email" placeholder="mail@gmail.com" />
                    </div>

                    <div className="flex flex-col gap-2 relative">
                        <label className="font-medium text-base">password</label>
                        <input 
                        className="border  border-gray-300 rounded p-2 pr-12"
                        name="password"
                        type={type} placeholder="******" />

                        <button
                        onClick={()=>setType(type ==='password'?'text':'password')}
                        type="button"
                        className="absolute top-9 right-2 bg-gray-100 w-8 h-8 rounded-full hover:bg-gray-200">
                           {
                            type==='password'? <i class="ri-eye-line"></i> :<i class="ri-eye-off-line"></i>
                           }
                        </button>
                    </div>
                    <button className="bg-indigo-500  p-2 rounded font-medium text-white">login</button>
                 </form>

                 <div className="flex gap-2 mt-4 ">
                  <label className="text-gray-500" >I have an account?</label>
                  <a className="text-blue-600">SignIn</a>
                 </div>
              </div>
        </div> 
    )
}
export default Signup