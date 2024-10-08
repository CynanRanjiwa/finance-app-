import React, { useRef, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ChartComponent = ({ incomes, expenses }) => {
  const chartRef = useRef(null);

  // useEffect example: logging chart data updates
  useEffect(() => {
    console.log("Chart data updated:", incomes, expenses);
  }, [incomes, expenses]);

  const totalIncome = incomes.reduce((acc, income) => acc + income.amount, 0);
  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  const data = {
    labels: ['Income', 'Expenses'],
    datasets: [
      {
        label: 'Amount',
        data: [totalIncome, totalExpenses],
        backgroundColor: ['#61dafb', '#ff6384'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Income vs. Expenses',
      },
    },
  };

  return (
    <div>
      <h2>Income vs. Expenses</h2>
      <Bar ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default ChartComponent;
