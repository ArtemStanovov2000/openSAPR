import { StoreParams } from "../../models/StoreParams";
import { Line } from "../../models/ElementsType/Line";

export const zoomCursorElements = (data: Line[], storeParams: StoreParams) => {
    data.forEach((line: Line) => {
        if (storeParams.zoom.current < storeParams.zoom.prev) {
            line.color = "red"
            line.width = 2
        } else if (storeParams.zoom.current === storeParams.zoom.prev) {
            line.color = "white"
        } else if (storeParams.zoom.current > storeParams.zoom.prev) {
            line.color = "green"
            line.width = 2
        }
        line.zoomCoords.xStart = line.coords.xStart + storeParams.coords.x
        line.zoomCoords.yStart = line.coords.yStart + storeParams.coords.y
        line.zoomCoords.xEnd = line.coords.xEnd + storeParams.coords.x
        line.zoomCoords.yEnd = line.coords.yEnd + storeParams.coords.y
    })
}