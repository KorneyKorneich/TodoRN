import { createSlice } from "@reduxjs/toolkit";
import { TasksStoreConfig } from "./config/TasksStore.config.ts";
import { addTaskToDB } from "src/shared/firebase/cloud/api/addTask/addTask.ts";
import { getTasksList } from "src/shared/firebase/cloud/api/getTaskList/getTasksList.ts";
import { TaskConfigWithId } from "src/shared/types/taskTypes/taskConfigWithId.ts";
import { deleteTask } from "src/shared/firebase/cloud/api/deleteTask/deleteTask.ts";

const initialState: TasksStoreConfig = {
    tasks: [],
    isLoading: false,
    isError: false,
};

export const counterSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addTaskToDB.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })

            .addCase(addTaskToDB.fulfilled, (state, action) => {
                state.isLoading = false;
                const payload = action.payload;

                const task = {
                    ...payload,
                    data: {
                        ...payload.data,
                        deadline: payload.data.deadline || null,
                        img: payload.data.img || null,
                    },
                };
                state.tasks.push(task);
            })

            .addCase(addTaskToDB.rejected, (state) => {
                state.isError = true;
                state.isLoading = false;
            });

        builder
            .addCase(getTasksList.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })

            .addCase(getTasksList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.tasks = action.payload as TaskConfigWithId[];
            })

            .addCase(getTasksList.rejected, (state) => {
                state.isError = true;
                state.isLoading = false;
            });

        builder
            .addCase(deleteTask.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })

            .addCase(deleteTask.fulfilled, (state, action) => {
                state.isLoading = false;
                state.tasks = state.tasks.filter((task) => task.id !== action.payload);
            })

            .addCase(deleteTask.rejected, (state) => {
                state.isError = true;
                state.isLoading = false;
            });
    },
});

export default counterSlice.reducer;
