import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

export type RootStackParamList = {
    Home: undefined;
    TaskDetails: { taskId: string };
};

export type NavigationProps = NativeStackScreenProps<RootStackParamList>;
export const useAppNavigation = () =>
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

export type TaskEditRouteParams = {
    taskId?: string;
};

export enum Screens {
    HOME = "Home",
    TASK_DETAILS = "TaskDetails",
}
