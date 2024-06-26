import "react-native-get-random-values";
import axios from "axios";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuid_v4 } from "uuid";

export async function uploadImageAsync(uri: string) {
    try {
        const response = await axios.get(uri, {
            responseType: "blob",
        });

        const blob = response.data;

        const fileRef = ref(getStorage(), uuid_v4());
        await uploadBytes(fileRef, blob);

        if (blob && typeof blob.close === "function") {
            blob.close();
        }

        return await getDownloadURL(fileRef);
    } catch (error) {
        console.error("Error uploading image:", error);
        throw new Error("Network request failed");
    }
}
