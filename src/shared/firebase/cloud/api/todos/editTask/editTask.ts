import { createAsyncThunk } from "@reduxjs/toolkit";
import { TaskConfigWithId } from "src/shared/types/taskTypes/taskConfigWithId.ts";
import { db, ref, storage } from "src/shared/firebase/cloud";
import { doc, updateDoc } from "firebase/firestore";
import { swapFiles } from "src/shared/firebase/cloud/api/todos/swapFiles/swapFiles.ts";

export const editTask = createAsyncThunk<TaskConfigWithId, TaskConfigWithId>(
    "tasks/editTask",
    async (task: TaskConfigWithId) => {
        if (task.data.title && task.data.title.trim() !== "") {
            const docRef = doc(db, "Tasks", task.id);
            const storageRef = ref(storage, task.data.timeStamp.toString());
            if (task.data.img.downloadURL) {
                const updatedImg = await swapFiles(
                    task.data.timeStamp.toString(),
                    task.data.img.downloadURL,
                );
                task.data.img.downloadURL = updatedImg.downloadURL;
                task.data.img.filename = updatedImg.filename;
            }

            const updateData = {
                ...task.data,
                deadline: task.data.deadline || null,
                img: task.data.img || null,
            };
            await updateDoc(docRef, updateData);
            return task;
        } else {
            throw new Error("Title should be a string.");
        }
    },
);
