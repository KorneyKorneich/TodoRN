import styles from "./Home.styles.ts";
import { useState } from "react";
import { TaskList } from "src/widgets/TaskList/ui/TaskList.tsx";
import { AppHeader } from "src/shared/ui/Headers/AppHeader.tsx";
import { NavigationProps, Screens } from "src/shared/types/navigationTypes/navigationTypes.ts";
import Settings from "src/shared/assets/icons/settings.svg";
import { TaskAddButton } from "src/shared/ui/Buttons/TaskAddButton/TaskAddButton.tsx";
import { CustomModal } from "src/shared/ui/Modal/CustomModal.tsx";
import { TodoAddWidget } from "src/widgets/TodoAddWidget/TodoAddWidget.tsx";
import { handleTodoAdd } from "src/screens/Home/model/Home.model.ts";
import { TaskConfig } from "src/shared/types/taskTypes/taskConfigWithId.ts";
import { useAppDispatch } from "src/shared/hooks/reduxHooks.ts";
import { TouchableOpacity, View } from "react-native";
import { FIREBASE_AUTH } from "src/shared/firebase/cloud";
import { getIsTasksLoading } from "src/shared/slices/TodoSlice/selectors/getIsTasksLoading.ts";
import { useSelector } from "react-redux";

const taskToAddInitialState: TaskConfig = {
    description: "",
    title: "",
    img: null,
    deadline: null,
    timeStamp: 0,
    userId: null,
    done: false,
};

export const Home = ({ navigation }: NavigationProps) => {
    const [taskToAdd, setTaskToAdd] = useState<TaskConfig>(taskToAddInitialState);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useAppDispatch();

    const handleAdd = () => {
        const updatedTask = {
            ...taskToAdd,
            timeStamp: Date.now(),
            userId: FIREBASE_AUTH.currentUser!.uid,
        };
        setTaskToAdd(updatedTask);
        handleTodoAdd(updatedTask, setTaskToAdd, dispatch);
        toggleModal();
    };

    const isLoading = useSelector(getIsTasksLoading);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleGoSettings = () => {
        navigation.navigate("Logout");
    };

    return (
        <View style={styles.container}>
            <AppHeader
                text={"TO DO LIST"}
                buttons={[
                    <TouchableOpacity key={Date.now()} onPress={handleGoSettings}>
                        <Settings />
                    </TouchableOpacity>,
                ]}
                screen={Screens.HOME}
            />
            <TaskList />
            <TaskAddButton onPress={toggleModal} />
            {isModalOpen && (
                <CustomModal
                    toggleModal={toggleModal}
                    handleOnPressButton={handleAdd}
                    content={<TodoAddWidget taskToAdd={taskToAdd} setTaskToAdd={setTaskToAdd} />}
                    buttonTitle={"add todo"}
                />
            )}
        </View>
    );
};
