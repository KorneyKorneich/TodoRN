import { Button, FlatList, SafeAreaView, TextInput, View } from "react-native";
import { TaskConfig } from "../../../entities/Task/config/task.config.ts";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getState } from "../slice/selectors/getState.ts";
import styles from "./TaskList.styles.ts";
import { Task } from "src/entities/Task";
import { useAppDispatch } from "src/shared/hooks/reduxHooks.ts";
import { addTask } from "src/widgets/TaskList/slice/TaskList.slice.ts";

export const TaskList = () => {
    const tasks = useSelector(getState).tasks.tasks;

    const [taskToAdd, setTaskToAdd] = useState("");

    const dispatch = useAppDispatch();

    const handleAddTask = () => {
        taskToAdd === "" ? setTaskToAdd("") : dispatch(addTask(taskToAdd));
    };

    return (
        <View style={styles.taskListContainer}>
            <FlatList data={tasks} renderItem={({ item }) => <Task task={item} />} />
            <TextInput
                placeholder={"New todo here"}
                value={taskToAdd}
                onChangeText={(text) => setTaskToAdd(text)}
            />
            <Button title={"+"} onPress={() => handleAddTask()} />
        </View>
    );
};
