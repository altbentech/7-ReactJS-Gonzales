import React, { useState } from 'react';
import './Calculator.css'; // Add your CSS file for styling

const Calculator: React.FC = () => {
  const [expression, setExpression] = useState<string>('');

  const handleButtonClick = (value: string) => {
    if (value === '=') {
      try {
        setExpression(eval(expression).toString());
      } catch (error) {
        setExpression('Error');
      }
    } else if (value === 'c') {
      setExpression('');
    } else {
      setExpression((prevExpression) => prevExpression + value);
    }
  };

  return (
    <div className="calculator">
      <input
        type="text"
        placeholder="Enter Expression"
        value={expression}
        readOnly
        className="expression-input"
      />

      <div className="calculator-grid">
        {[7, 8, 9, 'c', 4, 5, 6, '+', 1, 2, 3, '-', 0, '/', '*', '='].map((value, index) => (
          <button key={index} onClick={() => handleButtonClick(value.toString())}>
            {value}
          </button>
        ))}
      </div>

      <div className="back-to-home">
        <a href="/">Back to Home</a>
      </div>
    </div>
  );
};

export default Calculator;
