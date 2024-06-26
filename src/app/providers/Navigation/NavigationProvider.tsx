import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "src/screens/Home/ui/Home.tsx";
import { TaskDetails } from "src/screens/TaskDetails/TaskDetails.tsx";
import { RootStackParamList } from "src/shared/types/navigationTypes/navigationTypes.ts";

export const NavigationProvider = () => {
    const Stack = createNativeStackNavigator<RootStackParamList>();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="TaskDetails" component={TaskDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
