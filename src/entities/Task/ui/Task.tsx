import { Button, Text, View } from "react-native";
import { TaskProps } from "src/shared/types/taskTypes/taskConfigWithId.ts";
import { useState } from "react";
import CheckBox from "@react-native-community/checkbox";
import styles from "./Task.styles.ts";
import { useAppDispatch } from "src/shared/hooks/reduxHooks.ts";
import { deleteTask } from "src/shared/firebase/cloud/api/deleteTask/deleteTask.ts";

export const Task = (props: TaskProps) => {
    const { task } = props;

    const dispatch = useAppDispatch();

    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const [isDisabled, setDisabled] = useState(false);

    const handleDelete = () => {
        dispatch(deleteTask(task.id));
    };
    return (
        <View key={task.id} style={styles.task}>
            <CheckBox
                disabled={isDisabled}
                onValueChange={() => setToggleCheckBox(!toggleCheckBox)}
                value={toggleCheckBox}
            />
            <Text style={styles.text}>{task.data.title}</Text>
            {/*<Button title={"Del"} onPress={handleDelete} />*/}
        </View>
    );
};
