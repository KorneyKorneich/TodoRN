import { deleteObject, getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { storage } from "src/shared/firebase/cloud";
import axios from "axios";

export const swapFiles = async (timestamp: string, fileUrl: string) => {
    try {
        const response = await axios.get(fileUrl, {
            responseType: "blob",
        });

        const blob = response.data;
        const directoryRef = ref(storage, "Tasks");
        const listResult = await listAll(directoryRef);

        if (listResult.items.length === 0) {
            throw new Error("No files found in the directory.");
        }
        const oldFileRef = listResult.items[0];

        await deleteObject(oldFileRef);
        const newFileRef = ref(storage, `Tasks/${timestamp}`);
        await uploadBytes(newFileRef, blob);

        const newFileUrl = await getDownloadURL(newFileRef);

        if (blob && typeof blob.close === "function") {
            blob.close();
        }
        return {
            downloadURL: newFileUrl,
            filename: newFileRef.name,
        };
    } catch (error) {
        throw error;
    }
};
