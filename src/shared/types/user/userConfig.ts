import { Nullable } from "src/shared/types/rootTypes/rootTypes.ts";

export interface UserSignInConfig {
    email: Nullable<string>;
    password: Nullable<string>;
}

export interface UserSignUpConfig {
    email: Nullable<string>;
    password: Nullable<string>;
    repeatPassword: Nullable<string>;
}

export interface UserConfig {
    email: string;
    userId: string;
}

export interface UserResponse {
    userData: Nullable<UserConfig>;
    error: Nullable<string>;
}
