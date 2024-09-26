import React, { useState } from 'react';

// Form to handle expense inputs
const ExpenseForm = () => {
  const [expense, setExpense] = useState(0);
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Log the expense data (Later, this would be stored in state or sent to backend)
    console.log(`Expense: ${expense}, Category: ${category}`);
    setExpense(0);
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Track Expenses</h2>
      <label>
        Category:
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </label>
      <label>
        Amount:
        <input
          type="number"
          value={expense}
          onChange={(e) => setExpense(Number(e.target.value))}
          required
        />
      </label>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
