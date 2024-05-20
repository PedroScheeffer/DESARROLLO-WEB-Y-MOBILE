export async function getTableFromServer(serverIp) {
    try {
        let response = await fetch(serverIp);
        let data = await response.json();
        console.log("Tasks gotten from server: ", data)
        return data;
    } catch (error) {
        return [];
    }
}
export async function getTaskFromServer(serverIp, taskId) {
    try {
        let response = await fetch(serverIp + "/" + taskId);
        let data = await response.json();
        return data;
    } catch (error) {
        return [];
    }
}
export async function postTaskToServer(serverIp, task) {
    try {
        let response = await fetch(serverIp,
            {
                method: "POST",
                headers: {
                    "Content-Type": "aplication/json",
                },
                body: JSON.stringify(task)
            }
        );
        if (!response.ok) {
            console.log(response.statusText);
            return;
        }
        if (response.ok) {
            let task = await response.json();
            return task;
        }
    } catch (error) {
        return [];
    }
}
export async function putTaskToServer(serverIp, task) {
    let serverIpPlusId = serverIp + "/" + task.id
    console.log(serverIpPlusId)
    try {
        let response = await fetch(serverIpPlusId,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(task)
            }
        );
        if (!response.ok) {
            console.log(response.statusText);
            return;
        }
        if (response.ok) {
            let task = await response.json();
            return task;
        }

    } catch (error) {
        return [];
    }
}

export async function deletTaskFromServer(serverIp, taskId) {
    try {
        let response = await fetch(serverIp + "/" + taskId,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "aplication/json",
                },
            }
        );
        if (!response.ok) {
            console.log(response.statusText);
            return;
        }
        if (response.ok) {
            let task = await response.json();
            return task;
        }
    } catch (error) {
        return [];
    }
}