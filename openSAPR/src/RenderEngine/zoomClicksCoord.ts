import { StoreParams } from "../models/StoreParams"
import { Data } from "../data/data"

export const zoomClicksCoord = (storeParams: StoreParams, storeDispatch: any, data: Data) => {
    for (let i = 0; i < storeParams.click.length; i++) {
        if(storeParams.click[0] !== null && data.centerAxes[0].zoomCoords.xStart !== null && data.centerAxes[0].zoomCoords.yStart !== null) {
            storeDispatch.addZoomClickHistory(
                storeParams.click[i].x * storeParams.zoom.current + data.centerAxes[0].zoomCoords.xStart,
                storeParams.click[i].y * storeParams.zoom.current + data.centerAxes[0].zoomCoords.yStart
            )
        }
    }
    storeDispatch.dropZoomClick(storeParams.click.length)
}