import React from "react";
import { DeleteContextProvider, ChildrenProps } from "./contexts/deleteContext";
import { TaskListContextProvider } from "./contexts/taskTypeContext";

const ContextProviders : React.FC<ChildrenProps> = ({children}) => {
    return (
        <TaskListContextProvider>
            <DeleteContextProvider>
                {children}
            </DeleteContextProvider>
        </TaskListContextProvider>
    );
}

export default ContextProviders;