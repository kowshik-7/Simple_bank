import React from 'react'
import homeImg from "../Assets/home-img.jpg"
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home h-lvh w-full flex items-center justify-center'>
        <div className="homeContainer h-fit w-fit flex items-center justify-center flex-col px-14 py-10 shadow-xl rounded-xl">
            <h1 className='text-2xl font-semibold tracking-wider'>Sample Bank</h1>
            <div className='h h-52 w-52'>
                <img src={homeImg} alt="" />
            </div>
            <div className='flex gap-4'>
                <Link className='text-xl text-white rounded-2xl px-4 py-1 bg-slate-500' to="/login">Login</Link>
                <Link className='text-xl text-white rounded-2xl px-4 py-1 bg-slate-500' to="/signup">Signup</Link>
            </div>
        </div>
    </div>
  )
}

export default Home;