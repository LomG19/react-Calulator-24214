import React, { useState } from "react";
import './Calculator.css';

function CALCULATOR() {
  const [Num1, setNum1] = useState("");
  const [Num2, setNum2] = useState("");
  const [Result, setResult] = useState("");
  const [operator, setOperator] = useState("");   // ADDED

  const chooseOperator = (op) => {               // ADDED
    setOperator(op);
  };

  const compute = () => {                        // ADDED
    const n1 = parseFloat(Num1);
    const n2 = parseFloat(Num2);

    if (operator === "+") setResult(n1 + n2);
    if (operator === "-") setResult(n1 - n2);
    if (operator === "*") setResult(n1 * n2);
    if (operator === "/") setResult(n1 / n2);
    if (operator === "^") setResult(n1 ** n2);
    if (operator === "%") setResult(n1 % n2);
  };

  const CLEAR = () => {
    setNum1("");
    setNum2("");
    setResult("");
    setOperator("");                              // ADDED
  };

  return (
    <div className="calc-container">
      <h1>CALCULATOR</h1>

      <div className="input-group">
        <label>1st Number: </label>
        <input
          value={Num1}
          onChange={(n) => setNum1(n.target.value)}
          type="number"
          placeholder="First Number"
        />
      </div>

      <div className="input-group">
        <label>2nd Number: </label>
        <input
          value={Num2}
          onChange={(n) => setNum2(n.target.value)}
          type="number"
          placeholder="Second Number"
        />
      </div>

      <div className="input-group">
        <label>Result: </label>
        <input
          value={Result}
          readOnly={true}
          placeholder="Result"
        />
      </div>

      <div>
        <button onClick={() => chooseOperator("-")} className="op-button">-</button>
        <button onClick={() => chooseOperator("+")} className="op-button">+</button>
        <button onClick={() => chooseOperator("*")} className="op-button">x</button>
        <button onClick={() => chooseOperator("/")} className="op-button">/</button>
        <button onClick={() => chooseOperator("^")} className="op-button">^</button>
        <button onClick={() => chooseOperator("%")} className="op-button">M</button>
        <button onClick={CLEAR} className="op-button">C</button>
        <button onClick={compute} className="op-button">=</button>
      </div>
    </div>
  );
}

export default CALCULATOR;
