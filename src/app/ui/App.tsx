import React from "react";
import { SafeAreaView } from "react-native";
import style from "./App.styles.ts";
import { ReduxProvider } from "../providers/Redux/ReduxProvider.tsx";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationProvider } from "src/app/providers/Navigation/NavigationProvider.tsx";

function App(): React.JSX.Element {
    return (
        <GestureHandlerRootView>
            <ReduxProvider>
                <SafeAreaView style={style.app}>
                    <NavigationProvider />
                </SafeAreaView>
            </ReduxProvider>
        </GestureHandlerRootView>
    );
}

export default App;
