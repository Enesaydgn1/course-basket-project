import { configureStore } from "@reduxjs/toolkit";
import { formReducer } from "./slice/formSlice";
import { courseReducer } from "./slice/courseSlice";

export const store = configureStore({
    reducer: {
        form: formReducer,
        courses:courseReducer,
    }
})