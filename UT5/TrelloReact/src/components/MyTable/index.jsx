import React from 'react';

import MyColumn from '../MyColumn';
const MyTable = ({ columns }) => {
    let keys = [];
    console.log("Tareas resibidas " ,columns)
    return (
        <div className="table">
            {columns?.map((task) => <MyColumn tasks={task} key={GetKey(keys)} / >)};
        </div>
    );
};

function GetKey(keys){
    let uuid = self.crypto.randomUUID();
    if(keys.includes(uuid)){
        return GetKey(keys);
    } 
    keys.push(uuid);
    return uuid;
}

export default MyTable;