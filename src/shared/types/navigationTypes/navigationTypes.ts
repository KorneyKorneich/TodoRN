import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { TaskConfigWithId } from "src/shared/types/taskTypes/taskConfigWithId.ts";

export type RootStackParamList = {
    Home: undefined;
    TaskEdit: { taskData?: TaskConfigWithId };
};

export type NavigationProps = NativeStackScreenProps<RootStackParamList>;
export const useAppNavigation = () =>
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

export type TaskEditRouteParams = {
    taskData?: TaskConfigWithId;
};

export enum Screens {
    HOME = "Home",
    TASK_DETAILS = "TaskDetails",
}
