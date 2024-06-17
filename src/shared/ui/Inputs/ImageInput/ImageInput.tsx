import styles from "./ImageInput.styles.ts";
import { Image, Modal, SafeAreaView, TextInput, TouchableOpacity, View } from "react-native";
import { ColorGuide } from "src/shared/types/styles/styleConstants.ts";
import { ImageLibraryOptions, launchImageLibrary } from "react-native-image-picker";
import React, { useState } from "react";
import { ImageComponent } from "src/shared/assets/icons/ImageComponent.tsx";
import { ModalButton } from "src/shared/ui/Buttons/ModalButton/ModalButton.tsx";

interface ImageInputProps {
    onImageChange: (image: string) => void;
}

export const ImageInput: React.FC<ImageInputProps> = ({ onImageChange }) => {
    const [selectedImage, setSelectedImage] = useState<string | undefined>();
    const [pictureName, setPictureName] = useState<string | undefined>();
    const [isPictureVisible, setIsPictureVisible] = useState<boolean>(false);

    const ImagePicker = () => {
        const options: ImageLibraryOptions = {
            mediaType: "photo",
            includeBase64: false,
            quality: 0.5,
        };
        launchImageLibrary(options, (response) => {
            if (response.assets) {
                console.log(response.assets);
                // const base64Image = response.assets[0].base64 ?? "";
                // const fileName = response.assets[0].fileName ?? "";
                setSelectedImage(response.assets[0].uri);
                onImageChange(response.assets[0].uri ?? "");
                setPictureName(response.assets[0].fileName);
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
            <View style={[styles.container, pictureName ? styles.filledInput : styles.emptyInput]}>
                <View style={styles.imageInputContainer}>
                    <TextInput
                        placeholder={"Picture (optional)"}
                        placeholderTextColor={pictureName ? ColorGuide.WHITE : ColorGuide.GREY}
                        style={[styles.default, pictureName ? styles.imageName : styles.emptyInput]}
                        value={pictureName ?? ""}
                        editable={false}
                        onPressIn={pictureName ? togglePicture : undefined}
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
