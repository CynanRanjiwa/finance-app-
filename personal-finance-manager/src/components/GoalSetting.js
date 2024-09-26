import React, { useEffect, useState } from 'react';

const GoalSetting = ({ goal, setGoal, currentSavings, setCurrentSavings }) => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (currentSavings >= goal && goal > 0) {
      setMessage('🎉 Congratulations! You have reached your goal!');
    } else if (currentSavings >= goal * 0.9) {
      setMessage('You are close to reaching your goal!');
    } else {
      setMessage('');
    }
  }, [goal, currentSavings]);

  return (
    <div className="goal-setting">
      <h2>Set Financial Goal</h2>
      <input type="number" value={goal} onChange={(e) => setGoal(Number(e.target.value))} placeholder="Goal Amount" />
      <input type="number" value={currentSavings} onChange={(e) => setCurrentSavings(Number(e.target.value))} placeholder="Current Savings" />
      <p>{message}</p>
    </div>
  );
};

export default GoalSetting;
