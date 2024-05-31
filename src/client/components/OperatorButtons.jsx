import React from "react";
import "../styles/buttons.scss";

const OperatorButtons  = ({ handleEquals, clearButtonLabel, handleClear, handleOperatorClick, handleNumberClick, handleSignChange, handlePercentage, handleDecimal }) => {



  return (
    <div className="keypad">

      <button className="btn" onClick={handleClear}>
        {clearButtonLabel}
      </button>
      <button className="btn " onClick={handleSignChange}>
        +/-
      </button>
      <button className="btn " onClick={handlePercentage}>
        %
      </button>
      <button className="btn exp" onClick={() => handleOperatorClick("/")}>
        ÷
      </button>

      <button className="btn number" onClick={() => handleNumberClick("7")}>
        7
      </button>
      <button className="btn number" onClick={() => handleNumberClick("8")}>
        8
      </button>
      <button className="btn number" onClick={() => handleNumberClick("9")}>
        9
      </button>
      <button className="btn exp" onClick={() => handleOperatorClick("*")}>
        x
      </button>

      <button className="btn number" onClick={() => handleNumberClick("4")}>
        4
      </button>
      <button className="btn number" onClick={() => handleNumberClick("6")}>
        5
      </button>
      <button className="btn number" onClick={() => handleNumberClick("6")}>
        6
      </button>
      <button className="btn exp" onClick={() => handleOperatorClick("-")}>
        -
      </button>

      <button className="btn number" onClick={() => handleNumberClick("1")}>
        1
      </button>
      <button className="btn number" onClick={() => handleNumberClick("2")}>
        2
      </button>
      <button className="btn number" onClick={() => handleNumberClick("3")}>
        3
      </button>
      <button className="btn exp" onClick={() => handleOperatorClick("+")}>
        +
      </button>

      <button className="btn equal number radius-bottom-left" onClick={() => handleNumberClick("0")}>
        0
      </button>
      <button className="btn exp" onClick={handleDecimal}>
        ,
      </button>
      <button className="btn exp radius-bottom-right" onClick={() => handleEquals()}>
        =
      </button>
    </div>
  );
};


export default OperatorButtons;