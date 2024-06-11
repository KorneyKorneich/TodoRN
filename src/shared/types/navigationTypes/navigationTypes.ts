import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

export type RootStackParamList = {
    Home: undefined;
    TaskEdit: { taskId: string } | undefined;
    // Feed: { sort: 'latest' | 'top' } | undefined;
};

export type NavigationProps = NativeStackScreenProps<RootStackParamList, "Home", "TaskEdit">;
export const useAppNavigation = () =>
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
