import React from 'react'
import './content2.css'
import { BiDownload } from "@react-icons/all-files/bi/BiDownload";

function Content2() {

    const imgGirl = './images/mobile.jpg'
    const myPoster = './images/st.png'

  return (
    <div className="content2-bg">
        <div className="container">
            <div className="con-container">
                <div className='p-3 con-flex d-flex flex-column flex-sm-column flex-md-column flex-lg-row'>
                    <div className="item-left1 position-relative">

                        <div className="img-girl">
                            <img className='w-100' src={imgGirl} alt="" />
                        </div>

                        <div className="poster p-3 d-flex rounded rounded-4">
                            <div className="poster-item">
                                <img src={myPoster} alt="" />
                            </div>
                            <div className="poster-item text-white">
                                <h3>Stranger Things</h3>
                                <p>Downloading...</p>
                            </div>
                            <div className="poster-item p-4">
                                <BiDownload className='logo-download'/>
                            </div>
                        </div>

                    </div>
                    <div className="item-right1 text-white align-self-lg-center text-center text-sm-center text-md-center text-lg-start p-4">
                        <h1 className='fs-1 mb-4 fw-bolder'>Download your shows to watch offline.</h1>
                        <p className='fs-3'>Save your favorites easily and always have something to watch.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Content2