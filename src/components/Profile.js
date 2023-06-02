import '../CSS/component.css';
import { Link } from 'react-router-dom';

import backImage from '../assets/landing/back.svg';
import manImage from '../assets/landing/man.svg';
import phoneSImage from '../assets/landing/phoneSmall.svg';
import emailSImage from '../assets/landing/emailSmall.svg';
import calendarSImage from '../assets/landing/calendarSmall.svg';
import walletSImage from '../assets/landing/walletSmall.svg';

const Profile = () => {
  return (
    <div className='profile_container'>
      <Link to="/" className='profile_back'>
        <img src={backImage}/>
        <p>Back</p>
      </Link>
      <div className='profile_infomation'>
        <div className='profileInfo_left'>
          <h5>Customer Infomation</h5>
          <div className='profileInfo_detail'>
            <img src={manImage}/>
            <p>Adam Smith</p>
          </div>
          <div className='profileInfo_detail'>
            <img src={phoneSImage}/>
            <p>+1 365-8833-874</p>
          </div>
          <div className='profileInfo_detail'>
            <img src={emailSImage}/>
            <p>adamsmith@gmail.com</p>
          </div>
          <div className='profileInfo_detail'>
            <img src={calendarSImage}/>
            <p>Joined On 24 April, 2023</p>
          </div>
          <h5>Membership Details</h5>
          <div className='profileInfo_detail'>
            <img src={walletSImage}/>
            <p>$39.55 / Month</p>
          </div>
          <div className='profileInfo_detail'>
            <img src={manImage}/>
            <p>Qwert#4123</p>
          </div>
          <div className='profileInfo_detail'>
            <img src={calendarSImage}/>
            <p>Joined On 24 April, 2023</p>
          </div>
          <h5>Payment History</h5>
          <div className='paymentHistory_detail'>
            <p>$35.99</p>
            <p>24 April, 2023 13:07:46</p>
          </div>
          <div className='paymentHistory_detail'>
            <p>$35.99</p>
            <p>24 April, 2023 13:07:46</p>
          </div>
        </div>
        <div className='profileInfo_right'>
          <h5>Quick Actions</h5>
          <div className='profileInfo_detail'>
            <img src={manImage}/>
            <p>Joined On 24 April, 2023</p>
          </div>
          <div className='profileInfo_detail'>
            <img src={manImage}/>
            <p>Joined On 24 April, 2023</p>
          </div>
          <div className='profileInfo_detail'>
            <img src={manImage}/>
            <p>Joined On 24 April, 2023</p>
          </div>
          <div className='profileInfo_detail'>
            <img src={manImage}/>
            <p>Joined On 24 April, 2023</p>
          </div>
          <div className='profileInfo_detail'>
            <img src={manImage}/>
            <p>Joined On 24 April, 2023</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;