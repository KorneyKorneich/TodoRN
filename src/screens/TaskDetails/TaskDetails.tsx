import { View } from "react-native";
import {
    NavigationProps,
    Screens,
    TaskEditRouteParams,
    useAppNavigation,
} from "src/shared/types/navigationTypes/navigationTypes.ts";
import { AppHeader } from "src/shared/ui/Text/AppHeader.tsx";

export const TaskDetails = ({ route }: NavigationProps) => {
    const { taskData }: TaskEditRouteParams = route.params ?? {};
    const navigation = useAppNavigation();

    if (!taskData?.id) return null;
    return (
        <>
            <AppHeader text={"LIST OF TODO"} buttons={[]} screen={Screens.TASK_DETAILS} />
            {/*<View>*/}
            {/*{taskData.data.title ? (*/}
            {/*    <AppHeader text={taskData.data.title} />*/}
            {/*) : (*/}
            {/*    <AppHeader text={"Todoshka"} />*/}
            {/*)}*/}
            {/*</View>*/}
        </>
    );
};
