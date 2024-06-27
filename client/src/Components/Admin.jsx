import React from 'react'
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"


const Admin = ({ name,mail,balance,number }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [receiverId, setReceiverID] = useState();
  const [amount, setAmount] = useState();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      setUser(userData);
    } else {
      navigate('/login');
    }
  }, [navigate]);

  if (!user) return null;

  const handleTransfer = async () =>{
    // e.preventDefault();
    try{
      const user = JSON.parse(localStorage.getItem('user'));
      const response = await axios.post('http://localhost:4000/transfer', { 
        senderId: user.mail, receiverId, amount });

      if (response.data.success) {
        user.balance -= parseFloat(amount);
        localStorage.setItem('user', JSON.stringify(user));
      }
    }
    catch(err){
      console.log(err);
    }
  }


  return (
    <div className='h-lvh w-full flex flex-col'>
        {/* Admin Header */}
        <div className="adminHeader flex justify-between h-20 shadow-md w-full border-b">
          
          <div className="AdminLeft h-full w-fit flex gap-2 items-center px-8">
            <div className="logo h-12 w-12 bg-slate-700 rounded-full">

            </div>
            <h1 className='text-xl font-medium'>{user.name}</h1>
          </div>

          <div className="adminRight px-8 flex flex-col justify-center items-end">
            <p>{user.mail}</p>
            <p>{user.number}</p>
          </div>
        </div>


        {/* Admin content */}
        <div className="adminContainer h-full w-full flex gap-6 p-12">
          
          {/* accout Balance */}
          <div className="adminBalance h-fit w-fit py-6 px-8 border border-slate-300 rounded-xl shadow-md">
            <p className='text-3xl text-slate-500 font-bold'>Account Balance:</p>
            <p className='text-3xl text-slate-600'>₹ {user.balance}</p>
          </div>
          
          {/* account Transfer */}
          <div className="adminTransfer h-fit w-fit py-6 px-8 border border-slate-300 rounded-xl shadow-md">
            <h1 className='text-3xl text-slate-500 font-bold'>Transfer To:</h1>
            
            <form onSubmit={handleTransfer} className='h-full w-full flex flex-col gap-4 mt-4'>
              
              {/* To Adress */}
              <div className='signUpName h-fit w-full flex gap-4 justify-between items-center'>
                    <p className='text-lg flex-1'>To :</p>
                    <input className='text-lg px-1 transition-all outline-none border-b-2 py-1 border-b-1 focus:border-b-slate-500' 
                    type='email' placeholder='Recptient Address(mail)'
                    onChange={(e) => setReceiverID(e.target.value)} 
                    />
                </div>
              
              {/* Amount to Send */}
              <div className='signUpName h-fit w-full flex gap-4 justify-between items-center'>
                    <p className='text-lg flex-1'>Amount :</p>
                    <input className='text-lg px-1 transition-all outline-none border-b-2 py-1 border-b-1 focus:border-b-slate-500' 
                    type='number' placeholder='Amount (eg: 500)' 
                    onChange={(e) => setAmount(e.target.value)}
                    />
                </div>

              {/* Transfer Button */}
              <button type='submit' className='px-4 py-2 bg-slate-200 rounded-xl text-slate-600 my-4'>Transfer</button>

            </form>
          </div>
        </div>

        {/* home Button */}
        <div className='absolute bottom-0 right-0 shadow-lg h-fit w-fit px-4 py-2 bg-slate-600 m-8 rounded-full'>
          <Link className='text-lg text-slate-100' to="/">Log out</Link>
        </div>
    </div>
  )
}

export default Admin;