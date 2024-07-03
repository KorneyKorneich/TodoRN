import styles from "./Paginator.styles.ts";
import { SlideProp } from "../config/type.ts";
import { Animated, View, useWindowDimensions } from "react-native";

interface PaginatorProps {
    data: SlideProp[];
    scrollX: Animated.Value;
}

export const Paginator = (props: PaginatorProps) => {
    const { data, scrollX } = props;
    const { width } = useWindowDimensions();
    return (
        <>
            <View style={{ flexDirection: "row", height: 64 }}>
                {data.map((_, i) => {
                    const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
                    const dotWidth = scrollX.interpolate({
                        inputRange,
                        outputRange: [10, 20, 10],
                        extrapolate: "clamp",
                    });
                    const opacity = scrollX.interpolate({
                        inputRange,
                        outputRange: [0.3, 1, 0.3],
                        extrapolate: "clamp",
                    });
                    return (
                        <Animated.View
                            style={[styles.dot, { width: dotWidth, opacity }]}
                            key={i.toString()}
                        />
                    );
                })}
            </View>
        </>
    );
};
