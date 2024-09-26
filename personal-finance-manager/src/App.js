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
    const savedIncomes = localStorage.getItem('incomes');
    return savedIncomes ? JSON.parse(savedIncomes) : [];
  });

  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem('expenses');
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  const [goal, setGoal] = useState(() => {
    const savedGoal = localStorage.getItem('goal');
    return savedGoal ? JSON.parse(savedGoal) : 0;
  });

  const [currentSavings, setCurrentSavings] = useState(0);

  // Store in localStorage when data changes
  useEffect(() => {
    localStorage.setItem('incomes', JSON.stringify(incomes));
    localStorage.setItem('expenses', JSON.stringify(expenses));
    localStorage.setItem('goal', goal);
  }, [incomes, expenses, goal]);

  // Add income and expense handling
  const addIncome = (source, amount) => {
    setIncomes([...incomes, { source, amount }]);
  };

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
      <GoalSetting goal={goal} setGoal={setGoal} currentSavings={currentSavings} setCurrentSavings={setCurrentSavings} />
    </div>
  );
};

export default App;
