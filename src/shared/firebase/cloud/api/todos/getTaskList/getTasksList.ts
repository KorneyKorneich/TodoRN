import { collection, db } from "src/shared/firebase/cloud";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDocs, QuerySnapshot, DocumentData } from "firebase/firestore";
import { dbGetTasksResponse } from "src/shared/types/taskTypes/taskConfigWithId.ts";

export const getTasksList = createAsyncThunk<dbGetTasksResponse[], void>(
    "tasks/getTasksList",
    async () => {
        const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(collection(db, "Tasks"));
        const tasksList: dbGetTasksResponse[] = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
        }));
        return tasksList;
    },
);
