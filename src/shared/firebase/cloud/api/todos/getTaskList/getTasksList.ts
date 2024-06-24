import { collection, db, FIREBASE_AUTH } from "src/shared/firebase/cloud";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDocs, query, where } from "firebase/firestore";
import { dbGetTasksResponse } from "src/shared/types/taskTypes/taskConfigWithId.ts";

export const getTasksList = createAsyncThunk<dbGetTasksResponse[], void>(
    "tasks/getTasksList",
    async () => {
        const q = query(
            collection(db, "Tasks"),
            where("userId", "==", FIREBASE_AUTH.currentUser?.uid),
        );

        const querySnapshot = await getDocs(q);

        const tasksList: dbGetTasksResponse[] = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
        }));
        return tasksList;
    },
);
