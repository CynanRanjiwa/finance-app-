import React, { useState } from 'react';

// Component to set financial goals
const GoalSetting = () => {
  const [goal, setGoal] = useState(0);
  const [currentSavings, setCurrentSavings] = useState(0);

  const handleGoalSubmit = (e) => {
    e.preventDefault();
    alert(`Goal set to: $${goal}`);
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
    </form>
  );
};

export default GoalSetting;
