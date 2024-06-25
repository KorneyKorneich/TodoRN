import styles from "./ImageInput.styles.ts";
import { Image, Modal, SafeAreaView, TextInput, TouchableOpacity, View } from "react-native";
import { ColorGuide } from "src/shared/types/styles/styleConstants.ts";
import { ImageLibraryOptions, launchImageLibrary } from "react-native-image-picker";
import React, { useState } from "react";
import { ImageComponent } from "src/shared/assets/icons/ImageComponent.tsx";
import { ModalButton } from "src/shared/ui/Buttons/ModalButton/ModalButton.tsx";

interface ImageInputProps {
    onImageChange: (image: string) => void;
    taskImg?: string;
}

export const ImageInput = ({ onImageChange, taskImg }: ImageInputProps) => {
    const [selectedImage, setSelectedImage] = useState<string | undefined>(taskImg ?? undefined);
    const [isPictureVisible, setIsPictureVisible] = useState<boolean>(false);

    const ImagePicker = () => {
        const options: ImageLibraryOptions = {
            mediaType: "photo",
            includeBase64: false,
            quality: 0.5,
        };
        launchImageLibrary(options, (response) => {
            if (response.assets) {
                setSelectedImage(response.assets[0].uri);
                onImageChange(response.assets[0].uri ?? "");
            }
        });
    };

    const handleOnIconPress = () => {
        ImagePicker();
    };

    const togglePicture = () => {
        setIsPictureVisible(!isPictureVisible);
    };

    return (
        <>
            <View
                style={[styles.container, selectedImage ? styles.filledInput : styles.emptyInput]}
            >
                <View style={styles.imageInputContainer}>
                    <TextInput
                        placeholder={"Picture (optional)"}
                        placeholderTextColor={selectedImage ? ColorGuide.WHITE : ColorGuide.GREY}
                        style={[
                            styles.default,
                            selectedImage ? styles.imageName : styles.emptyInput,
                        ]}
                        value={selectedImage ? "Check out image" : ""}
                        editable={false}
                        onPressIn={selectedImage !== "" ? togglePicture : undefined}
                    />
                </View>
                <TouchableOpacity onPress={handleOnIconPress}>
                    <ImageComponent color={selectedImage ? ColorGuide.WHITE : ColorGuide.GREY} />
                </TouchableOpacity>
            </View>
            {isPictureVisible && (
                <Modal
                    animationType="fade"
                    visible={isPictureVisible}
                    onRequestClose={togglePicture}
                >
                    <SafeAreaView style={styles.modalWrapper}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={{ uri: selectedImage }} />
                            <ModalButton onPress={togglePicture} buttonTitle="CLOSE" />
                        </View>
                    </SafeAreaView>
                </Modal>
            )}
        </>
    );
};
