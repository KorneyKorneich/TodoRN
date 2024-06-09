import React from "react";
import { SafeAreaView } from "react-native";
import { TaskList } from "../../widgets/TaskList/ui/TaskList.tsx";
import style from "./App.styles.ts";
import { ReduxProvider } from "../providers/ReduxProvider.tsx";
import { Home } from "src/screens/Home/Home.tsx";

function App(): React.JSX.Element {
    return (
        <ReduxProvider>
            <SafeAreaView style={style.app}>
                <Home />
            </SafeAreaView>
        </ReduxProvider>
    );
}

export default App;
