import React from "react";
import { SafeAreaView } from "react-native";
import { TaskList } from "../../widgets/TaskList/ui/TaskList.tsx";
import style from "./App.styles.ts";
import { ReduxProvider } from "../providers/ReduxProvider.tsx";

function App(): React.JSX.Element {
    return (
        <ReduxProvider>
            <SafeAreaView style={style.app}>
                <TaskList />
            </SafeAreaView>
        </ReduxProvider>
    );
}

export default App;
