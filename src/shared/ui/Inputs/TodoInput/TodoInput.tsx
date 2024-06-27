import styles from "./TodoInput.styles.ts";
import { TextInput, View } from "react-native";
import { ColorGuide } from "src/shared/types/styles/styleConstants.ts";
import { InputType } from "src/shared/types/uiConst/const.ts";
import React from "react";

interface TodoTitleInputProps {
    value: string;
    onChange: (text: string) => void;
    inputType?: InputType;
}

export const TodoInput = (props: TodoTitleInputProps) => {
    const { inputType, value, onChange } = props;

    const handleOnChange = (text: string) => {
        onChange(text);
    };

    const getInputTypeStyles = () => {
        switch (inputType) {
            case InputType.DESCRIPTION:
                return styles.description;

            case InputType.TITLE:
                return styles.title;

            case undefined:
                return {};
        }
    };

    return (
        <View style={styles.container}>
            {inputType === InputType.TITLE ? (
                <TextInput
                    placeholder={inputType}
                    placeholderTextColor={ColorGuide.WHITE}
                    style={[styles.default, getInputTypeStyles()]}
                    value={value}
                    onChangeText={handleOnChange}
                />
            ) : (
                <TextInput
                    placeholder={inputType}
                    placeholderTextColor={ColorGuide.WHITE}
                    style={[styles.default, getInputTypeStyles()]}
                    value={value}
                    onChangeText={handleOnChange}
                    multiline={true}
                    numberOfLines={1000}
                />
            )}
        </View>
    );
};
