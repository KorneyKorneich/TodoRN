import { TaskList } from "src/widgets/TaskList/ui/TaskList.tsx";
import { Text } from "react-native";
import styles from "./Home.styles.ts";

export const Home = () => {
    return (
        <>
            <Text style={styles.title}>Todoshka</Text>
            <TaskList />
        </>
    );
};
