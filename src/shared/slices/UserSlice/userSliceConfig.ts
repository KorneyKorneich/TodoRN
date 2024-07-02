import { UserConfig } from "src/shared/types/user/userConfig.ts";
import { Nullable } from "src/shared/types/rootTypes/rootTypes.ts";

export interface UserSliceConfig {
    userData: Nullable<UserConfig>;
    isLoading: boolean;
    isError: boolean;
}
