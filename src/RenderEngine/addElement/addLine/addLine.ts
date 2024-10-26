import { data } from "../../../data/data"
import { StoreParams } from "../../../models/StoreParams"
import { createAuxiliaryElements } from "../createAuxiliaryElements/createAuxiliaryElements"
import { MouseClickCoordinatesArray } from "../createAuxiliaryElements/createAuxiliaryElements"
import { escapeKeyPress } from "../utilFunction/EscapeKeyPress"

export const addLine = (storeParams: StoreParams, store: any, key: string | null) => {
    const mouseClickCoordinatesArray: MouseClickCoordinatesArray = storeParams.click.slice()

    if (mouseClickCoordinatesArray[0]) {
        data.temporaryStorageElements[0] = {
            type: 'Line',
            coords: {
                xStart: mouseClickCoordinatesArray[0].x,
                yStart: mouseClickCoordinatesArray[0].y,
                xEnd: storeParams.coords.x,
                yEnd: storeParams.coords.y,
            },
            color: "white",
            width: 2
        }

        data.temporaryStorageElements[0] = {
            type: 'Line',
            coords: {
                xStart: mouseClickCoordinatesArray[0].x,
                yStart: mouseClickCoordinatesArray[0].y,
                xEnd: storeParams.coords.x / storeParams.zoom.zoom,
                yEnd: storeParams.coords.y / storeParams.zoom.zoom,
            },
            color: "white",
            width: 2
        }

        createAuxiliaryElements(mouseClickCoordinatesArray, storeParams)

        escapeKeyPress(mouseClickCoordinatesArray, key)

        if (mouseClickCoordinatesArray[1]) {
            data.elements.push({
                type: 'Line',
                coords: {
                    xStart: mouseClickCoordinatesArray[1].x,
                    yStart: mouseClickCoordinatesArray[1].y,
                    xEnd: mouseClickCoordinatesArray[0].x,
                    yEnd: mouseClickCoordinatesArray[0].y,
                },
                color: "white",
                width: 2
            })
        }
    }
}