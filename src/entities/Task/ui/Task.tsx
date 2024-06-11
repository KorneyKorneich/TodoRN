import { Button, Text, View } from "react-native";
import { TaskProps } from "src/shared/types/taskTypes/taskConfigWithId.ts";
import { useState } from "react";
import CheckBox from "@react-native-community/checkbox";
import styles from "./Task.styles.ts";
import { useAppDispatch } from "src/shared/hooks/reduxHooks.ts";
import { deleteTask } from "src/shared/firebase/cloud/api/deleteTask/deleteTask.ts";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useAppNavigation } from "src/shared/types/navigationTypes/navigationTypes.ts";

type TaskComponentProps = {
    task: TaskProps["task"];
};

export const Task = (props: TaskComponentProps) => {
    const { task } = props;
    const dispatch = useAppDispatch();

    const navigation = useAppNavigation();

    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const [isDisabled, setDisabled] = useState(false);

    const handleOnPress = () => {
        navigation.navigate("TaskEdit");
    };

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
            <Text onPress={handleOnPress} style={styles.text}>
                {task.data.title}
            </Text>
            <Button title={"Del"} onPress={handleDelete} />
        </View>
    );
};
