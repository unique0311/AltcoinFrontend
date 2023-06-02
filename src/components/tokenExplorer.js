import '../CSS/component.css';
import React from 'react';
import TokenData from './TokenData';
import underImage from '../assets/landing/under.svg';
import leftImage from '../assets/landing/left.svg';
import rightImage from '../assets/landing/right.svg';

const TokenExplorer = () => {
  return (
    <div className='tokenExplorer_container'>
      <h4>Token Explorer</h4>
      <div className='tokenExplorer_main'>
        <div className='tokenExplorer_subMain'>
          <div className='tokenMain_valuation'>
            <div className='tokenValuation_container'>
              <p>Fully Diluted Valuation</p>
              <img src={underImage} />
            </div>
            <div className='tokenValuation_container'>
              <p>Fully Diluted Valuation</p>
              <img src={underImage} />
            </div>
            <div className='tokenValuation_container'>
              <p>Fully Diluted Valuation</p>
              <img src={underImage} />
            </div>
            <div className='tokenValuation_container'>
              <p>Fully Diluted Valuation</p>
              <img src={underImage} />
            </div>
          </div>
          <div className='tokenQuery_button'>
            <button style={{background: 'linear-gradient(98.07deg, #4D31BB 1.87%, rgba(203, 45, 242, 0.93) 95.69%)'}}>Save Query</button>
            <button style={{background: 'linear-gradient(118.42deg, #D9D9D9 -1.57%, #8379F3 -1.56%, #F987E7 98.75%)'}}>Run Query</button>
          </div>
          <table>
            <thead>
              <tr className='tokenTitle_container'>
                <th>Token</th>
                <th>Address</th>
                <th>Coin&nbsp;Age</th>
                <th>Market&nbsp;Cap</th>
                <th>Fully&nbsp;Diluted&nbsp;Valuation</th>
                <th>Holders</th>
                <th>Buyers</th>
                <th>Exp&nbsp;Buyers</th>
                <th>Liquidity</th>
              </tr>
            </thead>
            <tbody>
              {TokenData.map(item => {
                return (
                  <tr className='tokenBody_container'>
                  <td><div className='token_container'>{item.tokenID} <img src={item.tokenImage} /> <p>{item.tokenName}</p></div></td>
                  <td><div className='token_detail'>{item.address}</div></td>
                  <td><div className='token_detail'>{item.coinAge}</div></td>
                  <td><div className='token_detail'>{item.marketCap}</div></td>
                  <td><div className='token_detail'>{item.fullyDilutedValuation}</div></td>
                  <td><div className='token_detail'>{item.holders}</div></td>
                  <td><div className='token_detail'>{item.buyers}</div></td>
                  <td><div className='token_detail'>{item.expBuyers}</div></td>
                  <td><div className='liquidity_container'><img src={item.liquidityGraph} /> <p>{item.liquidityPrice}</p></div></td>
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

export default TokenExplorer;