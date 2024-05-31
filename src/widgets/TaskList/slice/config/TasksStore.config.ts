import { TaskConfig } from "src/entities/Task/config/task.config.ts";

export interface TasksStoreConfig {
    tasks: TaskConfig[];
    isLoading: boolean;
    isError: boolean;
}
