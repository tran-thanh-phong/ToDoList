export interface TaskProps {
    id: number;
    title: string;
    done: boolean;
    categories: string;
    color: string;
}

export type TaskListType = {
    taskList: TaskProps[];
    addTask: (task: TaskProps) => void;
    checkTask: (id: number) => void;
    deleteTask: (id: number) => void;
}