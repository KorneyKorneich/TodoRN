import { TaskConfigWithId } from "src/shared/types/taskTypes/taskConfigWithId.ts";

export interface TasksStoreConfig {
    tasks: TaskConfigWithId[];
    isLoading: boolean;
    isError: boolean;
}
