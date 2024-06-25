import React from "react";
import { FlatList, View, Animated } from "react-native";
import { onboardingSlides as slides } from "src/screens/Onboarding/assets/OnboardingSlides.ts";
import { useRef, useState } from "react";
import { OnboardingItem } from "src/screens/Onboarding/OnboardingItem/OnboardingItem.tsx";
import styles from "./OnboardingComponent.styles.ts";
import { Paginator } from "src/screens/Onboarding/Paginator/Paginator.tsx";
import { SlideProp } from "../config/type.ts";
import { NextButton } from "src/screens/Onboarding/NextButton/NextButton.tsx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationProps } from "src/shared/types/navigationTypes/navigationTypes.ts";

export const OnboardingComponent = ({ navigation }: NavigationProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef<FlatList<SlideProp>>(null);
    const renderItem = ({ item }: { item: SlideProp }) => {
        return <OnboardingItem item={item} />;
    };

    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const scrollTo = async () => {
        if (currentIndex < slides.length - 1) {
            slidesRef.current?.scrollToIndex({ index: currentIndex + 1 });
        } else {
            try {
                await AsyncStorage.setItem("@viewedOnboarding", "true");
                navigation.navigate("SignIn");
            } catch (err) {
                throw err;
            }
        }
    };

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    return (
        <View style={styles.container}>
            <View style={{ flex: 5 }}>
                <FlatList
                    data={slides}
                    renderItem={renderItem}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    bounces={false}
                    keyExtractor={(item) => item.id.toString()}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                        useNativeDriver: false,
                    })}
                    scrollEventThrottle={32}
                    ref={slidesRef}
                    onViewableItemsChanged={viewableItemsChanged}
                    viewabilityConfig={viewConfig}
                />
            </View>

            <Paginator data={slides} scrollX={scrollX} />
            <NextButton
                scrollTo={scrollTo}
                percentage={(currentIndex + 1) * (100 / slides.length)}
            />
        </View>
    );
};
