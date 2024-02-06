// Calculalot.tsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Calculalot: React.FC = () => {
  const operators = ['*', '/', '+', '-']
  const [expression, setExpression] = useState<string>('');

  const handleButtonClick = (value: string) => {
    if (value === '=') {
      try {
        setExpression(eval(expression).toString());
      } catch (error) {
        setExpression('Error');
      }
    } else if (value === 'AC') {
      setExpression('');
    } else if (value === 'DEL') {
      setExpression((prevExpression) => prevExpression.slice(0, -1));
    } 
    else {
      // If at this point, check mo muna if yung current value is an operator
        // tapos yung last ng expression ay opeator rin. Yung gawin mo: 
          // replace the last ng expression with the current operator (yung nasa value)
      // Else, if yung last ng expression ay just numbers: proceed with line 28.
      setExpression((prevExpression) => prevExpression + value);
    }
  };

  return (
    <div className="calculator-star-body">
      <div className="calculator-container">
        <input
          type="text"
          placeholder="0"
          value={expression}
          readOnly
          className="calculator-expression-input"
        />

        <div className="calculator-grid">
          {['AC', 'DEL', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '00', '0', '.', '='].map((value, index) => (
            <button key={index} className={value === '=' ? 'calculator-equal' : 'calculator-button'} onClick={() => handleButtonClick(value)}>
              {value}
            </button>
          ))}
        </div>
      </div>
      <div className="calculator-back-button">
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
};

export default Calculalot;
