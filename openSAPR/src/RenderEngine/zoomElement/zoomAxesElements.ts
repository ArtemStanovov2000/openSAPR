import { StoreParams } from "../../models/StoreParams";
import { Line } from "../../models/ElementsType/Line";

export const zoomAxesElements = (data: Line[], storeParams: StoreParams, storeDispatch: any) => {
    data.forEach((line: Line) => {
        if (line.zoomCoords.xStart !== null && line.zoomCoords.yStart !== null && line.zoomCoords.xEnd !== null && line.zoomCoords.yEnd !== null) {
            line.zoomCoords.xStart = line.zoomCoords.xStart - (line.zoomCoords.xStart - storeParams.coords.x) * (1 - storeParams.zoom.current / storeParams.zoom.prev)
            line.zoomCoords.yStart = line.zoomCoords.yStart - (line.zoomCoords.yStart - storeParams.coords.y) * (1 - storeParams.zoom.current / storeParams.zoom.prev)
            line.zoomCoords.xEnd = line.zoomCoords.xStart + line.coords.xEnd
            line.zoomCoords.yEnd = line.zoomCoords.yStart + line.coords.yEnd
        }
    })

    if (data[0].zoomCoords.xStart !== null && data[0].zoomCoords.yStart !== null) {
        const zoom = storeParams.zoom.current

        const windowMouseCoordsX = storeParams.coords.x
        const pointX = data[0].zoomCoords.xStart

        const windowMouseCoordsY = storeParams.coords.y
        const pointY = data[0].zoomCoords.yStart
        const zoomCoordinates = {
            x: (windowMouseCoordsX - pointX) / zoom,
            y: (windowMouseCoordsY - pointY) / zoom
        }
        storeDispatch.setZoomCoords(zoomCoordinates.x, zoomCoordinates.y)
    }
}