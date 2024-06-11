import { DocumentData } from "firebase/firestore";
import { NavigationProps } from "src/shared/types/navigationTypes/navigationTypes.ts";

export interface TaskConfig {
    title: string | null;
    description?: string | null;
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
