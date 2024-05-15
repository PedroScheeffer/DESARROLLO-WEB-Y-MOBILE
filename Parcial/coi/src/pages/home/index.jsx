import React from 'react';
import MyButton from '../../components/MyButton';
import Sports from '../../components/sports';
import { useState, useEffect } from 'react';
import {
    getTableFromServer,
    getTaskFromServer,
    postTaskToServer,
    putTaskToServer,
    deletTaskFromServer
} from "../../api/index"
import './index.css'
import { useNavigate } from 'react-router-dom';
const serverIp = "http://localhost:3000/api/games";

const Home = () => {

    const [sports, setSports] = useState(null)
    const navi = useNavigate();
    useEffect(() => {
        const getTasks = async () => {
            const sportsFromServer = await getTableFromServer(serverIp);
            setSports(sportsFromServer);
        }
        getTasks();
    }, [])

    const deletionHandler = (id) => {
        // const response = deletTaskFromServer(serverIp, id);
        // if (!response) {
            console.log("error");
        // }
        // setSports(response);
    }
    // function newSport(){
    //     navi("/newSport")
    // }
    return (
        <>
            <div className='header'>
                <h1>Titulo de la Aplicacion</h1>
                <MyButton
                    text="Agregar juego"
                    color="blue"
                    // onClickHandler={newSport()}
                />
            </div>

            <div className='table'>
                {sports?.map(
                    (task) => <Sports
                        sport={task}
                        deletion={deletionHandler}
                    />
                )}
            </div>
        </>
    );
};


export default Home;

