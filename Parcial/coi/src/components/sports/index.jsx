import React from 'react';
import MyButton from '../MyButton';
import './index.css'
import { useNavigate } from 'react-router-dom';
const Sports = (data, deletion) => {
    const navigate = useNavigate();

    function goToDetails() {
        navigate(`/games/${data.sport.id}`);
    }

    // console.log("sport is ", data)
    return (
        <div className='card' >
            <p>{data.sport.title}</p>
            <div className='buttons-col' >
                <MyButton text="Detalles" onClickHandler={goToDetails} />
                <MyButton text="Borrar" onClickHandler={deletion} />
            </div>
        </div>
    );
};

export default Sports;