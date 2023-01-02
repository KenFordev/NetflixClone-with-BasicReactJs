import React from 'react'
import './content4.css'


function Content4() {

    const myKid = './images/bg-4.png'

  return (
    <div className="content4-bg overflow-hidden">
        <div className="container">
            <div className="con-container">
                <div className='p-3 con4-flex d-flex flex-column flex-sm-column flex-md-column flex-lg-row'>
                    <div className="con4-left1">

                        <div className="img-left">
                            <img className='w-100' src={myKid} alt="" />
                        </div>

                    </div>
                    <div className="con4-right text-white align-self-lg-center text-center text-sm-center text-md-center text-lg-start p-4">
                        <h1 className='fs-1 mb-4 fw-bolder'>Create profiles for kids.</h1>
                        <p className='fs-3'>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Content4