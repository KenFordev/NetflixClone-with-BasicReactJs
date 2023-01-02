import React, { useState } from 'react'
import './accordion.css'
import { data } from './DATA/Data'

function Accordion() {

    const [accordion, setAccordion] = useState(-1);

    const toggleAccordion = (index) => {
        if(index === accordion) {
            setAccordion(-1)
            return
        }
        setAccordion(index)
    }

  return (
    <div className="acc-bg overflow-hidden">
        <div className="container">
            <div className="acc-con mt-5 d-flex flex-column align-items-center mb-5">
                <div className="head-con text-white text-center p-4">
                    <h2>Frequently Asked Questions</h2>
                </div>
                    {
                        data.map((item, index) => (
                            <div className="acc-content d-flex flex-column align-items-center" key={index}>
                                <div onClick={() => toggleAccordion(index)} className="acc-con-item w-100 mt-2 text-white text-center mb-1 d-flex justify-content-between px-4 py-3 align-items-center" >
                                    <h1 className={accordion === index ? "avtive":""}>{item.head}</h1>
                                    <div>
                                        {accordion === index ? (
                                            <>
                                                <span className='fs-1 fw-normal'>-</span>
                                            </>
                                        ):(
                                            <>
                                                <span className='fs-1 fw-normal'>+</span>
                                            </>
                                        )}
                                        
                                    </div>
                                </div>
                                <div className='acc-subtitle'>
                                    <p className={accordion === index ? "active":"inactive"}>{item.title}</p>
                                </div>
                            </div>
                            
                        ))
                    }
            </div>
        </div>
    </div>
  )
}

export default Accordion