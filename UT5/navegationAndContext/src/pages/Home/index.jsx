import React from "react";
// import "./index.css";
import { Link } from "react-router-dom";
export default function Home() {
    return (
        <>
            <h2>Bienvenido al ejemplo de navegacion y contexto</h2>
            <Link to={"../NavigationExample"}>Ejemplos navegacion</Link>
            
        </>
    );
}

