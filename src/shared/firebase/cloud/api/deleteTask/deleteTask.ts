import { db, ref, storage } from "src/shared/firebase/cloud";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject } from "firebase/storage";
import { Nullable } from "src/shared/types/rootTypes/rootTypes.ts";

interface deleteTaskArgs {
    taskId: string;
    timestamp: Nullable<string>;
}

export const deleteTask = createAsyncThunk<string, deleteTaskArgs>(
    "tasks/deleteTask",
    async ({ taskId, timestamp }: deleteTaskArgs) => {
        const docRef = doc(db, "Tasks", taskId);
        if (timestamp) {
            const desertRef = ref(storage, `Tasks/${timestamp}`);
            deleteObject(desertRef);
        }
        await deleteDoc(docRef);

        return taskId;
    },
);
