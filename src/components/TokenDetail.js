import '../CSS/component.css';
import FinanceMarketData from './FinanceMarketData';

import tokenImage from '../assets/landing/launchpad.svg';
import alertSImage from '../assets/landing/alertSmall.svg';
import instagramIconImage from '../assets/landing/instagramIcon.svg';
import facebookIconImage from '../assets/landing/facebookIcon.svg';
import messageIconImage from '../assets/landing/messageIcon.svg';
import phoneIconImage from '../assets/landing/phoneIcon.svg';
import statisticsImage from '../assets/landing/statistics.png';

const TokenDetail = () => {
  return (
    <div className="tokenDetail_container">
      <h4>Token Overview</h4>
      <div className="tokenDetail_first">
        <div className="tokenDetail_mainTitle">
          <div className='tokenMainTitle_up'>
            <div className='tokenMainTitle_subject'>
              <img src={tokenImage} />
              <div className='tokenSubject_detail'>
                <h5>Bored Ape Yacht Club</h5>
                <p>BAYT</p>
              </div>
            </div>
            <div className='tokenMainTitle_other'>
              <h6>IDO</h6>
              <h5>$0.074324333235</h5>
              <div className='tokenTitle_button'>
                <img src={alertSImage}/>
                <p>Add Price Alert</p>
              </div>
            </div>
          </div>
          <div className='tokenMainTitle_down'>
            <div className='tokenTitle_tags'>
              <h5>Tags (Sub-Category)</h5>
              <div className='tokenTitle_tagContainer'>
                <p>Token</p>
                <p>Token</p>
                <p>Token</p>
                <p>Token</p>
                <p>Token</p>
              </div>
              <div className='tokenTitle_tagContainer'>
                <p>Token</p>
              </div>
            </div>
            <div className='tokenTitle_price'>
              <div className='tokenTitle_lowHigh'>
                <p>Low</p>
                <p>$0.07451</p>
              </div>
              <div className='tokenTitle_graph'/>
              <div className='tokenTitle_lowHigh'>
                <p>High</p>
                <p>$0.07465</p>
              </div>
              <h5>24H</h5>
            </div>
          </div>
        </div>
        <div className='mobile_hidden_text'>About</div>
        <div className="tokenDetail_about">
          <h5>About</h5>
          <p>Arena Games is a Web 3.0 multiplayer mobile games platform connecting game developers and gamers in a simple and safe mode.</p>
          <div className='walletAndSocial'>
            <div className='tokenAbout_wallet'>
              <div className='wallet_title'>Wallets</div>
              <button>E-Wallet</button>
            </div>
            <div className='tokenAbout_social'>
              <h6>Social</h6>
              <div className='tokenAbout_socialImage'>
                <img src={instagramIconImage}/>
                <img src={facebookIconImage}/>
                <img src={messageIconImage}/>
                <img src={phoneIconImage}/>
                <img src={phoneIconImage}/>
                <img src={phoneIconImage}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mobile_hidden_text'>Statistics</div>
      <div className='tokenDetail_second'>
        <div className='tokenDetail_tokenomics'>
          <p>Tokenomics</p>
          <div className='tokenomics_detail'></div>
        </div>
        <div className='mobile_hidden_text'>Tokenomics</div>
        <div className='tokenDetail_right'>
          <div className='tokenDetail_statistics'>
            <h5>Statistics</h5>
            <div className='statistics_image'>
              <img src={statisticsImage} />
              <div className='statistic_cap'>
                <div className='marketCap_statistics'>
                  <div />
                  <p>Market Cap</p>
                </div>
                <div className='ATHMarketCap_statistics'>
                  <div />
                  <p>ATH Market Cap</p>
                </div>
              </div>
            </div>
          </div>
          <div className='tokenDetail_tradeVolume'>
            <div className='tradeVolume_container'>
              <h5>24h Trade Volume</h5>
              <div className='tradeVolume_price'>
                <p>$ 3,101,367</p>
                <h6>AT 1,367</h6>
              </div>
            </div>
            <div className='tradeVolume_container'>
              <h5>24h Trade Volume</h5>
              <div className='tradeVolume_price'>
                <p>$ 3,101,367</p>
                <h6>AT 1,367</h6>
              </div>
            </div>
            <div className='tradeVolume_container'>
              <h5>24h Trade Volume</h5>
              <div className='tradeVolume_price'>
                <p>$ 3,101,367</p>
                <h6>AT 1,367</h6>
              </div>
            </div>
            <div className='tradeVolume_container'>
              <h5>24h Trade Volume</h5>
              <div className='tradeVolume_price'>
                <p>$ 3,101,367</p>
                <h6>AT 1,367</h6>
              </div>
            </div>
            <div className='tradeVolume_container'>
              <h5>24h Trade Volume</h5>
              <div className='tradeVolume_price'>
                <p>$ 3,101,367</p>
                <h6>AT 1,367</h6>
              </div>
            </div>
            <div className='tradeVolume_container'>
              <h5>24h Trade Volume</h5>
              <div className='tradeVolume_price'>
                <p>$ 3,101,367</p>
                <h6>AT 1,367</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='financeMarket_title_mobile'>
          <p>BAYT Finance Markets</p>
          <div className='financeTitle_button'>
            <div className='button_spot'>Spot</div>
            <div className='button_futures'>Futures</div>
          </div>
        </div>
      <div className='tokenDetail_third'>
        <div className='financeMarket_title'>
          <p>BAYT Finance Markets</p>
          <div className='financeTitle_button'>
            <div className='button_spot'>Spot</div>
            <div className='button_futures'>Futures</div>
          </div>
        </div>
        <table className='financeMarket_table'>
          <thead>
            <tr className='tokenTitle_container'>
              <th>Exchange</th>
              <th>Pair</th>
              <th>Last&nbsp;Price</th>
              <th>Change</th>
              <th>High(24H)</th>
              <th>Spread</th>
              <th>Volume</th>
            </tr>
          </thead>
          <tbody>
            {FinanceMarketData.map(item => {
              return (
                <tr className='tokenBody_container'>
                  <td><div className='token_containers'><img src={item.exchangeImage} /> <p>{item.exchangeName}</p></div></td>
                  <td><div className='token_detail'>{item.pair}</div></td>
                  <td><div className='token_detail'>{item.lastPrice}</div></td>
                  <td><div className='token_detail'>{item.change}</div></td>
                  <td><div className='token_detail'>{item.highDay}</div></td>
                  <td><div className='token_detail'>{item.spread}</div></td>
                  <td><div className='token_detail'>{item.volume}</div></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TokenDetail;