import React, { useState, useEffect } from 'react';
import './clock.css';

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const [speed, setSpeed] = useState(1);
  const [sharedURL, setSharedURL] = useState('');

  // Initialize time and speed from URL parameters on component mount
  useEffect(() => {
    const initializeFromURLParams = () => {
      const params = new URLSearchParams(window.location.search);
      const initialTime = params.get('time') ? new Date(parseInt(params.get('time'))) : new Date();
      const initialSpeed = params.get('speed') ? parseInt(params.get('speed')) : 1;

      if (isNaN(initialTime.getTime())) {
        alert('Invalid time parameter');
        return;
      }

      if (isNaN(initialSpeed) || initialSpeed < 1 || initialSpeed > 10) {
        alert('Invalid speed parameter');
        return;
      }

      setTime(initialTime);
      setSpeed(initialSpeed);
    };

    initializeFromURLParams();
  }, []);

  // Update time based on speed every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => new Date(prevTime.getTime() - 1000 * speed));
    }, 1000);

    return () => clearInterval(timer);
  }, [speed]);

  // Handle slider change
  const handleSliderChange = event => {
    setSpeed(parseInt(event.target.value));
  };

  // Handle share button click
  const handleShareButtonClick = () => {
    try {
      const baseUrl = process.env.REACT_APP_BASE_URL || `${window.location.protocol}//${window.location.host}`;
      const url = new URL(`${baseUrl}/clockScreen/?time=${time.getTime()}&speed=${speed}`);
      console.log("Generated URL: ", url.toString());

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url.toString())
          .then(() => {
            alert('URL copied to clipboard!');
          })
          .catch(err => {
            console.error('Failed to copy URL: ', err);
            alert('Failed to copy URL: ' + err);
          });
      } else {
        alert('Clipboard API not supported. Please copy the URL manually.');
        setSharedURL(url.toString());
      }
    } catch (error) {
      console.error('Failed to construct URL: ', error);
      alert('Failed to construct URL: ' + error.message);
    }
  };

  // Calculate rotation for clock hands
  const calculateRotation = (unit, maxUnit) => {
    return (1 - unit / maxUnit) * 360;
  };

  return (
    <div style={{ backgroundColor: 'white', textAlign: 'center', padding: '20px' }} className='clock-container'>
      <div className="clock">
        <div className="hand hour" style={{ transform: `rotate(-${calculateRotation(time.getHours() % 12, 12)}deg) scale(0.6)` }}></div>
        <div className="hand minute" style={{ transform: `rotate(-${calculateRotation(time.getMinutes(), 60)}deg) scale(0.8)` }}></div>
        <div className="hand second" style={{ transform: `rotate(-${calculateRotation(time.getSeconds(), 60)}deg)` }}></div>
        <div className="number number1">1</div>
        <div className="number number2">2</div>
        <div className="number number3">3</div>
        <div className="number number4">4</div>
        <div className="number number5">5</div>
        <div className="number number6">6</div>
        <div className="number number7">7</div>
        <div className="number number8">8</div>
        <div className="number number9">9</div>
        <div className="number number10">10</div>
        <div className="number number11">11</div>
        <div className="number number12">12</div>
      </div>
      <div style={{ margin: '20px' }}>
        <input
          type="range"
          min="1"
          max="10"
          value={speed}
          onChange={handleSliderChange}
          style={{ width: '300px', background: 'white', color: '#FE8C00' }}
        />
      </div>
      <button
        onClick={handleShareButtonClick}
        style={{
          backgroundColor: '#FE8C00',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          fontSize: '1em',
          cursor: 'pointer',
          borderRadius: '10px',
        }}
      >
        Share
      </button>
      {sharedURL && (
        <div style={{ marginTop: '20px', wordWrap: 'break-word' }}>
          <a href={sharedURL}>{sharedURL}</a>
        </div>
      )}
    </div>
  );
};

export default Clock;
