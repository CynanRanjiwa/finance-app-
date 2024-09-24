// creating the form for income tracking 
import React, { useState } from 'react';

// form to handle income inputs 
const IncomeForm = () => {
    const [income, setIncome] = useState(0);
    const [source, setSource] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // load the income data 
        console.log(`Income: ${income}, Source: ${source}`);
        setIncome(0);
        setSource('');
    };
    return (
        <form onSubmit={handleSubmit}>
            <h2>Track Income</h2>
            <label>
                source:
                <input
                type="text"
                value={source}
                onChange={(e) => setSource(e.target.value)}
                required
                />
            </label>
            <label>
                Amount:
                <input
                type="number"
                value={income}
                onChange={(e) => setIncome(Number(e.target.value))}
                required
                />
            </label>
            <button type="submit">Add Income</button>

        </form>
    );
};

export default IncomeForm;