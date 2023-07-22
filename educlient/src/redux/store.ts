import { configureStore } from "@reduxjs/toolkit";
import activitiesSlice from "./features/activitiesSlice";
import stepsSlice from "./features/stepsSlider"
import AreasSlice from "./features/areaSlice"
import UserSlice from "./features/userSlice"

export const store = configureStore({
    reducer:{
        activities: activitiesSlice,
        steps: stepsSlice,
        areas: AreasSlice,
        user: UserSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch