// summarizing the income and expense totals 
import React from 'react';
// component to display budget summary (income vs expenses)
const BudgetOverview = () => {
    const totalIncome = 1000;// hardcoded for now 
    const totalExpenses = 500; // hardcoded for now
    const savings = totalIncome - totalExpenses;

    return (
        <div className="budget-overview">
            <h2>Budget Overview</h2>
            <p>Total Income: ${totalIncome}</p>
            <p>Total Expenses: ${totalExpenses}</p>
            <p>Savings: ${savings}</p>

        </div>
    );
};

export default BudgetOverview;

