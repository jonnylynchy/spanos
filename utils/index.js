const randomToken = require('random-token');

const initTimer = (io, time) => {
    // set up time from posted time
    let timeLength = parseInt(time);
    let timerKey = randomToken(16);
    // set a timeout to run every second
    const timeInterval = setInterval(() => {
        // stringify time left
        if(timeLength >= 0) {
            io.emit(timerKey, timeLength--);
        } else {
            io.emit(timerKey, 'Time is up!');
            clearInterval(timeInterval);
        }
    }, 1000);

    return timerKey;
};

module.exports = { initTimer };