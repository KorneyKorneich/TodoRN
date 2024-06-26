import { StoreConfig } from "src/shared/store/config/StateConfig.config.ts";

export const getIsUserLoading = (state: StoreConfig) => state.user.isLoading;
