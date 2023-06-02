import '../CSS/landing.css';
import { Link } from 'react-router-dom';

import sendEmailImage from '../assets/landing/emailSend.svg';
import facebookImage from '../assets/landing/facebook.svg';
import twitterImage from '../assets/landing/twitter.svg';
import youtubeImage from '../assets/landing/youtube.svg';
import copyRightImage from '../assets/landing/copyRight.svg';

const Footer = () => {
  return (
    <div className='footer_container'>
      <div className='footer_newsletter'>
        <p>Newsletter</p>
        <div className='footer_input'>
          <input type='email' placeholder='Your email' />
          <div className='inputImage_setting'>
            <img src={sendEmailImage} />
          </div>
        </div>
      </div>
      <div className='footer_main'>
        <div className='footerMain_main'>
          <p>Home</p>
          <p>Experience</p>
          <p>News</p>
          <Link to="/profile"><p>About us</p></Link>
          <p>Jobs</p>
          <Link to="/contactus"><p>Contact</p></Link>
        </div>
        <div className='footerMain_link'>
          <img src={facebookImage}/>
          <img src={twitterImage}/>
          <img src={youtubeImage}/>
        </div>
        <div className='footerMain_copyRight'>
          <img src={copyRightImage} />
          <p>altcoinpicker 2023 all rights reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;