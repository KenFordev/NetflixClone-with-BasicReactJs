import React from 'react'
import './header.css'
function header() {
  return (
    <div className="bg-header">
        <div className="container">
            <div className="header-con">
                <div className="nav-con">
                    <div className="logo text-danger">
                        <h2>Betflix</h2>
                    </div>
                    <div className="nav-rigth">
                        <div className="nav-select form-group">
                            <select name="sel" id="sel" className='form-select'>
                                <option value="English">English</option>
                                <option value="ไทย">ไทย</option>
                            </select>
                        </div>
                        <div className="sign-in">
                            <button className='btn btn-danger'>Sign in</button>
                        </div>
                    </div>
                </div>
                <div className="head-content text-white text-center">
                    <h1>Unlimited movies, TV <br/>shows, and more.</h1>
                    <p>Watch anywhere. Cancel anytime.</p>
                    <p>Ready to watch? Enter your email to create or restart your membership.</p>
                    <div className="content-email d-flex justify-content-center mt-4">
                        <div className="form-group">
                            <input type="email" placeholder='Email address' className='form-control'/>
                        </div>
                        <button className='btn btn-danger px-5 none-border'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default header