import "react-native-get-random-values";
import axios from "axios";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "src/shared/firebase/cloud";

export async function uploadImageAsync(timestamp: string, uri: string) {
    try {
        const response = await axios.get(uri, {
            responseType: "blob",
        });

        const blob = response.data;

        const fileRef = ref(storage, `Tasks/${timestamp}`);
        await uploadBytes(fileRef, blob);

        if (blob && typeof blob.close === "function") {
            blob.close();
        }

        return {
            downloadUrl: await getDownloadURL(fileRef),
            filename: fileRef.name,
        };
    } catch (error) {
        throw new Error("Network request failed");
    }
}
