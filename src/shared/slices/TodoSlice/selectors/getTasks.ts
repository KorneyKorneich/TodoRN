import { StoreConfig } from "src/shared/store/config/StateConfig.config.ts";

export const getTasks = (state: StoreConfig) => state.tasks.tasks;
