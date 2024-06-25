import styles from "./Dropdown.styles.ts";
import { Text, TouchableOpacity, View } from "react-native";

interface DropdownProps {
    filter: string;
    handleFilterSelect: (value: string) => void;
}

export const Dropdown = (props: DropdownProps) => {
    const { filter, handleFilterSelect } = props;

    return (
        <>
            <View style={styles.dropdown}>
                <TouchableOpacity
                    style={styles.dropdownItem}
                    onPress={() => handleFilterSelect("all")}
                >
                    <Text style={filter === "all" ? styles.selected : styles.unselected}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.dropdownItem}
                    onPress={() => handleFilterSelect("done")}
                >
                    <Text style={filter === "done" ? styles.selected : styles.unselected}>
                        Done
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.dropdownItem}
                    onPress={() => handleFilterSelect("deadline")}
                >
                    <Text style={filter === "deadline" ? styles.selected : styles.unselected}>
                        Deadline
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    );
};
