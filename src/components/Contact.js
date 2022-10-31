import React from 'react'
import '../styles/Contact.css'
import ContactImage from "../assets/photo.jpeg"
function contact() {
  return (
    <div className='contact'>
        <div className='leftSide' style={{backgroundImage: `url(${ContactImage})`}}>
                leftSide
        </div>
        <div className='rightSide'>
                <h1> Contact Us </h1>
                <form id='contact-form' method = "POST">
                    <label htmlFor='name'> Full Name </label>
                    <input name="name" type="text" placeholder='Enter your Name'></input>
                    <label htmlFor='email'> Email Address </label>
                    <input name="email" type="email" placeholder='Enter your Email'></input>
                    <label htmlFor='message'> Message </label>
                    <textarea name="message" row="7" placeholder='Enter the Message'></textarea>
                    <button type = 'submit'>
                        Send Message
                    </button>
                </form>
        </div>
    </div>
  )
}

export default contact