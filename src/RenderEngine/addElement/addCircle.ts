import { StoreParams } from "../../models/StoreParams"
import { data } from "../../data/data"

export const addCircle = (storeParams: StoreParams, store: any, key: string | null) => {
    const clickCoords = storeParams.click
    const mouseCoords = storeParams.coords
    const radius = Math.sqrt(Math.pow(mouseCoords.x - clickCoords[0].x, 2) + Math.pow(mouseCoords.y - clickCoords[0].y, 2))

    if (clickCoords[0].x !== 0 && clickCoords[0].y !== 0) {
        data.temporaryStorageElements[0] = {
            type: "Circle",
            coords: {
                xStart: clickCoords[0].x,
                yStart: clickCoords[0].y,
                radius: radius,
            },
            color: "white",
            width: 1
        }
    }

    if (clickCoords[1].x !== 0 && clickCoords[1].y !== 0) {
        data.elements.push({
            type: "Circle",
            coords: {
                xStart: clickCoords[1].x,
                yStart: clickCoords[1].y,
                radius: Math.sqrt(Math.pow(mouseCoords.y - clickCoords[1].y, 2) + Math.pow(mouseCoords.x - clickCoords[1].x, 2)),
            },
            color: "white",
            width: 1
        })
        store.dropClick()
        data.temporaryStorageElements.pop()
    }
}