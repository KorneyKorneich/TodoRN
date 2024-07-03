import { TasksStoreConfig } from "src/shared/slices/TodoSlice/config/TasksStore.config.ts";
import { UserSliceConfig } from "src/shared/slices/UserSlice/userSliceConfig.ts";

export interface StoreConfig {
    tasks: TasksStoreConfig;
    user: UserSliceConfig;
}
