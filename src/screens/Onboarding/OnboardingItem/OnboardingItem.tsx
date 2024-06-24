import styles from "./OnboardingItem.styles.ts";
import { Image, Text, useWindowDimensions, View } from "react-native";
import { ImageSourcePropType } from "react-native/Libraries/Image/Image";
import { HEIGHT } from "src/shared/types/styles/styleConstants.ts";
import { SlideProp } from "../config/type.ts";

interface OnboardingItemProps {
    item: SlideProp;
}

export const OnboardingItem = (props: OnboardingItemProps) => {
    const { item } = props;
    const { width } = useWindowDimensions();
    return (
        <>
            <View key={item.id} style={[styles.container, { width }]}>
                <Image
                    source={item.image}
                    style={[styles.image, { width: width, resizeMode: "center" }]}
                />
                <View style={{ flex: 0.3 }}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                </View>
            </View>
        </>
    );
};
