import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "../../widgets/TaskList";
import userReducer from "src/shared/slices/UserSlice/userSlice";

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        user: userReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
