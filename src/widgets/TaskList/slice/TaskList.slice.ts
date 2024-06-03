import { createSlice } from "@reduxjs/toolkit";
import { TasksStoreConfig } from "./config/TasksStore.config.ts";

const initialState: TasksStoreConfig = {
    tasks: [
        { id: "1", title: "Task 1" },
        { id: "2", title: "Task 2" },
        { id: "3", title: "Task 3" },
    ],
    isLoading: false,
    isError: false,
};

export const counterSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action) => {
            if (typeof action.payload === "string") {
                const newTask = {
                    id: Date.now().toString(),
                    title: action.payload,
                };
                state.tasks = [...state.tasks, newTask];
            }
        },
    },
});

// Action creators are generated for each case reducer function
export const { addTask } = counterSlice.actions;

export default counterSlice.reducer;
