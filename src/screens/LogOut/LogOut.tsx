import styles from "./LogOut.styles.ts";
import { AppHeader } from "src/shared/ui/Headers/AppHeader.tsx";
import { NavigationProps, Screens } from "src/shared/types/navigationTypes/navigationTypes.ts";
import { Text, View } from "react-native";
import Illustration from "src/shared/assets/icons/illustration.svg";
import { AuthButton } from "src/shared/ui/Buttons/AuthButton/AuthButton.tsx";
import { FIREBASE_AUTH } from "src/shared/firebase/cloud";
import { signOut } from "firebase/auth";

export const LogOut = () => {
    const handleOnLogOut = async () => {
        await signOut(FIREBASE_AUTH);
        // navigation.navigate("SignIn");
    };

    return (
        <>
            <AppHeader text={"TO DO LIST"} buttons={[]} screen={Screens.LOGOUT} />
            <View style={styles.rootContainer}>
                <View style={styles.logo}>
                    <Illustration />
                </View>
                <View style={styles.userInfo}>
                    <Text>p</Text>
                    <Text>p</Text>
                    <Text>p</Text>
                </View>
                <AuthButton buttonTitle={"LOGOUT"} onPress={handleOnLogOut} />
            </View>
        </>
    );
};
