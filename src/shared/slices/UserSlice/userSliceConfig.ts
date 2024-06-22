import { UserConfig } from "src/shared/types/user/userConfig.ts";
import { createSlice } from "@reduxjs/toolkit";

export interface UserSliceConfig {
    userData: UserConfig | null;
    isLoading: boolean;
    isError: boolean;
}
