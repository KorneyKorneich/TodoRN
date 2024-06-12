import { FlatList, View } from "react-native";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getState } from "../slice/selectors/getState.ts";
import styles from "./TaskList.styles.ts";
import { Task } from "src/entities/Task";
import { useAppDispatch } from "src/shared/hooks/reduxHooks.ts";
import { getTasksList } from "src/shared/firebase/cloud/api/getTaskList/getTasksList.ts";
import { ArticleBar } from "src/shared/ui/ArticleTitle/ArticleTitle.tsx";

export const TaskList = () => {
    const tasks = useSelector(getState).tasks.tasks;
    const reversedTasksList = [...tasks].reverse();

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getTasksList());
    }, []);

    return (
        <View style={styles.taskListContainer}>
            <ArticleBar text={"LIST OF TODO"} />
            <FlatList data={reversedTasksList} renderItem={({ item }) => <Task task={item} />} />
        </View>
    );
};
