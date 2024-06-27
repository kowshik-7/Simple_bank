import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"

const Login = () => {
    const [mail,setMail] = useState()
    const [password,setPassword] = useState()
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()
        try{
            const response = await axios.post('http://localhost:4000/login', { mail, password });
            if (response.data.success)
            {
                localStorage.setItem('user', JSON.stringify(response.data.user));
                navigate('/admin');
            }
        }
        catch (error) {
            console.error('Login failed:', error);
        }
    }
  return (
    <div className='signup h-lvh w-full flex items-center justify-center'>
        <div className="signupCotnainer h-fit w-fit px-8 py-4 flex border rounded-xl items-center gap-2 shadow-xl flex-col">
            
            <h1 className='text-2xl text-slate-600 py-2 font-semibold'>Log In</h1>
            
            <form onSubmit={handleLogin} className='h-full w-full flex flex-col gap-4'>
                {/* Email */}
                <div className='signUpName h-fit w-full flex gap-4 justify-between items-center'>
                    <p className='text-lg flex-1'>EMAIL ID :</p>
                    <input className='text-lg px-1 transition-all outline-none border-b-2 py-1 border-b-1 focus:border-b-slate-500' 
                    type='email' placeholder='Your Mail id' 
                    onChange={(e) => setMail(e.target.value)}
                    />
                </div>
                {/* Password */}
                <div className='signUpName h-fit w-full flex gap-4 justify-between items-center'>
                    <p className='text-lg flex-1'>PASSWORD :</p>
                    <input className='text-lg px-1 transition-all outline-none border-b-2 py-1 border-b-1 focus:border-b-slate-500' 
                    type="password" placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)} />
                </div>
                
                <button type='submit' className='px-4 py-2 bg-slate-200 rounded-xl text-slate-600 my-4'>Log In</button>

            </form>
        
        </div>

        <div className='signupWrap absolute h-fit w-full flex gap-4 top-0 justify-end p-4'>
            <Link to="/signup" className='font-semibold text-slate-100 bg-slate-500 px-4 py-2 rounded-xl' >Sign Up</Link>
            <Link to="/" className='font-semibold text-slate-100 bg-slate-500 px-4 py-2 rounded-xl' >Home</Link>
        </div>
    </div>
  )
}

export default Login;