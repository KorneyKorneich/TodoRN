import styles from "./NextButton.styles.ts";
import { Animated, TouchableOpacity, View } from "react-native";
import Svg, { Circle, G } from "react-native-svg";
import { ColorGuide } from "src/shared/types/styles/styleConstants.ts";
import { ChevronRight } from "src/shared/assets/icons/chevron-right.tsx";
import { useEffect, useRef } from "react";

interface NextButtonProps {
    percentage: number;
    scrollTo: () => void;
}

export const NextButton = (props: NextButtonProps) => {
    const { percentage, scrollTo } = props;
    const size = 90;
    const strokeWidth = 2;
    const center = size / 2;
    const radius = size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;

    const progressAnimation = useRef(new Animated.Value(0)).current;
    const progressRef = useRef<Circle | null>(null);

    const animation = (toValue: number) => {
        return Animated.timing(progressAnimation, {
            toValue,
            duration: 250,
            useNativeDriver: true,
        }).start();
    };

    useEffect(() => {
        animation(percentage);
    }, [percentage]);

    useEffect(() => {
        progressAnimation.addListener((value) => {
            const strokeDashoffset = circumference - (circumference * value.value) / 100;
            if (progressRef?.current) {
                progressRef.current.setNativeProps({
                    strokeDashoffset,
                });
            }
        });
        return () => {
            progressAnimation.removeAllListeners();
        };
    }, []);

    return (
        <>
            <View style={styles.container}>
                <Svg width={size} height={size} fill={"none"}>
                    <G rotation="-90" origin={center}>
                        <Circle
                            stroke={ColorGuide.GREY}
                            cx={center}
                            cy={center}
                            r={radius}
                            strokeWidth={strokeWidth}
                        />
                        <Circle
                            ref={progressRef}
                            stroke={ColorGuide.PRIMARY_COLOR}
                            cx={center}
                            cy={center}
                            r={radius}
                            strokeWidth={strokeWidth}
                            strokeDasharray={circumference}
                        />
                    </G>
                </Svg>
                <TouchableOpacity onPress={scrollTo} style={styles.button} activeOpacity={0.6}>
                    <ChevronRight color={ColorGuide.WHITE} />
                </TouchableOpacity>
            </View>
        </>
    );
};
