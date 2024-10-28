import { StoreParams } from "../../models/StoreParams";
import { Data } from "../../data/data";
import { Line } from "../../models/ElementsType/Line";

export const zoomElement = (data: Data, storeParams: StoreParams) => {
    if (storeParams.zoom.current !== storeParams.zoom.prev)
        data.elements.Lines.forEach((line: Line) => {
            if (line.zoomCoords.xStart === null || line.zoomCoords.yStart === null || line.zoomCoords.xEnd === null || line.zoomCoords.yEnd === null) {
                line.zoomCoords.xStart = line.coords.xStart - (line.coords.xStart - storeParams.coords.windowMouseCoords.x) * (1 - storeParams.zoom.current)
                line.zoomCoords.yStart = line.coords.yStart - (line.coords.yStart - storeParams.coords.windowMouseCoords.y) * (1 - storeParams.zoom.current)
                line.zoomCoords.xEnd = line.coords.xEnd - (line.coords.xEnd - storeParams.coords.windowMouseCoords.x) * (1 - storeParams.zoom.current)
                line.zoomCoords.yEnd = line.coords.yEnd - (line.coords.yEnd - storeParams.coords.windowMouseCoords.y) * (1 - storeParams.zoom.current)
            } else {
                line.zoomCoords.xStart = line.zoomCoords.xStart - (line.zoomCoords.xStart - storeParams.coords.windowMouseCoords.x) * (1 - storeParams.zoom.current / storeParams.zoom.prev)
                line.zoomCoords.yStart = line.zoomCoords.yStart - (line.zoomCoords.yStart - storeParams.coords.windowMouseCoords.y) * (1 - storeParams.zoom.current / storeParams.zoom.prev)
                line.zoomCoords.xEnd = line.zoomCoords.xEnd - (line.zoomCoords.xEnd - storeParams.coords.windowMouseCoords.x) * (1 - storeParams.zoom.current / storeParams.zoom.prev)
                line.zoomCoords.yEnd = line.zoomCoords.yEnd - (line.zoomCoords.yEnd - storeParams.coords.windowMouseCoords.y) * (1 - storeParams.zoom.current / storeParams.zoom.prev)
            }
        })
}