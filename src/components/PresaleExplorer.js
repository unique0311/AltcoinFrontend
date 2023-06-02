import '../CSS/component.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import PresaleData from './PresaleData';
import underImage from '../assets/landing/under.svg';
import leftImage from '../assets/landing/left.svg';
import rightImage from '../assets/landing/right.svg';
import searchImage from '../assets/landing/search.svg';

const PresaleExplorer = () => {
  const navigate = useNavigate();

  const showDetailHandler = () => {
    navigate('/presaleExplorer/tokenID');
  }
  return (
    <div className='tokenExplorer_container'>
      <h4>Presale Explorer</h4>
      <div className='tokenExplorer_main'>
        <div className='tokenExplorer_subMain'>
          <div className='tokenMain_valuation'>
            <div className='tokenValuation_container'>
              <img src={searchImage} />
              <input type='text' placeholder='Search filter' />
            </div>
            <div className='tokenValuation_container'>
              <p>Fully Diluted Valuation</p>
              <img src={underImage} />
            </div>
            <div className='tokenValuation_container'>
              <p>Fully Diluted Valuation</p>
              <img src={underImage} />
            </div>
            <button className='presale_apply'>Apply</button>
          </div>
          <table>
            <thead>
              <tr className='tokenTitle_container'>
                <th>Project</th>
                <th>Initial&nbsp;Cap</th>
                <th>Raise</th>
                <th>Launchpad</th>
                <th>Category</th>
                <th>When</th>
              </tr>
            </thead>
            <tbody>
              {PresaleData.map(item => {
                return (
                  <tr className='tokenBody_container' onClick={() => showDetailHandler()}>
                    <td><div className='token_container'>{item.projectID} <img src={item.projectImage} /> <p>{item.projectName}</p> <h5>{item.projectSName}</h5></div></td>
                    <td><div className='token_detail'>{item.initialCap}</div></td>
                    <td><div className='token_detail'>{item.raise}</div></td>
                    <td><div className='launchpad_setting'><img src={item.launchpadImage} /> <p>{item.launchpadName}</p></div></td>
                    <td><div className='token_detail'>{item.category}</div></td>
                    <td><div className='token_detail'>{item.when}</div></td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className='pagination_container'>
          <img src={leftImage}/>
          <p>1</p>
          <p className='selected_pagenumber'>2</p>
          <p>3</p>
          <img src={rightImage} />
        </div>
    </div>
  )
}

export default PresaleExplorer;