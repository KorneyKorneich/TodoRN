import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { TaskProps } from "src/shared/types/taskTypes/taskConfigWithId.ts";
import styles from "./Task.styles.ts";
import { useAppNavigation } from "src/shared/types/navigationTypes/navigationTypes.ts";
import { formatDate } from "src/shared/helpers/formatDate.ts";
import { Clock } from "src/shared/assets/icons/clock.tsx";
import { ColorGuide } from "src/shared/types/styles/styleConstants.ts";
import { Checked } from "src/shared/assets/icons/checked.tsx";
import { useAppDispatch } from "src/shared/hooks/reduxHooks.ts";
import { editTask } from "src/shared/firebase/cloud/api/todos/editTask/editTask.ts";

type TaskComponentProps = {
    task: TaskProps["task"];
};

export const Task = (props: TaskComponentProps) => {
    const { task } = props;
    const [todo, setTodo] = useState<TaskProps["task"]>(task);
    const navigation = useAppNavigation();
    const dispatch = useAppDispatch();

    const handleOnPress = () => {
        navigation.navigate("TaskDetails", {
            taskId: todo.id,
        });
    };

    const handleOnTodoChecked = async () => {
        const updatedTodo = {
            ...todo,
            data: {
                ...todo.data,
                done: !todo.data.done,
            },
        };
        setTodo(updatedTodo);
        await dispatch(editTask(updatedTodo));
    };

    const deadline = todo.data.deadline ? new Date(todo.data.deadline) : null;
    const currentTime = new Date();
    const timeDifference = deadline ? deadline.getTime() - currentTime.getTime() : null;
    const lessThanADay = timeDifference !== null && timeDifference < 24 * 60 * 60 * 1000;
    const formattedDeadline = deadline ? formatDate(deadline) : "";

    return (
        <TouchableOpacity
            onPress={handleOnPress}
            key={todo.id}
            style={[
                styles.task,
                task.data.done ? styles.done : lessThanADay ? styles.taskUrgent : styles.taskNormal,
            ]}
        >
            <View style={styles.taskTitleContainer}>
                <Text style={todo.data.done ? styles.taskTitleDone : styles.taskTitle}>
                    {todo.data.title}
                </Text>
                {lessThanADay && !todo.data.done && <Clock color={ColorGuide.WHITE} />}
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={todo.data.done ? styles.taskDescriptionDone : styles.taskDescription}>
                    {todo.data.description}
                </Text>
                <TouchableOpacity style={styles.todoChecked} onPress={handleOnTodoChecked}>
                    <Checked color={todo.data.done ? ColorGuide.GREY : ColorGuide.WHITE} />
                </TouchableOpacity>
            </View>
            {todo.data.deadline && (
                <Text style={[styles.taskDeadline, todo.data.done && { color: ColorGuide.BLACK }]}>
                    Deadline: {formattedDeadline}
                </Text>
            )}
        </TouchableOpacity>
    );
};
