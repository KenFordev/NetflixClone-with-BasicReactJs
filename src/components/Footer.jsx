import React from 'react'
import './footer.css'


function Footer() {
  return (
    <div>
        <div className="foot-bg">
            <div className="container">
                <div className="foot-con">
                    <div className="foot-head mb-5">
                        <h2 className='fs-4'>Questions? Call 1-800-012-298</h2>
                    </div>
                    <div className="foot-content-grid">
                        <div className="foot-con-grid-item mt-4 row justify-content-center">
                            <ul className="nav d-flex flex-column col-6 col-sm-6 col-md-6 col-lg-3">
                                <li className='nav-item mb-3'><a className='nav-link d-inline' href="#">FAQ</a></li>
                                <li className='nav-item mb-3'><a className='nav-link d-inline' href="#">Investor Relations</a></li>
                                <li className='nav-item mb-3'><a className='nav-link d-inline' href="#">Ways to Watch</a></li>
                                <li className='nav-item mb-3'><a className='nav-link d-inline' href="#">Corporate Information</a></li>
                                <li className='nav-item mb-3'><a className='nav-link d-inline' href="#">Only on Netflix</a></li>
                            </ul>
                            <ul className="nav d-flex flex-column col-6 col-sm-6 col-md-6 col-lg-3">
                                <li className='nav-item mb-3'><a className='nav-link d-inline' href="#">Help Center</a></li>
                                <li className='nav-item mb-3'><a className='nav-link d-inline' href="#">Jobs</a></li>
                                <li className='nav-item mb-3'><a className='nav-link d-inline' href="#">Terms of Use</a></li>
                                <li className='nav-item mb-3'><a className='nav-link d-inline' href="#">Contect Us</a></li>
                            </ul>
                            <ul className="nav d-flex flex-column col-6 col-sm-6 col-md-6 col-lg-3">
                                <li className='nav-item mb-3'><a className='nav-link d-inline' href="#">Account</a></li>
                                <li className='nav-item mb-3'><a className='nav-link d-inline' href="#">Redeem Gift Cards</a></li>
                                <li className='nav-item mb-3'><a className='nav-link d-inline' href="#">Privacy</a></li>
                                <li className='nav-item mb-3'><a className='nav-link d-inline' href="#">Speed Test</a></li>
                            </ul>
                            <ul className="nav d-flex flex-column col-6 col col-sm-6 col-md-6 col-lg-3">
                                <li className='nav-item mb-3'><a className='nav-link d-inline' href="#">Media Center</a></li>
                                <li className='nav-item mb-3'><a className='nav-link d-inline' href="#">Buy Gift Cards</a></li>
                                <li className='nav-item mb-3'><a className='nav-link d-inline' href="#">Cookie Preferences</a></li>
                                <li className='nav-item mb-3'><a className='nav-link d-inline' href="#">Contect Us</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="foot-eng p-2">
                        <div className="foot-select form-group">
                            <select name="foot" id="foot" className='form-select'>
                                <option value="English">English</option>
                                <option value="ไทย">ไทย</option>
                            </select>
                        </div>
                        <div className="foot-text-thailand mt-3">
                            <p>Betflix Thailand</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer