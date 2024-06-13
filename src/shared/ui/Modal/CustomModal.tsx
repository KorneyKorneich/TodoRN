import styles from "./CustomModal.styles.ts";
import React from "react";
import { Pressable, View } from "react-native";
import Animated, {
    FadeIn,
    FadeOut,
    runOnJS,
    SlideInDown,
    SlideOutDown,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming,
} from "react-native-reanimated";
import { ModalButton } from "src/shared/ui/Buttons/ModalButton/ModalButton.tsx";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { HEIGHT, OVERDRAG } from "src/shared/types/styles/styleConstants.ts";

interface CustomModalProps {
    content: React.ReactNode;
    buttonTitle?: string;
    handleOnPressButton: () => void;
    toggleModal: () => void;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const CustomModal = (props: CustomModalProps) => {
    const { toggleModal, handleOnPressButton, buttonTitle, content } = props;
    const offset = useSharedValue(0);

    const panGesture = Gesture.Pan()
        .onChange((event) => {
            const offsetDelta = event.changeY + offset.value;
            const clamp = Math.max(-OVERDRAG, offsetDelta);

            offset.value = offsetDelta > 0 ? offsetDelta : withSpring(clamp);
        })
        .onFinalize(() => {
            if (offset.value < HEIGHT / 6) {
                offset.value = withSpring(0);
            } else {
                offset.value = withTiming(HEIGHT, {}, () => {
                    runOnJS(toggleModal)();
                });
            }
        });

    const translateY = useAnimatedStyle(() => ({
        transform: [{ translateY: offset.value }],
    }));

    return (
        <>
            <AnimatedPressable
                entering={FadeIn}
                exiting={FadeOut}
                style={styles.backdrop}
                onPress={toggleModal}
            />
            <GestureDetector gesture={panGesture}>
                <Animated.View
                    style={[styles.container, translateY]}
                    entering={SlideInDown.springify().damping(15)}
                    exiting={SlideOutDown}
                >
                    <View style={styles.rectContainer}>
                        <View style={styles.rect} />
                    </View>
                    <View style={styles.content}>{content}</View>
                    <ModalButton onPress={handleOnPressButton} buttonTitle={buttonTitle} />
                </Animated.View>
            </GestureDetector>
        </>
    );
};
