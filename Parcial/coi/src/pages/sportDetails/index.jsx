import React from 'react';
import MyButton from '../../components/MyButton';
import { useParams, useNavigate } from 'react-router-dom';
import { getTaskFromServer } from '../../api/index';
import { useState, useEffect} from "react"


const serverIp = "http://localhost:3000/api/games";

const SportDetails = (name, description, players, category) => {
    const id = useParams().taskId
    const [sport, setSport] = useState(null);
    const navig = useNavigate();
    useEffect(() => {
        const fetchTask = async () => {
            const taskData = await getTaskFromServer(serverIp, id);
            console.log("Ip", serverIp + id);
            setSport(taskData[0]);
        };
        fetchTask();
    }, [id]);
    if (!sport) {
        return <div>Loading...</div>;
    }
    console.log("Sport detail : ", sport)
    return (
        <div className='sports-details'>
            <MyButton text="Atras" color={"default-button"} onClickHandler={() => navig("/")}/>
            <p>{sport.title}</p>
            <p>{sport.description}</p>
            <p>{sport.players}</p>
            <p>{sport.categories}</p>
        </div>
    );
};

export default SportDetails;