import React from "react";
import "../styles/buttons.scss";

const Buttons = ({ inputHandler, clearInput, input, changePlusMinus, calculateAns }) => {
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("equalbtn").click();
    }
  });


  return (
    <div className="show-btn">

      <button className="btn" onClick={clearInput}>
        {input.length > 0 ? "C": "AC"}
      </button>
      <button className="btn " onClick={changePlusMinus}>
        +/-
      </button>
      <button className="btn " onClick={inputHandler}>
        %
      </button>
      <button className="btn exp" onClick={inputHandler}>
        ÷
      </button>

      <button className="btn number" onClick={inputHandler}>
        7
      </button>
      <button className="btn number" onClick={inputHandler}>
        8
      </button>
      <button className="btn number" onClick={inputHandler}>
        9
      </button>
      <button className="btn exp" onClick={inputHandler}>
        x
      </button>

      <button className="btn number" onClick={inputHandler}>
        4
      </button>
      <button className="btn number" onClick={inputHandler}>
        5
      </button>
      <button className="btn number" onClick={inputHandler}>
        6
      </button>
      <button className="btn exp" onClick={inputHandler}>
        -
      </button>

      <button className="btn number" onClick={inputHandler}>
        1
      </button>
      <button className="btn number" onClick={inputHandler}>
        2
      </button>
      <button className="btn number" onClick={inputHandler}>
        3
      </button>
      <button className="btn exp" onClick={inputHandler}>
        +
      </button>

      <button className="btn equal number radius-bottom-left" onClick={inputHandler}>
        0
      </button>
      <button className="btn exp" onClick={inputHandler}>
        ,
      </button>
      <button className="btn exp radius-bottom-right" id="equalbtn" onClick={calculateAns}>
        =
      </button>
    </div>
  );
};

// Buttons.propTypes= {
//   inputHandler,
//   clearInput,
//   backspace,
//   changePlusMinus,
//   calculateAns
// }

export default Buttons;