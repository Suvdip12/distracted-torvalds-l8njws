import React, { useContext } from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/context';

const Sidebar = () => {
  const { onSent, prevPrompt, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div className="sidebar">
      <div className="top">
        <img className="menu" src={assets.menu_icon} alt="Menu Icon" />
        <div onClick={newChat} className="new-chat">
          <img src={assets.plus_icon} alt="New Chat Icon" />
          <p className="extended-only">New chat</p>
        </div>

        <div className="recent">
          <p className="recent-title extended-only">Recent</p>
          {prevPrompt.map((item, index) => (
            <div
              key={index}
              onClick={() => loadPrompt(item)}
              className="recent-entry"
            >
              <img src={assets.message_icon} alt="Prompt Icon" />
              <p className="extended-only">{item.slice(0, 18)}...</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="Help" />
          <p className="extended-only">Help</p>
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="Activity" />
          <p className="extended-only">Activity</p>
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="Settings" />
          <p className="extended-only">Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
