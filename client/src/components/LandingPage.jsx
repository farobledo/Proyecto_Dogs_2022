import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';
import {GiDogHouse} from 'react-icons/gi'

export default function LandingPage(){
    return(
        <div className='divLP'>
          <h1 className='title'>Welcome to the Dog House</h1>
            <Link to='/home'>
                <button className='button'>Dog 🐶 <span><GiDogHouse/></span></button>
                
              
                
            </Link>
        </div>
    )
}