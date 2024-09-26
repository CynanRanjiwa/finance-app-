import React, { useState } from 'react';

const ExpenseForm = ({ addExpense }) => {
  const [expense, setExpense] = useState(0);
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense(category, expense);
    setExpense(0);
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Track Expenses</h2>
      <label>Category:</label>
      <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
      <label>Amount:</label>
      <input type="number" value={expense} onChange={(e) => setExpense(Number(e.target.value))} required />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
