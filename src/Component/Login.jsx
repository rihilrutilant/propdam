//https://propdam.mhindia.in/
import React from 'react'
import "../Style/Login.css"
import Navbar from './Navbar'

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="container123">
        <div className='logo'>
          <img src={require('../Assets/R.png')} alt="" srcset="" />
        </div>
        <div className='form-width '>
          <form>
            <div>
              <input type="text" placeholder="Enter Mobile Number" />
            </div>
            <div htmlFor="" className='p-3 t-and-c'>
              <input type="checkbox" name="" id="" />
              <span className='ps-2 text-letf'>Terms & Conditions</span>
            </div>
            <div className=''>
              <button className='sentopt-btn'>Sent otp</button>
            </div>
            <div className='p-3 mt-4'>
              <span>Don't have an account?</span> <button className='create-btn'>Create new</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login