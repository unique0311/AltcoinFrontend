import '../CSS/landing.css';

import FeatureTile from '../components/FeatureTile';

import binanceImage from '../assets/landing/binance.png';
import verifyImage from '../assets/landing/verified.png';
import shinningImage from '../assets/landing/shinning.svg';
import defiImage from '../assets/landing/defi.png';
import searchFilterImage from '../assets/landing/searchFilter.svg';
import altcoinListingImage from '../assets/landing/altcoinListing.svg';
import priceChartImage from '../assets/landing/priceChart.svg';
import marketAnalysisImage from '../assets/landing/marketAnalysis.svg';
import searchImage from '../assets/landing/search.svg';
import jamesAdamImage from '../assets/landing/jamesAdam.svg';
import greenStarImage from '../assets/landing/greenStar.svg';

const Main = () => {
  return(
    <div className='landing_container'>
      <div className='navbar_search_main'>
        <img src={searchImage} />
        <input type='text' placeholder='Search for Tokens'/>
      </div>
      <div className="main_container">
        <div className='mainText_detail'>
          <h5>Discover The World of <span style={{color: '#8379F3'}} >Tokens</span></h5>
          <p>Welcome We Are Platform Designed To Empower You With Unparalleled Insights Into The World Of Blockchain Tokens</p>
          <div className='mainText_button'>
            <button className='searchTokens_button'>Search&nbsp;Tokens</button>
            <button className='explore_button'>Explore</button>
          </div>
        </div>
        <div>
          <div className='mainView_detail'>
            <div className='mainView_firstTile' />
            <div className='mainView_buyNow'>
              <h5>BUY&nbsp;NOW!</h5>
              <p>Latest&nbsp;Coins</p>
            </div>
            <div className='mainView_SecondTile' />
            <div className='mainView_image' />
            <div className='mainView_binance'>
              <img src={binanceImage} className='binaceImage_setting'/>
              <img src={verifyImage} className='verifyImage_setting'/>
              <div className='mainView_binanceTitle'>
                <h5>BINANCE#321</h5>
                <p>Exchange</p>
              </div>
            </div>
            <div className='mainView_altcoin'>
              <div className='altcoin_title'>
                <h5>ALTCOIN</h5>
                <p>Latest&nbsp;Coin</p>
              </div>
              <div className='altcoin_price'>
                <h5>$28758.11</h5>
                <p>+1.45%</p>
              </div>
            </div>
            <div className='mainView_release'>
              <h5>Release</h5>
              <p>Time</p>
            </div>
            <div className='mainView_timer'>
              <div className='timer_hours'>
                <h5>17</h5>
                <p>Hours</p>
              </div>
              <h4>:</h4>
              <div className='timer_hours'>
                <h5>56</h5>
                <p>Minutes</p>
              </div>
              <h4>:</h4>
              <div className='timer_hours'>
                <h5>03</h5>
                <p>Seconds</p>
              </div>
            </div>
            <div className='mainView_shinning'>
              <img src={shinningImage} />
            </div>
          </div>
        </div>
        <div className='mainText_detail_mobile'>
          <h5>Discover The World of <span style={{color: '#8379F3'}} >Tokens</span></h5>
          <p>Welcome We Are Platform Designed To Empower You With Unparalleled Insights Into The World Of Blockchain Tokens</p>
          <div className='mainText_button'>
            <button className='searchTokens_button'>Search&nbsp;Tokens</button>
            <button className='explore_button'>Explore</button>
          </div>
        </div>
      </div>
      <div className='main_defiImage'>
        <img src={defiImage} />
      </div>
      <div className='main_reviews'>
        <p>Reviews</p>
        <div className='mainReviews_tile'>
          <div className='reviewTile_container'>
            <img src={jamesAdamImage}/>
            <div>
              <h5>James Adam</h5>
              <h6>South Carolina</h6>
            </div>
          </div>
          <div className='reviewTile_text'>This game-changing site has revolutionized how I discover altcoins, making it effortless to uncover hidden games and significantly boost my investment portfolio.</div>
          <div className='reviewTile_cross'/>
          <div className='reviewTile_trustContainer'>
            <div>
              <h6>review on</h6>
              <h5>Trustpilot</h5>
            </div>
            <div className='trustPilot_star'>
              <img src={greenStarImage} />
              <img src={greenStarImage} />
              <img src={greenStarImage} />
              <img src={greenStarImage} />
              <img src={greenStarImage} />
            </div>
          </div>
        </div>

        <div className='mainReviews_tile'>
          <div className='reviewTile_container'>
            <img src={jamesAdamImage}/>
            <div>
              <h5>James Adam</h5>
              <h6>South Carolina</h6>
            </div>
          </div>
          <div className='reviewTile_text'>This game-changing site has revolutionized how I discover altcoins, making it effortless to uncover hidden games and significantly boost my investment portfolio.</div>
          <div className='reviewTile_cross'/>
          <div className='reviewTile_trustContainer'>
            <div>
              <h6>review on</h6>
              <h5>Trustpilot</h5>
            </div>
            <div className='trustPilot_star'>
              <img src={greenStarImage} />
              <img src={greenStarImage} />
              <img src={greenStarImage} />
              <img src={greenStarImage} />
              <img src={greenStarImage} />
            </div>
          </div>
        </div>

        <div className='mainReviews_tile'>
          <div className='reviewTile_container'>
            <img src={jamesAdamImage}/>
            <div>
              <h5>James Adam</h5>
              <h6>South Carolina</h6>
            </div>
          </div>
          <div className='reviewTile_text'>This game-changing site has revolutionized how I discover altcoins, making it effortless to uncover hidden games and significantly boost my investment portfolio.</div>
          <div className='reviewTile_cross'/>
          <div className='reviewTile_trustContainer'>
            <div>
              <h6>review on</h6>
              <h5>Trustpilot</h5>
            </div>
            <div className='trustPilot_star'>
              <img src={greenStarImage} />
              <img src={greenStarImage} />
              <img src={greenStarImage} />
              <img src={greenStarImage} />
              <img src={greenStarImage} />
            </div>
          </div>
        </div>
      </div>
      <div className='main_features'>
        <div className='mainFeatures_title'>
          <h5>Top Features For Ease Of Use</h5>
          <p>Effortlessly explore, analyze, and track Altcoins with our user-friendly platform. Discover new opportunities with intutive search and filtering options, stay informed with market insights and interative charts, and connect with a vibrant community. Start your altcoin journey today</p>
          <button>Sign up</button>
        </div>
        <div className='mainFeatures_tile'>
          <div className='mainFeatures_tileOne'>
            <FeatureTile featureImage={searchFilterImage} featureTitle="Search and Filtering" featureDetail="enables user to find specific altcoins by entering keywords and applying advanced filters" />
            <FeatureTile featureImage={altcoinListingImage} featureTitle="Altcoin listing" featureDetail="provides users with comprehensive listings of various cryptocurrencies" />
          </div>
          <div className='mainFeatures_tileOne'>
            <FeatureTile featureImage={priceChartImage} featureTitle="Price Chart" featureDetail="enables user to find specific altcoins by entering keywords and applying advanced filters" />
            <FeatureTile featureImage={marketAnalysisImage} featureTitle="Market Analysis" featureDetail="enables user to find specific altcoins by entering keywords and applying advanced filters" />
          </div>
        </div>
      </div>  
      <div className='main_waitingFor'>
        <h5>What Are You Waiting For ?</h5>
        <p>
          Effortlessly explore, analyze, and track Altcoins with our user-friendly platform. Discover new opportunities with intutive search and filtering options, stay informed with market insights and interative charts, and connect with a vibrant community. Start your altcoin journey today
        </p>
        <button>Join Now</button>
      </div>
    </div>
  )
}

export default Main;