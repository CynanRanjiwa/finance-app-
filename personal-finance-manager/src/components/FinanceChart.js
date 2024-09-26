import React from 'react';
import { Bar } from 'react-chartjs-2';

// Chart component to visualize income vs. expenses
const FinanceChart = ({ incomes, expenses }) => {
    // calculate total income and total expenses 
    const totalIncome = incomes.reduce((acc, income) => acc + income.amount, 0);
    const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  const data = {
    labels: ['Income', 'Expenses'],
    datasets: [
      {
        label: 'Amount',
        data: [1000, 500], // Replace with dynamic data later
        backgroundColor: ['#61dafb', '#ff6384'],
      },
    ],
  };

  return (
    <div>
      <h2>Income vs. Expenses</h2>
      <Bar data={data} />
    </div>
  );
};

export default FinanceChart;
