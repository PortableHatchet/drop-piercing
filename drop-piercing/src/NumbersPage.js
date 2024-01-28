import React, { useState, useEffect } from 'react';
import './NumbersPage.css'



const NumbersPage = () => {
  const initialCounters = JSON.parse(localStorage.getItem('countersData')) || {
    web: 0,
    referral: 0,
    advertisement: 0,
  };
  const [counters, setCounters] = useState(initialCounters);

  // Function to update the counter for a specific type
  const updateCounter = (type) => {
    setCounters((prevCounters) => ({
      ...prevCounters,
      [type]: prevCounters[type] + 1,
    }));
  };

  // Save counters to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('countersData', JSON.stringify(counters));
  }, [counters]);

  // Retrieve counters from local storage on component mount
  useEffect(() => {
    const storedCounters = JSON.parse(localStorage.getItem('countersData'));
    console.log('Retrieved counters from local storage:', storedCounters);

    if (storedCounters) {
      setCounters(storedCounters);
    }
  }, []); // Empty dependency array to run only once on mount

  return (
    <div className="counter-container">
      <div className="counter">
        <p>Web Counter: {counters.web}</p>
        <button onClick={() => updateCounter('web')}>+ 1</button>
      </div>
      <div className="counter">
        <p>Referral Counter: {counters.referral}</p>
        <button onClick={() => updateCounter('referral')}>+ 1</button>
      </div>
      <div className="counter">
        <p>Advertisement Counter: {counters.advertisement}</p>
        <button onClick={() => updateCounter('advertisement')}>+ 1</button>
      </div>
    </div>

  );
};

export default NumbersPage;
