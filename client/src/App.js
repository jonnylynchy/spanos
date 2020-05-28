import React, { useEffect, useState } from 'react';

function App() {

  const [timerMessage, setTimerMessage] = useState('');

  useEffect(() => {
    // fetch('/api/timers', response => response)
    // .then(response => response.json())
    // .then(response => console.log(response));
    if(window && window.io) {
      const socket = window.io();
      socket.on('timer', (msg) => {
        setTimerMessage(msg);
      });
    }

  }, []);

  return (
    <div>Timer from server: {timerMessage}</div>
  );
}

export default App;
