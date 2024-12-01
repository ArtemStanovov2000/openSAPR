import { configureStore } from "@reduxjs/toolkit";
import toolSlise from "./toolSlise";
import clickSlice from "./clickSlice";
import coordsSlice from "./coordsSlice";
import zoomSlice from "./zoomSlice";
import keyCodeSlice from "./keyCodeSlice";
import zoomCoordsSlice from "./zoomCoordsSlice";
import zoomClickSlice from "./zoomClickSlice";

export default configureStore({
    reducer: {
        tool: toolSlise,
        click: clickSlice,
        coords: coordsSlice,
        zoom: zoomSlice,
        keyCode: keyCodeSlice,
        zoomCoords: zoomCoordsSlice,
        zoomClick: zoomClickSlice,
    }
})
