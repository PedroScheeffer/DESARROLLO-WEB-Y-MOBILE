import { useState, useEffect } from 'react'

import './App.css'
import MyTask from './components/MyTask'
import MyTable from './components/MyTable'
import {
  getTableFromServer,
  getTaskFromServer,
  postTaskToServer,
  putTaskToServer,
  deletTaskFromServer
} from "./api/index"
function App() {
  const serverIp = "http://localhost:3000/api/tasks";

  const newCard = {
    id: -1,
    title: "Title",
    description: "Description",
    assignedTo: "Assigned To",
    startDate: "Start Date",
    endDate: "End Date",
    status: "Status",
    priority: "Priority",
    comments: ["Comentarios"],
  }

  const [tasks, setTasks] = useState([[newCard, newCard], [newCard]])
  
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await getTableFromServer(serverIp);
      setTasks(tasksFromServer);
    }
    getTasks();
  }, [])
  return (
    <>
      <MyTable columns={[tasks]} />
    </>
  )
}

export default App
