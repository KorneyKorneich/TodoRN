import { addDoc, collection, db } from "src/shared/firebase/cloud";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { TaskConfigWithId, TaskConfig } from "src/shared/types/taskTypes/taskConfigWithId.ts";

export const addTaskToDB = createAsyncThunk<TaskConfigWithId, TaskConfig>(
    "tasks/addTaskToDB",
    async (task: TaskConfig) => {
        if (task.title && task.title.trim() !== "") {
            const docRef = await addDoc(collection(db, "Tasks"), task);
            return { id: docRef.id, data: task };
        } else {
            throw new Error("Title should be a string.");
        }
    },
);
