import React from 'react';
import MyButton from '../../components/MyButton';

const NewSport = () => {
    

    return (
        <div>
            <input type='text' id="name">Nombre:</input>
            <input type='text' id="player">jugadores:</input>
            <input type='text' id='cate'>categoria:</input>
            <input type='text' id='descr' >description:</input>
            <MyButton text="sumit" onClickHandler={createSport}/ >
        </div>
    );
};

export default NewSport;