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

import React from 'react';
import './App.css';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';
import IncomeForm from './components/ExpenseForm';
import BudgetOverview from './components/BudgetOverview';

// main app component to render all other components 
const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="form-container">
        <IncomeForm />
        <ExpenseForm />
    </div>
    <BudgetOverview />
    </div>
  )
}

export default App;