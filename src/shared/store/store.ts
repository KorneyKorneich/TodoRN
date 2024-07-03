import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "../../widgets/TaskList";
import userReducer from "src/shared/slices/UserSlice/userSlice";

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ["*"],
                ignoredActionPaths: ["payload"],
                ignoredPaths: ["tasks", "user"],
                warnAfter: Infinity,
            },
        }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type.ts: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
