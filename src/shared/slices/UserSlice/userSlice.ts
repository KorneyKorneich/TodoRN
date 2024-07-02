import { createSlice } from "@reduxjs/toolkit";
import { UserSliceConfig } from "src/shared/slices/UserSlice/userSliceConfig.ts";

const initialState: UserSliceConfig = {
    userData: null,
    isLoading: false,
    isError: false,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.userData = action.payload;
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },
    },
});
export const { setUser, setIsLoading } = userSlice.actions;
export default userSlice.reducer;
