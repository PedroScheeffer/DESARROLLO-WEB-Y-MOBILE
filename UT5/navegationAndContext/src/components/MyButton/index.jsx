import React from "react";
import { Button } from "react";
import './index.css';
export default function MyButton({ text, color, onClickHandler }) {

    return (
        <button
            className={color}
            onClick={() => onClickHandler()}
        >
            {text}
        </button>
    );

}