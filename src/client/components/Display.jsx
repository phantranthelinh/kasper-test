import React from "react";
import "../styles/display.scss";

const Display = (props) => {
    const { display, setDisplay, setIsEdit, isEdit } = props

    const onChangeTagInput = (e) => {
        const re = /^[!%(-+\x2D-9^glox\xF7\u221A]+$/;

        if (e.target.value === "" || re.test(e.target.value)) {
            setDisplay(e.target.value);
        }
    };
    return (
        <>
            <div className="display">
                <p className="text" onClick={() => setIsEdit(true)}>{display}</p>
                {isEdit && <input
                    type="text"
                    name="input"
                    className="input"
                    placeholder="0"
                    value={display}
                    maxLength={12}
                    onChange={onChangeTagInput}
                    autoComplete="off"
                />}



            </div>
        </>
    );
};



export default Display;