import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

export type StackParamList = {
    Home: undefined;
    TaskDetails: { taskId: string };
    Welcome: undefined;
    SignIn: undefined;
    SignUp: undefined;
    ChangePassword: undefined;
    Logout: undefined;
};

export type NavigationProps = NativeStackScreenProps<StackParamList>;
export const useAppNavigation = () => useNavigation<NativeStackNavigationProp<StackParamList>>();

export type TaskEditRouteParams = {
    taskId?: string;
};

export enum Screens {
    HOME = "Home",
    TASK_DETAILS = "TaskDetails",
    LOGOUT = "LogOut",
    SIGN_IN = "SignIn",
    SIGN_UP = "SignUp",
}
