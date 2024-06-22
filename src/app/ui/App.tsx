import React from "react";
import { SafeAreaView } from "react-native";
import style from "./App.styles.ts";
import { ReduxProvider } from "../providers/Redux/ReduxProvider.tsx";
// import { NavigationProvider } from "src/app/providers/Navigation/NavigationProvider.tsx";
import { GestureHandlerRootView } from "react-native-gesture-handler";
// import { SignIn } from "src/screens/SignIn/SignIn.tsx";
// import { SignUp } from "src/screens/SignUp/SignUp.tsx";
import { NavigationProvider } from "src/app/providers/Navigation/NavigationProvider.tsx";
import { LogOut } from "src/screens/LogOut/LogOut.tsx";

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
