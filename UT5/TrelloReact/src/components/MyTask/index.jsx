import React from 'react';

import "./index.css";
const MyTask = ({ title, description, assignedTo, startDate, endDate, status, priority, comments }) => {
    return (
        <div className="task" id="task-template" onClick={() => console.log('edit')}>
            <h3 className="task-title no-margin">{title}</h3>
            <h4 className="task-assigned no-margin">{assignedTo}</h4>
            <p className="task-description no-margin">{description}</p>
            <div className="dates-wraper">
                <p className="task-start-date no-margin">{startDate}</p>
                <p className="task-end-date no-margin">{endDate}</p>

            </div>
            <div className='bottom-wraper'>
                <span className="task-status no-margin">{status}</span>
                <span className="task-priority no-margin">{priority}</span>
            </div>
            <div className="task-comments no-margin">{comments}</div>
        </div>
    );
};

export default MyTask;