import { StoreConfig } from "src/shared/store/config/StateConfig.config.ts";

export const getIsTasksLoading = (state: StoreConfig) => state.tasks.isLoading;
