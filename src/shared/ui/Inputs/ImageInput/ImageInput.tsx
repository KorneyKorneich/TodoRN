import styles from "./ImageInput.styles.ts";
import { Image, Modal, SafeAreaView, TextInput, TouchableOpacity, View } from "react-native";
import { ColorGuide } from "src/shared/types/styles/styleConstants.ts";
import { ImageLibraryOptions, launchImageLibrary } from "react-native-image-picker";
import React, { useState, useEffect } from "react";
import { ImageComponent } from "src/shared/assets/icons/ImageComponent.tsx";
import { ModalButton } from "src/shared/ui/Buttons/ModalButton/ModalButton.tsx";
import { TodoImgConfig } from "src/shared/types/taskTypes/taskConfigWithId.ts";

interface ImageInputProps {
    onImageChange: (image: { downloadURL: string; filename: string }) => void;
    taskImg?: TodoImgConfig;
}

export const ImageInput = ({ onImageChange, taskImg }: ImageInputProps) => {
    const [selectedImage, setSelectedImage] = useState<string>("");
    const [pictureName, setPictureName] = useState<string>("");
    const [isPictureVisible, setIsPictureVisible] = useState<boolean>(false);

    useEffect(() => {
        if (taskImg) {
            setSelectedImage(taskImg.downloadURL ?? "");
            setPictureName(taskImg.filename ?? "");
        }
    }, [taskImg]);

    const ImagePicker = () => {
        const options: ImageLibraryOptions = {
            mediaType: "photo",
            includeBase64: false,
            quality: 0.5,
        };
        launchImageLibrary(options, (response) => {
            if (response.assets) {
                setSelectedImage(response.assets[0].uri ?? "");
                onImageChange({
                    downloadURL: response.assets[0].uri ?? "",
                    filename: response.assets[0].fileName ?? "",
                });
                setPictureName(response.assets[0].fileName ?? "");
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
                        style={[
                            styles.default,
                            pictureName !== "" ? styles.imageName : styles.emptyInput,
                        ]}
                        value={pictureName || (selectedImage ? "Check out image" : "")}
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
