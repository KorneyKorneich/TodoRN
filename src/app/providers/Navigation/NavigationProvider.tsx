import { onAuthStateChanged } from "firebase/auth";
import { Home } from "src/screens/Home/ui/Home.tsx";
import { TaskDetails } from "src/screens/TaskDetails/TaskDetails.tsx";
import { NavigationContainer } from "@react-navigation/native";
import { SignIn } from "src/screens/SignIn/SignIn.tsx";
import { SignUp } from "src/screens/SignUp/SignUp.tsx";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackParamList } from "src/shared/types/navigationTypes/navigationTypes.ts";
import { useAppDispatch, useAppSelector } from "src/shared/hooks/reduxHooks.ts";
import { setIsLoading, setUser } from "src/shared/slices/UserSlice/userSlice.ts";
import { useEffect, useState } from "react";
import { LogOut } from "src/screens/LogOut/LogOut.tsx";
import { OnboardingComponent } from "src/screens/Onboarding/OnboardingComponent/OnboardingComponent.tsx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FIREBASE_AUTH } from "src/shared/firebase/cloud";

export const NavigationProvider = () => {
    const Stack = createNativeStackNavigator<StackParamList>();
    const user = useAppSelector((state) => state.user.userData);
    const dispatch = useAppDispatch();
    const [viewedOnboarding, setViewOnboarding] = useState(false);
    const checkOnboarding = async () => {
        try {
            const value = await AsyncStorage.getItem("@viewedOnboarding");
            if (value) {
                setViewOnboarding(true);
            }
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        setIsLoading(true);
        onAuthStateChanged(FIREBASE_AUTH, (u) => {
            dispatch(setUser(u));
            setIsLoading(false);
        });
    }, [user]);

    useEffect(() => {
        checkOnboarding();
    }, []);
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
                    <>
                        <Stack.Group initialRouteName="SignUp">
                            {!viewedOnboarding ? (
                                <Stack.Screen name={"Onboarding"} component={OnboardingComponent} />
                            ) : null}
                            <Stack.Screen name="SignIn" component={SignIn} />
                            <Stack.Screen name="SignUp" component={SignUp} />
                        </Stack.Group>
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};
