import React, { useEffect, useRef, useState } from "react";
import "../styles/calculator.scss";
import Buttons from "./Buttons";
import Display from "./Display";
import Dots from "./Dots";

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [operator, setOperator] = useState(null);
  const [operand1, setOperand1] = useState(null);
  const [waitingForOperand2, setWaitingForOperand2] = useState(false);
  const [clearButtonLabel, setClearButtonLabel] = useState('AC');
  const [isEdit, setIsEdit] = useState(false)

  const calculatorRef = useRef()
  const [history, setHistory] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        const savedHistory = window?.localStorage?.getItem("calculatorHistory") ? JSON?.parse(localStorage.getItem("calculatorHistory")) : null;;
        return savedHistory ?? [];

      } catch (error) {
        return []
      }
    } else {
      // Handle the case where localStorage is not available
      console.warn("localStorage is not available in this environment.");
      return []
    }

  });

  useEffect(() => {
    localStorage.setItem('calculatorHistory', JSON.stringify(history));
  }, [history]);


  const handleNumberClick = (number) => {
    if (waitingForOperand2) {
      setDisplay(number);
      setWaitingForOperand2(false);
    } else {
      setDisplay(display === '0' ? number : display + number);
    }
    setClearButtonLabel('C');
    setIsEdit(false)
  };

  const handleOperatorClick = (nextOperator) => {
    const inputValue = parseFloat(display);

    if (operand1 === null) {
      setOperand1(inputValue);
    } else if (operator) {
      const currentValue = operand1 || 0;
      const newValue = performCalculation(currentValue, inputValue, operator);
      setDisplay(String(newValue));
      setOperand1(newValue);
      setHistory([...history, `${currentValue} ${operator} ${inputValue} = ${newValue}`]);
    }

    setWaitingForOperand2(true);
    setOperator(nextOperator);
    setIsEdit(false)

  };

  const performCalculation = (operand1, operand2, operator) => {
    switch (operator) {
      case '+':
        return operand1 + operand2;
      case '-':
        return operand1 - operand2;
      case '*':
        return operand1 * operand2;
      case '/':
        return operand1 / operand2;
      default:
        return operand2;
    }
  };

  const handleEquals = () => {
    const inputValue = parseFloat(display);

    if (operator && operand1 !== null) {
      const currentValue = operand1 || 0;
      const newValue = performCalculation(currentValue, inputValue, operator);
      setDisplay(String(newValue));
      setOperand1(null);
      setOperator(null);
      setWaitingForOperand2(false);
      setHistory([...history, `${currentValue} ${operator} ${inputValue} = ${newValue}`]);
    }
    setIsEdit(false)

  };

  const handleClear = () => {
    setDisplay('0');
    setClearButtonLabel('AC');
    setOperator(null);
    setOperand1(null);
    setWaitingForOperand2(false);
  };

  const handleSignChange = () => {
    setDisplay((prevDisplay) => (prevDisplay.charAt(0) === '-' ? prevDisplay.slice(1) : '-' + prevDisplay));
  };

  const handlePercentage = () => {
    setDisplay((prevDisplay) => (parseFloat(prevDisplay) / 100).toString());
  };

  const handleDecimal = () => {
    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
    setClearButtonLabel('C');
  };

  const handleClickOutSide = (event) => {
    const { target } = event
    if (calculatorRef.current && !calculatorRef.current.contains(target)) {
      //*click out side 
      setIsEdit(false);
      setDisplay("0")

    }

  }

  const props = {
    handleClear,
    clearButtonLabel,
    handleOperatorClick,
    handleNumberClick,
    handleEquals,
    handleSignChange,
    handlePercentage,
    handleDecimal,
  }



  return (
    <>
      <div className="container" onClick={handleClickOutSide}>
        <div className="main" ref={calculatorRef} >
          <Dots />
          <Display display={display} setDisplay={setDisplay} setIsEdit={setIsEdit} isEdit={isEdit} />
          <Buttons
            {...props}
          />
        </div>
      </div>
    </>
  );
}

export default Calculator;
