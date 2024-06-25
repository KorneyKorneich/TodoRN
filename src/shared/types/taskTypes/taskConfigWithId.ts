import { DocumentData } from "firebase/firestore";
import { Nullable } from "src/shared/types/rootTypes/rootTypes.ts";

export interface TaskConfig {
    title: string;
    description: string;
    deadline: Nullable<number>;
    img: Nullable<string>;
    timeStamp: number;
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
