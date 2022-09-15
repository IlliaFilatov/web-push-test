import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [pushData, setPushData] = useState('')

  const subscribe = async () => {
    console.log('subscribe initialize')
    let sw = await navigator.serviceWorker.ready;
    let push = await sw.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: 'BKo4RGC0FmI2xzrIQaJYhp_TQw-v8p7mDAAJfuoJt7B8QO-L4v9-e6-aI-gYNFfAG7jhlJvqRNRlT6hT8elkjB8'
    })
    setPushData(JSON.stringify(push))
    console.log('[subscribe result]: ', JSON.stringify(push))
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
         <br />
         <span>PUSH DATA: </span>
         <span>
          {pushData}
         </span>
         <br />
        <button onClick={subscribe}>subscribe v 4.4</button>
      </header>
    </div>
  );
}

export default App;
