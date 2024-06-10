import { Button, FlatList, TextInput, View } from "react-native";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getState } from "../slice/selectors/getState.ts";
import styles from "./TaskList.styles.ts";
import { Task } from "src/entities/Task";
import { addTaskToDB } from "src/shared/firebase/cloud/api/addTask/addTask.ts";
import { TaskConfig } from "src/shared/types/taskTypes/taskConfigWithId.ts";
import { useAppDispatch } from "src/shared/hooks/reduxHooks.ts";
import { getTasksList } from "src/shared/firebase/cloud/api/getTaskList/getTasksList.ts";

export const TaskList = () => {
    const tasks = useSelector(getState).tasks.tasks;

    const taskToAddInitialState: TaskConfig = {
        description: null,
        title: null,
    };

    const [taskToAdd, setTaskToAdd] = useState<TaskConfig>(taskToAddInitialState);

    const dispatch = useAppDispatch();

    const handleOnChange = (text: string) => {
        setTaskToAdd({ ...taskToAdd, title: text });
    };

    const handleAddTask = () => {
        dispatch(addTaskToDB(taskToAdd));
        setTaskToAdd(taskToAddInitialState);
    };

    useEffect(() => {
        dispatch(getTasksList());
    }, []);

    return (
        <View style={styles.taskListContainer}>
            <FlatList data={tasks} renderItem={({ item }) => <Task task={item} />} />
            <TextInput
                placeholder={"New todo here"}
                value={taskToAdd.title}
                onChangeText={handleOnChange}
            />
            <Button title={"+"} onPress={handleAddTask} />
        </View>
    );
};
