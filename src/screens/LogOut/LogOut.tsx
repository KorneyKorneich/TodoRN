import styles from "./LogOut.styles.ts";
import { AppHeader } from "src/shared/ui/Headers/AppHeader.tsx";
import { Screens } from "src/shared/types/navigationTypes/navigationTypes.ts";
import { Text, View } from "react-native";
import Illustration from "src/shared/assets/icons/illustration.svg";
import { AuthButton } from "src/shared/ui/Buttons/AuthButton/AuthButton.tsx";
import { FIREBASE_AUTH } from "src/shared/firebase/cloud";
import { signOut } from "firebase/auth";
import { useAppSelector } from "src/shared/hooks/reduxHooks.ts";

export const LogOut = () => {
    const handleOnLogOut = async () => {
        await signOut(FIREBASE_AUTH);
    };
    const userInfo = useAppSelector((state) => state.user.userData);
    return (
        <>
            <AppHeader text={"TO DO LIST"} buttons={[]} screen={Screens.LOGOUT} />
            <View style={styles.rootContainer}>
                <View style={styles.contentContainer}>
                    <View style={styles.logo}>
                        <Illustration />
                    </View>
                    <View style={styles.userInfo}>
                        <View style={styles.textContainer}>
                            <Text style={styles.title}>Email</Text>
                            <Text style={styles.content}>{userInfo!.email}</Text>
                        </View>
                    </View>
                    <AuthButton buttonTitle={"LOG OUT"} onPress={handleOnLogOut} />
                </View>
            </View>
        </>
    );
};
