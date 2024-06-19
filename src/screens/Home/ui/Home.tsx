import { useState } from "react";
import { TaskList } from "src/widgets/TaskList/ui/TaskList.tsx";
import { AppHeader } from "src/shared/ui/Headers/AppHeader.tsx";
import { Screens } from "src/shared/types/navigationTypes/navigationTypes.ts";
import Settings from "src/shared/assets/icons/settings.svg";
import { TaskAddButton } from "src/shared/ui/Buttons/TaskAddButton/TaskAddButton.tsx";
import { CustomModal } from "src/shared/ui/Modal/CustomModal.tsx";
import { TodoAddWidget } from "src/widgets/TodoAddWidget/TodoAddWidget.tsx";
import { handleTodoAdd } from "src/screens/Home/model/Home.model.ts";
import { TaskConfig } from "src/shared/types/taskTypes/taskConfigWithId.ts";
import { useAppDispatch } from "src/shared/hooks/reduxHooks.ts";

const taskToAddInitialState: TaskConfig = {
    description: null,
    title: null,
    img: {
        downloadURL: null,
        filename: null,
    },
    deadline: null,
    timeStamp: 0,
};

export const Home = () => {
    const [taskToAdd, setTaskToAdd] = useState<TaskConfig>(taskToAddInitialState);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const dispatch = useAppDispatch();

    const handleAdd = () => {
        const updatedTask = { ...taskToAdd, timeStamp: Date.now() };
        setTaskToAdd(updatedTask);
        handleTodoAdd(updatedTask, setTaskToAdd, dispatch);
        toggleModal();
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
            <AppHeader
                text={"TO DO LIST"}
                buttons={[<Settings key={Date.now()} />]}
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
        </>
    );
};
