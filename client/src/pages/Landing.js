import main from '../assets/images/main-alternative.svg'
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components'
import {Link, Navigate} from 'react-router-dom'
import { useAppContext } from '../context/appContext';
import React from 'react';
const Landing = () => {
  const {user} =  useAppContext();
  return (
  <React.Fragment>
    {user && <Navigate to='/' />}  
    <Wrapper>
        <nav>
            <Logo/>
        </nav>
        <div className="container page">
          <div className='info'>
          <h1>
                job<span>tracking</span>
            </h1>
            <p>
              Keep an accurate record of all the jobs you've applied for.
            </p>
            <Link to = '/register' className = "btn btn-hero"> 
                Login/Register
            </Link>
          </div>
          <img src = {main} alt = 'job hunt' className = 'img main-img' />
        </div>
    </Wrapper>
  </React.Fragment>
  )
}

export default Landing

