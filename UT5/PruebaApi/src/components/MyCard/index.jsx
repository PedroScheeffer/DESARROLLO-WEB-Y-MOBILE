import React from "react";

export default function Card({ text, img, nutritions }) {
    // Ensure `nutritions` is a valid object
    const nutritionEntries = nutritions ? nutritions : [];
    console.log("Armando Car: Nutrition es: " + nutritions)
    return (
        <>
            <figure>
                <img src={img} title={text} alt={text}></img>
                <figcaption>{text}</figcaption>
                <ul>
                    {nutritionEntries.map(([key, value], index) => (
                        <li key={index}>{`${key}: ${value}`}</li>
                    ))}
                </ul>
            </figure>
        </>
    );
}
