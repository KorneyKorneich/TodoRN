import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
    Home: undefined;
    TaskDetails: { taskId: string };
};

export type NavigationProps = NativeStackScreenProps<RootStackParamList>;

export type TaskEditRouteParams = {
    taskId?: string;
};

export enum Screens {
    HOME = "Home",
    TASK_DETAILS = "TaskDetails",
}
