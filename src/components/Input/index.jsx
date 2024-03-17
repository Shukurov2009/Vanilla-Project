import React from 'react'
import "./contact.css"

export const Input = () => {
  return (
    <>
    <section>
        <div className="container">
            <div className="contact-inner">
                <h2 className="contact-big-text">
                Have Question in Mind? Let us help you
                </h2>
                <div className="input-box">
                  <input type="text" className="input" placeholder='Your phone number'/>
                  <input type="text" className="input" placeholder='Question type'/>
                </div>
                <div className="input-box">
                  <input type="text" className="box-input" placeholder='Enter your question'/>
                  <button className="inp-btn">Send</button>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
