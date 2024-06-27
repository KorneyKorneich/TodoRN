import { onAuthStateChanged } from "firebase/auth";
import { Home } from "src/screens/Home/ui/Home.tsx";
import { TaskDetails } from "src/screens/TaskDetails/TaskDetails.tsx";
import { NavigationContainer } from "@react-navigation/native";
import { SignIn } from "src/screens/SignIn/SignIn.tsx";
import { SignUp } from "src/screens/SignUp/SignUp.tsx";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackParamList } from "src/shared/types/navigationTypes/navigationTypes.ts";
import { FIREBASE_AUTH } from "src/shared/firebase/cloud";
import { useAppDispatch, useAppSelector } from "src/shared/hooks/reduxHooks.ts";
import { setUser } from "src/shared/slices/UserSlice/userSlice.ts";
import { useEffect } from "react";
import { LogOut } from "src/screens/LogOut/LogOut.tsx";

export const NavigationProvider = () => {
    const Stack = createNativeStackNavigator<StackParamList>();
    const user = useAppSelector((state) => state.user.userData);
    const dispatch = useAppDispatch();

    useEffect(() => {
        onAuthStateChanged(FIREBASE_AUTH, (u) => {
            console.log("got user!", u);
            dispatch(setUser(u));
        });
    }, [user]);
    console.log(user);

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                {user !== null ? (
                    <Stack.Group initialRouteName="Home">
                        <Stack.Screen name="Home" component={Home} />
                        <Stack.Screen name="TaskDetails" component={TaskDetails} />
                        <Stack.Screen name="Logout" component={LogOut} />
                    </Stack.Group>
                ) : (
                    <Stack.Group initialRouteName="SignUp">
                        {/*<Stack.Screen name="Welcome" component={Welcome} />*/}
                        <Stack.Screen name="SignIn" component={SignIn} />
                        <Stack.Screen name="SignUp" component={SignUp} />
                        {/*<Stack.Screen name="ChangePassword" component={ChangePassword} />*/}
                    </Stack.Group>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};
