import { createAsyncThunk } from "@reduxjs/toolkit";
import { TaskConfigWithId } from "src/shared/types/taskTypes/taskConfigWithId.ts";
import { db } from "src/shared/firebase/cloud";
import { doc, updateDoc } from "firebase/firestore";

export const editTask = createAsyncThunk<TaskConfigWithId, TaskConfigWithId>(
    "tasks/editTask",
    async (task: TaskConfigWithId) => {
        if (task.data.title && task.data.title.trim() !== "") {
            const docRef = doc(db, "Tasks", task.id);
            const updateData = {
                ...task.data,
                deadline: task.data.deadline,
                img: task.data.img,
            };
            await updateDoc(docRef, updateData);
            return task;
        } else {
            throw new Error("Title should be a string.");
        }
    },
);
