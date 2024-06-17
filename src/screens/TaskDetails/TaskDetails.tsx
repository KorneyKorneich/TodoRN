import { Image, ScrollView, Text, View } from "react-native";
import {
    NavigationProps,
    Screens,
    TaskEditRouteParams,
    useAppNavigation,
} from "src/shared/types/navigationTypes/navigationTypes.ts";
import { AppHeader } from "src/shared/ui/Text/AppHeader.tsx";
import styles from "./TaskDetails.styles.ts";
import { ArticleBar } from "src/shared/ui/ArticleTitle/ArticleTitle.tsx";
import { formatDate } from "src/shared/helpers/formatDate.ts";
import { TaskEditButton } from "src/shared/ui/Buttons/TaskEditButton/TaskEditButton.tsx";
import { TaskDeleteButton } from "src/shared/ui/Buttons/TaskDeleteButton/TaskDeleteButton.tsx";
import { deleteTask } from "src/shared/firebase/cloud/api/deleteTask/deleteTask.ts";
import { useAppDispatch } from "src/shared/hooks/reduxHooks.ts";

export const TaskDetails = ({ route }: NavigationProps) => {
    const { taskData }: TaskEditRouteParams = route.params ?? {};
    const navigation = useAppNavigation();
    const dispatch = useAppDispatch();

    if (!taskData?.id) return navigation.goBack();
    const timeStamp = new Date(taskData.data.timeStamp);
    const handleOnEdit = () => {};
    const handleOnDelete = () => {
        dispatch(deleteTask(taskData.id));
        navigation.goBack();
    };
    return (
        <>
            <AppHeader
                buttons={[
                    <TaskEditButton key={Math.random()} handleOnPress={handleOnEdit} />,
                    <TaskDeleteButton key={Math.random()} handleOnPress={handleOnDelete} />,
                ]}
                screen={Screens.TASK_DETAILS}
            />
            <ScrollView>
                <View>
                    {taskData.data.title && (
                        <ArticleBar style={styles.taskTitle} text={taskData.data.title} />
                    )}
                </View>
                <View>
                    {taskData.data.img && (
                        <Image style={styles.taskImageContainer} src={taskData.data.img} />
                    )}
                </View>
                <View>
                    {taskData.data.description && (
                        <Text style={styles.taskDescription}>{taskData.data.description}</Text>
                    )}
                </View>
            </ScrollView>
            <Text style={styles.taskTimestamp}>{formatDate(timeStamp)}</Text>
        </>
    );
};
