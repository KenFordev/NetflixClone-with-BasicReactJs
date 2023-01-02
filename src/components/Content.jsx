import React from 'react'
import './content.css'

function Content() {
    const myVideo = './images/Vedio.m4v'
    const imgTv = './images/tv.png'
  return (
    <div className="content-bg h-auto">
        <div className="container">
            <div className="con-container">
                <div className="con-item d-sm-flex flex-sm-column flex-md-column flex-lg-row pb-5">

                    <div className="item-left text-white p-3 align-self-lg-center
                                text-center text-sm-center text-md-center text-lg-start">
                        <h1 className='fs-1 mb-4 fw-bolder'>Enjoy on your TV.</h1>
                        <p className='fs-3'>Watch on Smart TVs, Playstation, Xbox,
                        Chromecast, Apple TV, Blu-ray players, and
                        more.</p>
                    </div>

                    <div className="item-right">
                        <div className='image-item'>
                            <img className='w-100' src={imgTv} alt="" />
                            <div className="v-item">
                                <video className='w-100' src={myVideo} autoPlay loop muted></video>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Content