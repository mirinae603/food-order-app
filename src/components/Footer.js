import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>

            <InstagramIcon></InstagramIcon>
            <TwitterIcon></TwitterIcon>
            <FacebookIcon></FacebookIcon>
            <LinkedInIcon></LinkedInIcon>
            
        </div>
        <p>
                &copy; 2021 IndianFood.com
        </p>
    </div>
  )
}

export default Footer