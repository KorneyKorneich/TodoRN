import { StyleSheet, Text, View } from "react-native";
import { TaskProps } from "../config/task.config.ts";
import { useState } from "react";
import CheckBox from "@react-native-community/checkbox";
import styles from "./Task.styles.ts";

export const Task = (props: TaskProps) => {
    const { task } = props;

    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const [isDisabled, setDisabled] = useState(false);

    return (
        <View key={task.id} style={styles.task}>
            <CheckBox
                disabled={isDisabled}
                onValueChange={() => setToggleCheckBox(!toggleCheckBox)}
                value={toggleCheckBox}
            />
            <Text style={styles.text}>{task.title}</Text>
        </View>
    );
};
