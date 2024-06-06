import { collection, db } from "src/shared/firebase/cloud";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDocs, deleteDoc, doc } from "firebase/firestore";

export const deleteTask = createAsyncThunk<string, string>(
    "tasks/deleteTask",
    async (taskId: string) => {
        const tasks = await getDocs(collection(db, "Tasks"));
        for (const snap of tasks.docs) {
            if (snap.id === taskId) {
                await deleteDoc(doc(db, "Tasks", snap.id));
            }
        }
        return taskId;
    },
);
