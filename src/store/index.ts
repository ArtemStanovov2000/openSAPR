import { configureStore } from "@reduxjs/toolkit";
import toolSlise from "./toolSlise";
import clickSlice from "./clickSlice";
import coordsSlice from "./coordsSlice";
import zoomSlice from "./zoomSlice";
import keyCodeSlice from "./keyCodeSlice";

export default configureStore({
    reducer: {
        tool: toolSlise,
        click: clickSlice,
        coords: coordsSlice,
        zoom: zoomSlice,
        keyCode: keyCodeSlice
    }
})
