import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function Timer() {

    const [timeLength, setTimelength] = useState();
    const [timerMessage, setTimerMessage] = useState('');
    const [timerKey, setTimerKey] = useState('');
    const handleStart = () => {
        axios.post('/api/startTimer', {
            timeLength
        }).then(response => {
            console.log('Response from server: ', response.data);
            setTimerKey(response.data.timerKey);
        });
    }

    useEffect(() => {
        if(timeLength > 0 && window && window.io) {
            const socket = window.io();
            socket.on(timerKey, (msg) => {
              setTimerMessage(msg);
            });
        }
    });

    const TimerForm = (
        <span id="form">
            <input 
                id="txtTime"
                type="number"
                step="1"
                min="0"
                max="100"
                list="defaultNumbers"
                onChange={(e) => setTimelength(e.target.value)}
                value={timeLength}
            />
            <datalist id="defaultNumbers">
                <option value="1"></option>
                <option value="5"></option>
                <option value="10"></option>
                <option value="15"></option>
                <option value="20"></option>
                <option value="25"></option>
                <option value="30"></option>               
                <option value="35"></option>
            </datalist>
            <button onClick={handleStart}>Start</button>
        </span>
    );

    return (
        <React.Fragment>
            {TimerForm}
            <div>Time Length: {timeLength}</div>
            <div>Timer from server: {timerMessage}</div>
        </React.Fragment>
    );
};