export interface UserSignInConfig {
    email: string | null;
    password: string | null;
}

export interface UserSignUpConfig {
    email: string | null;
    username: string | null;
    password: string | null;
    repeatPassword: string | null;
}

export interface UserConfig {
    email: string;
    username: string;
}
