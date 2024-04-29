import React from "react";
import { Button } from "react";
import './index.css';
export default function MyButton({ text, color }) {
    function handleClick() {
        console.log("click")
    }

    return (
        <button
            className={color}
            onClick={handleClick}
        >

            {text}
        </button>
    );

}