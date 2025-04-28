
import React, { useContext } from 'react';

import { assets } from '../../assets/assets';
import './Main.css';
import { Context } from '../../context/context';

const Mein = () => {
  const { onSent, recentPrompt, showResult, loading, resultData, setInput, input, handleKeyDown } = useContext(Context)
  return (
    <div className='main'>
      <div className="nav">
        <div> <p>Gemini</p></div>

        <div> <img src={assets.user_icon} alt="" /></div>


      </div>
      <div className="main-container">
        {!showResult
          ? <>
            <div className="greet">
              <p><span>Hello,Dev</span></p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Hey there I am in love with react</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Hey there I am in love with react</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Hey there I am in love with react</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Hey there I am in love with react</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </> : <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading?
              <div className="loader">
                  <hr />
                  <hr />
                  <hr />
              </div>:<p dangerouslySetInnerHTML={{ __html: resultData }} /> }
              
            </div>

          </div>

        }

        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e) => setInput(e.target.value)} value={input}     onKeyDown={handleKeyDown} type="text" placeholder='Enter prompt here' />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input?<img onClick={() => onSent()} src={assets.send_icon} alt="" />:null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may generate inaccurate info,including  about people ,so double check its response.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Mein;
