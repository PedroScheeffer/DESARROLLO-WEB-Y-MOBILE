import React from 'react';

import MyTask from '../MyTask';
import "./index.css"
const MyColumn = ({tasks}) => {
    return (
        <div className="column">
            {tasks?.map(
                (task) => <MyTask
                    key={task.id}
                    title={task.title}
                    description={task.description}
                    assignedTo={task.assignedTo}
                    startDate={task.startDate}
                    endDate={task.endDate}
                    status={task.status}
                    priority={task.priority}
                    comments={task.comments}
                />
            )}
            <button onClick={() => console.log('add task')} />
        </div>
    );
};

export default MyColumn;