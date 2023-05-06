import React, {useState, createContext} from "react";
import {TaskProps, TaskListType} from "./taskType";

interface ChildrenProps {
    children: React.ReactNode;
}

export const TaskListContext = createContext<TaskListType | null>(null);

export const TaskListContextProvider : React.FC<ChildrenProps> = ({children}) => {
    const [taskList, setTaskList] = useState<TaskProps[]>([
        {
            id: 1,
            title: "Example Task",
            done: false,
            categories: "Home",
            color: "#FF9C9C"
        },
        {
            id: 2,
            title: "Example Task 2",
            done: false,
            categories: "Home",
            color: "#FF9C9C"
        },
        {
            id: 3,
            title: "Example Task 3",
            done: false,
            categories: "Home",
            color: "#FF9C9C"
        },
    ]);

    const [doneTasks, setDoneTasks] = useState<TaskProps[]>(taskList.filter(x => x.done === true));
    const [notDoneTasks, setNotDoneTasks] = useState<TaskProps[]>(taskList.filter(x => x.done === false));

    const addTask = (task: TaskProps) => {
        const newTask : TaskProps = {
            id: Math.random(),
            title: task.title,
            done: false,
            categories: task.categories,
            color: task.color
        }

        setTaskList([...taskList, newTask]);
        setDoneTasks([...taskList.filter(x => x.done === true)]);
        setNotDoneTasks([...taskList.filter(x => x.done === false)]);
    }

    const checkTask = (id: number) => {
        taskList.filter((task: TaskProps) => {
            if (task.id === id) {
                task.done = !task.done;
                setTaskList([...taskList]);
                setDoneTasks([...taskList.filter(x => x.done === true)]);
                setNotDoneTasks([...taskList.filter(x => x.done === false)]);
            }
        });
    }

    const deleteTask = (id: number) => {
        setTaskList([...taskList.filter(x => x.id !== id)]);
    }

    return(
        <TaskListContext.Provider value={{taskList, doneTasks, notDoneTasks, addTask, checkTask, deleteTask}}>
            {children}
        </TaskListContext.Provider>
    )
}