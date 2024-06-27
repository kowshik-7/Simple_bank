import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"

const Signup = () => {
    const [name,setName] = useState();
    const [mail,setMail] = useState();
    const [password,setPassword] = useState();
    const [number,setNumber] = useState();
    const [balance,setBalance] = useState();
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault()
        axios.post("http://localhost:4000/register", {name,mail,password,number,balance});
        navigate("/login");
    }
    return (
    <div className='signup h-lvh w-full flex items-center justify-center'>
        <div className="signupCotnainer h-fit w-fit px-8 py-4 flex border rounded-xl items-center gap-2 shadow-xl flex-col">
            
            <h1 className='text-2xl text-slate-600 py-2 font-semibold'>Sign up</h1>
            
            <form className='h-full w-full flex flex-col gap-4' onSubmit={handleSignup}>
                {/* Name */}
                <div className='signUpName h-fit w-full flex gap-4 justify-between items-center'>
                    <p className='text-lg flex-1'>NAME :</p>
                    <input className='text-lg px-1 transition-all outline-none border-b-2 py-1 border-b-1 focus:border-b-slate-500' 
                    type="text" placeholder='Your Name' 
                    name='name'
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                {/* Email */}
                <div className='signUpName h-fit w-full flex gap-4 justify-between items-center'>
                    <p className='text-lg flex-1'>EMAIL ID :</p>
                    <input className='text-lg px-1 transition-all outline-none border-b-2 py-1 border-b-1 focus:border-b-slate-500' 
                    type='email' placeholder='Your Mail id'
                    name='mail'
                    onChange={(e) => setMail(e.target.value)} />
                </div>
                {/* Password */}
                <div className='signUpName h-fit w-full flex gap-4 justify-between items-center'>
                    <p className='text-lg flex-1'>PASSWORD :</p>
                    <input className='text-lg px-1 transition-all outline-none border-b-2 py-1 border-b-1 focus:border-b-slate-500' 
                    type="password" placeholder='Create Password' 
                    name='password'
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {/* Phone No */}
                <div className='signUpName h-fit w-full flex gap-4 justify-between items-center'>
                    <p className='text-lg flex-1'>PHONE NO :</p>
                    <input className='text-lg px-1 transition-all outline-none border-b-2 py-1 border-b-1 focus:border-b-slate-500' 
                    type="number" placeholder='Your Number' 
                    name='number'
                    onChange={(e) => setNumber(e.target.value)}
                    />
                </div>
                {/* minimum balance */}
                <div className='signUpName h-fit w-full flex gap-4 justify-between items-center'>
                    <p className='text-lg flex-1'>Minimum Deposit :</p>
                    <input className='text-lg px-1 transition-all outline-none border-b-2 py-1 border-b-1 focus:border-b-slate-500' 
                    type="number" placeholder='minimum deposit' 
                    name='balace'
                    onChange={(e) => setBalance(e.target.value)}
                    />
                </div>
                
                <button type='submit' className='px-4 py-2 bg-slate-200 rounded-xl text-slate-600 my-4'>Register</button>
            </form>
        
        </div>

        <div className='signupWrap absolute h-fit w-full flex gap-4 top-0 justify-end p-4'>
            <Link to="/login" className='font-semibold text-slate-100 bg-slate-500 px-4 py-2 rounded-xl' >Log in</Link>
            <Link to="/" className='font-semibold text-slate-100 bg-slate-500 px-4 py-2 rounded-xl' >Home</Link>
        </div>
    </div>
  )
}

export default Signup;