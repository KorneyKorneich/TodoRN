import { UserConfig } from "src/shared/types/user/userConfig.ts";

export interface UserSliceConfig {
    userData: UserConfig | null;
    isLoading: boolean;
    isError: boolean;
}
