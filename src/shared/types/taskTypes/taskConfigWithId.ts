import { DocumentData } from "firebase/firestore";

export interface TaskConfig {
    title: string;
    description?: string;
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
