import { StoreParams } from "../../models/StoreParams";
import { Line } from "../../models/ElementsType/Line";
import { Elements } from "../../data/data";

export const zoomElement = (data: Elements, storeParams: StoreParams) => {
    if (storeParams.zoom.current !== storeParams.zoom.prev) {
        data.Lines.forEach((line: Line) => {
            if (line.zoomCoords.xStart !== null && line.zoomCoords.yStart !== null && line.zoomCoords.xEnd !== null && line.zoomCoords.yEnd !== null) {
                line.zoomCoords.xStart = line.zoomCoords.xStart - (line.zoomCoords.xStart - storeParams.coords.x) * (1 - storeParams.zoom.current / storeParams.zoom.prev)
                line.zoomCoords.yStart = line.zoomCoords.yStart - (line.zoomCoords.yStart - storeParams.coords.y) * (1 - storeParams.zoom.current / storeParams.zoom.prev)
                line.zoomCoords.xEnd = line.zoomCoords.xEnd - (line.zoomCoords.xEnd - storeParams.coords.x) * (1 - storeParams.zoom.current / storeParams.zoom.prev)
                line.zoomCoords.yEnd = line.zoomCoords.yEnd - (line.zoomCoords.yEnd - storeParams.coords.y) * (1 - storeParams.zoom.current / storeParams.zoom.prev)
            }
        })
    }
}