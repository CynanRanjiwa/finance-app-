import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';
import IncomeForm from './components/IncomeForm';
import BudgetOverview from './components/BudgetOverview';
import FinanceChart from './components/Chart';
import GoalSetting from './components/GoalSetting';

const App = () => {
  const [incomes, setIncomes] = useState(() => {
    // Get initial value from localStorage
    const savedIncomes = localStorage.getItem('incomes');
    return savedIncomes ? JSON.parse(savedIncomes) : [];
  });

  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem('expenses');
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  // Persist incomes and expenses in localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('incomes', JSON.stringify(incomes));
  }, [incomes]);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  // Add new income
  const addIncome = (source, amount) => {
    setIncomes([...incomes, { source, amount }]);
  };

  // Add new expense
  const addExpense = (category, amount) => {
    setExpenses([...expenses, { category, amount }]);
  };

  return (
    <div className="App">
      <Header />
      <div className="form-container">
        <IncomeForm addIncome={addIncome} />
        <ExpenseForm addExpense={addExpense} />
      </div>
      <BudgetOverview incomes={incomes} expenses={expenses} />
      <FinanceChart incomes={incomes} expenses={expenses} />
      <GoalSetting />
    </div>
  );
};

export default App;
