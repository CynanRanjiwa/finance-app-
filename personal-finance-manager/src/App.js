// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';
import IncomeForm from './components/ExpenseForm';
import BudgetOverview from './components/BudgetOverview';
import FinanceChart from './components/FinanceChart';

// main app component to render all other components 
const App = () => {
  //state to track list of incomes ad expenses 
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);

  // add new income 
  const addIncome = (source, amount) => {
    setIncomes([...incomes, {source, amount}]);
  };
  // add new expenses 
  const addExpense = (category, amount) => {
    setExpenses([...expenses, {category, amount}]);
  };

  // render the app with all components 
  return (
    <div className="App">
      <Header />
      <div className="form-container">
        <IncomeForm addIncome={addIncome} />
        <ExpenseForm addExpense={addExpense} />
      </div>
      <BudgetOverview incomes={incomes} expenses={expenses} />
      <FinanceChart incomes={incomes} expenses={expenses} />
    </div>
  )
}

export default App;