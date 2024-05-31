import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";
import { TaskList } from "../../widgets/TaskList/ui/TaskList.tsx";
import { Provider } from "react-redux";
import { store } from "../store/store.ts";
import style from "./App.styles.ts";

function App(): React.JSX.Element {
    return (
        <Provider store={store}>
            <SafeAreaView style={style.app}>
                <TaskList />
            </SafeAreaView>
        </Provider>
    );
}

export default App;
