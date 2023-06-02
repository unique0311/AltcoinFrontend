import '../CSS/component.css';

import phoneImage from '../assets/landing/phone.svg';
import messageImage from '../assets/landing/message.svg';
import locationImage from '../assets/landing/location.svg';
import twitterRImage from '../assets/landing/twitterRound.svg';
import instagramRImage from '../assets/landing/instagramRound.svg';
import discordRImage from '../assets/landing/discordRound.svg'; 

const ContactUs = () => {
  return (
    <div className="contactus_container">
      <p className="contactus_title">Contact Us</p>
      <div className="contactus_main">
        <div className="contact_info">
          <h4>Contact Information</h4>
          <h5>Say something to start a live chat!</h5>
          <div className="contact_info_detail">
            <img src={phoneImage}/>
            <p>+1 012 3456 789</p>
          </div>
          <div className="contact_info_detail">
            <img src={messageImage}/>
            <p>demo@gmail.com</p>
          </div>
          <div className="contact_info_detail">
            <img src={locationImage}/>
            <p>132 Dartmouth Street Boston, Massachusetts 02156 United States</p>
          </div>
          <div className="contact_info_link">
            <img src={twitterRImage}/>
            <img src={instagramRImage}/>
            <img src={discordRImage}/>
          </div>
          <div className='contactInfo_styleOne' />
          <div className='contactInfo_styleTwo' />
        </div>
        <div className="contact_input">
          <div className="contactInput_name">
            <div className="contactInput_select">
              <p>First Name</p>
              <input type="text" placeholder="I"/>
            </div>
            <div className="contactInput_select">
              <p>Last Name</p>
              <input type="text" placeholder="Dane"/>
            </div>
          </div>
          <div className="contactInput_name">
            <div className="contactInput_select">
              <p>Email</p>
              <input type="text" placeholder="joedane123@gmail.com"/>
            </div>
            <div className="contactInput_select">
              <p>Last Name</p>
              <input type="text" placeholder="+1 012 3456 789"/>
            </div>
          </div>
          <div className="contactInput_subject">
            <p className='selectSubject_contact'>Select Subject?</p>
            <div className="subjectSelect">
              <label className='subjctSelect_radio' >
                <input type='radio' checked name='radio'/>
                <p>General Inquiry</p>
              </label>
              <label className='subjctSelect_radio' >
                <input type='radio' checked name='radio'/>
                <p>General Inquiry</p>
              </label>
              <label className='subjctSelect_radio' >
                <input type='radio' checked name='radio'/>
                <p>General Inquiry</p>
              </label>
              <label className='subjctSelect_radio' >
                <input type='radio' checked name='radio'/>
                <p>General Inquiry</p>
              </label>
            </div>
          </div>
          <div className="contactInput_message">
            <p>Message</p>
            <input type="text" placeholder="Write your message..." />
          </div>
          <button className="sendMessage_button">Send Message</button>
        </div>
      </div>
    </div>
  )
}

export default ContactUs;