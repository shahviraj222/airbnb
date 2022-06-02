import React from 'react';
import './signin.css'
import { Link } from 'react-router-dom';

export default function SignIn() {
    const checkCrad=(u,p)=>{
        return(
         console.log("I am Clicked")
        )
    }
    
  return (
    <>
    <div className="wrapper">
        <div className="logo">
            <img src="https://ebenezersuites.com/wp-content/uploads/2016/06/airbnb-logo-266x300@2x.png" alt=""/>
        </div>
        <div className="text-center mt-4 name">
            Airbnb
        </div>
        <form className="p-3 mt-3">
            <div className="form-field d-flex align-items-center">
                <span className="far fa-user"></span>
                <input type="text" name="userName" id="userName" placeholder="Username"/>
            </div>
            <div className="form-field d-flex align-items-center">
                <span className="fas fa-key"></span>
                <input type="password" name="password" id="pwd" placeholder="Password"/>
            </div>
            <Link to='/form'><button className="btn mt-3" type='submit'onClick={()=>checkCrad('userName'.value,'Password'.password)}>Login</button>
            </Link>
        </form>
        
        <div className="text-center fs-6">
            <a href="#">Forget password?</a> or <a href="newuser">Sign up</a>
        </div>
    </div>
  </>
  )
}

