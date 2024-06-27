import styles from "./DateInput.styles.ts";
import { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { TextInput, TouchableOpacity, View } from "react-native";
import { ColorGuide } from "src/shared/types/styles/styleConstants.ts";
import CalendarIcon from "src/shared/ui/Buttons/CalendarButton/Calendar.tsx";
import { formatDate } from "src/shared/helpers/formatDate.ts";
import { Nullable } from "src/shared/types/rootTypes/rootTypes.ts";

interface DateInputProps {
    onDateChange: (date: number) => void;
    taskDate?: number;
}

export const DateInput = (props: DateInputProps) => {
    const { onDateChange, taskDate } = props;

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [dateValue, setDateValue] = useState<Nullable<Date>>(
        taskDate ? new Date(taskDate) : null,
    );

    const toggleDatePicker = () => {
        setDatePickerVisibility(!isDatePickerVisible);
    };

    const handleConfirm = (date: Date) => {
        setDateValue(new Date(date));
        onDateChange(date.valueOf());
        toggleDatePicker();
    };

    return (
        <>
            <View style={[styles.container, dateValue ? styles.filledInput : styles.emptyInput]}>
                <TextInput
                    placeholder={"Deadline (optional)"}
                    placeholderTextColor={dateValue ? ColorGuide.WHITE : ColorGuide.GREY}
                    style={styles.dateInput}
                    value={dateValue ? formatDate(dateValue) : ""}
                    readOnly={true}
                />
                <TouchableOpacity onPress={toggleDatePicker}>
                    <CalendarIcon color={dateValue ? ColorGuide.WHITE : ColorGuide.GREY} />
                </TouchableOpacity>
            </View>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={toggleDatePicker}
                display={"inline"}
            />
        </>
    );
};
