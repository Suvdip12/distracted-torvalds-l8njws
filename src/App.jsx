import React from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import Mein from './Components/Main/Mein';
import './index.css'


const App = () => {
  return (
    <div className='app'>
      <Sidebar/>
      <Mein/>
    </div>
  );
};


export default App;
