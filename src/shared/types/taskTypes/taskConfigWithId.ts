import { DocumentData } from "firebase/firestore";

export interface TaskConfig {
    title: string | null;
    description: string | null;
    deadline: number | null;
    img: TodoImgConfig;
    timeStamp: number;
    userId: string | null;
}
export interface TaskConfigWithId {
    id: string;
    data: TaskConfig;
}

export interface TaskProps {
    task: TaskConfigWithId;
}

export interface dbGetTasksResponse {
    data: DocumentData;
    id: string;
}

export interface TodoImgConfig {
    downloadURL: string | null;
    filename: string | null;
}
