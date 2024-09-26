import React, { useState, useEffect } from 'react';

// Component to set and track financial goals
const GoalSetting = () => {
  const [goal, setGoal] = useState(0);
  const [currentSavings, setCurrentSavings] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Check if savings have reached or are close to the goal
    if (currentSavings >= goal && goal > 0) {
      setMessage('🎉 Congratulations! You have reached your goal!');
    } else if (goal > 0 && currentSavings >= goal * 0.9) {
      setMessage('You are close to reaching your goal!');
    } else {
      setMessage('');
    }
  }, [currentSavings, goal]);

  const handleGoalSubmit = (e) => {
    e.preventDefault();
    if (goal <= 0) {
      alert('Please set a valid goal amount.');
    } else {
      alert(`Goal set to: $${goal}`);
    }
  };

  return (
    <form onSubmit={handleGoalSubmit}>
      <h2>Set Financial Goal</h2>
      <label>
        Goal Amount:
        <input
          type="number"
          value={goal}
          onChange={(e) => setGoal(Number(e.target.value))}
          required
        />
      </label>
      <label>
        Current Savings:
        <input
          type="number"
          value={currentSavings}
          onChange={(e) => setCurrentSavings(Number(e.target.value))}
          required
        />
      </label>
      <button type="submit">Set Goal</button>
      <p>{message}</p>
    </form>
  );
};

export default GoalSetting;
