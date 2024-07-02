import { Image, ScrollView, Text, View } from "react-native";
import {
    NavigationProps,
    Screens,
    TaskEditRouteParams,
} from "src/shared/types/navigationTypes/navigationTypes.ts";
import { AppHeader } from "src/shared/ui/Headers/AppHeader.tsx";
import styles from "./TaskDetails.styles.ts";
import { ArticleBar } from "src/shared/ui/ArticleTitle/ArticleTitle.tsx";
import { formatDate } from "src/shared/helpers/formatDate.ts";
import { TaskEditButton } from "src/shared/ui/Buttons/TaskEditButton/TaskEditButton.tsx";
import { TaskDeleteButton } from "src/shared/ui/Buttons/TaskDeleteButton/TaskDeleteButton.tsx";
import { deleteTask } from "src/shared/firebase/cloud/api/todos/deleteTask/deleteTask.ts";
import { useAppDispatch } from "src/shared/hooks/reduxHooks.ts";
import { CustomModal } from "src/shared/ui/Modal/CustomModal.tsx";
import { TodoEditWidget } from "src/widgets/TodoEditWidget/TodoEditWidget.tsx";
import { useState } from "react";
import { TaskConfigWithId } from "src/shared/types/taskTypes/taskConfigWithId.ts";
import { editTask } from "src/shared/firebase/cloud/api/todos/editTask/editTask.ts";
import { useSelector } from "react-redux";
import { getState } from "src/shared/slices/TodoSlice/selectors/getState.ts";

export const TaskDetails = ({ route, navigation }: NavigationProps) => {
    const { taskId }: TaskEditRouteParams = route.params ?? "";
    const taskData = useSelector(getState).tasks.tasks.find((el) => el.id === taskId);
    const initialTaskData: TaskConfigWithId = taskData ?? {
        id: "",
        data: {
            title: "",
            img: "",
            description: "",
            timeStamp: 0,
            deadline: 0,
            userId: null,
        },
    };
    const [taskToEdit, setTaskToEdit] = useState<TaskConfigWithId>(taskData ?? initialTaskData);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const dispatch = useAppDispatch();

    if (!taskData?.id) return navigation.goBack();

    const timeStamp = new Date(taskData.data.timeStamp);

    const handleOnDelete = () => {
        dispatch(
            deleteTask({
                taskId: taskToEdit.id,
                timestamp: taskData.data.timeStamp.toString(),
            }),
        );
        navigation.goBack();
    };

    const handleOnEditConfirm = async () => {
        await dispatch(editTask(taskToEdit));
        toggleModal();
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };
    return (
        <>
            <AppHeader
                buttons={[
                    <TaskEditButton key={Date.now()} handleOnPress={handleModalOpen} />,
                    <TaskDeleteButton key={Date.now() + 1} handleOnPress={handleOnDelete} />,
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
            {isModalOpen && (
                <CustomModal
                    content={
                        <TodoEditWidget taskToEdit={taskToEdit} setTaskToEdit={setTaskToEdit} />
                    }
                    handleOnPressButton={handleOnEditConfirm}
                    toggleModal={toggleModal}
                    buttonTitle={"UPDATE"}
                />
            )}
        </>
    );
};
