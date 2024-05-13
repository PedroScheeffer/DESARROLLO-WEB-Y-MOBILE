import React from "react";
import { contextExample } from "../Home/homeContext";
import { useContext } from "react";
export default function ContextExample() {
    return(
        <>
        <h1>Podemos usar contexto para evitar prop-drilling</h1>
        <p> Para usar prop drilling basta importarlo de archivo, ejemplo contextExample de homeContext y usarlo asi {"{useContext(contextExample)}"}</p>
        <h4>{useContext(contextExample)}</h4>
        </>
    );
}