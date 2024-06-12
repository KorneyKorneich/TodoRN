import { addDoc, collection, db } from "src/shared/firebase/cloud";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { TaskConfigWithId, TaskConfig } from "src/shared/types/taskTypes/taskConfigWithId.ts";
import { ErrorTexts } from "src/shared/firebase/cloud/errorTexts/ErrorTexts.ts";

export const addTaskToDB = createAsyncThunk<TaskConfigWithId, TaskConfig>(
    "tasks/addTaskToDB",
    async (task: TaskConfig) => {
        if (task.title && task.title.trim() !== "") {
            const docRef = await addDoc(collection(db, "Tasks"), task);
            console.log("id:", docRef.id);
            return { id: docRef.id, data: task };
        } else {
            throw new Error(ErrorTexts.TitleStringRequired);
        }
    },
);
