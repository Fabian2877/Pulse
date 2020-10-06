import React from 'react'; 
import {Link} from 'react-router-dom'
import GoogleAuth from './GoogleAuth'







function Header() {


    return (
        <div className='ui secondary pointing menu'>
            <Link to='/' className='item'>Pulse</Link>


            <div className='right menu'>
                
              <Link to='/' className='item'></Link>  
              <GoogleAuth/>
            </div>


        </div>
    )
        
}


//Integrate Log in system using a database. Allow users to sign-up via Google OAuth or through website


export default Header;