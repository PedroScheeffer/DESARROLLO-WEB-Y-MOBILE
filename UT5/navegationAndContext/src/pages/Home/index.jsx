import React from "react";
// import "./index.css";
import MyButton from "../../components/MyButton";
import { Link, useNavigate } from "react-router-dom";
export default function Home() {
    const navi = useNavigate();
    return (
        <>
            <h2>Bienvenido al ejemplo de navegacion y contexto</h2>
            <Link to={"../NavigationExample"}>Ejemplos navegacion</Link>
            <br />
            <MyButton text="Context Example" onClickHandler={() => navi("../ContextExample")} / >
            <br />
            {/* <Link to={}></Link> */}
        </>
    );
}

