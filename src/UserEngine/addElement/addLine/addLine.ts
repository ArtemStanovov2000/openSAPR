import { StoreParams } from "../../../models/StoreParams"
import { Data } from "../../../data/data"
import { auxiliaryDrawingElements } from "../auxiliaryDrawingElements/auxiliaryDrawingElements"

export const addLine = (storeParams: StoreParams, storeDispatch: any, data: Data) => {
    const zoomClicksCoord = storeParams.zoomClick.slice().reverse()
    const clicksCoord = storeParams.click.slice()

    if (zoomClicksCoord[0]) {
        data.temporaryStorageElements.Lines[0] = {
            coords: {
                xStart: zoomClicksCoord[0].x,
                yStart: zoomClicksCoord[0].y,
                xEnd: storeParams.coords.x,
                yEnd: storeParams.coords.y,
            },
            color: "white",
            width: 1,
            zoomCoords: {
                xStart: zoomClicksCoord[0].x,
                yStart: zoomClicksCoord[0].y,
                xEnd: storeParams.coords.x,
                yEnd: storeParams.coords.y,
            },
        }
        auxiliaryDrawingElements(data.temporaryStorageElements.Lines[0].zoomCoords, data.auxiliaryElements)
    }

    if(zoomClicksCoord[1]) {
        if(data.elements.Lines.length === 0) {
            data.elements.Lines.push({
                coords: {
                    xStart: clicksCoord[1].x,
                    yStart: clicksCoord[1].y,
                    xEnd: storeParams.zoomCoords.x,
                    yEnd: storeParams.zoomCoords.y,
                },
                color: "white",
                width: 1,
                zoomCoords: {
                    xStart: zoomClicksCoord[0].x,
                    yStart: zoomClicksCoord[0].y,
                    xEnd: zoomClicksCoord[1].x,
                    yEnd: zoomClicksCoord[1].y,
                },
            })
        } else {
            const lastElementCoords = data.elements.Lines[data.elements.Lines.length - 1].coords
            if(lastElementCoords.xEnd !== clicksCoord[0].x) {
                data.elements.Lines.push({
                    coords: {
                        xStart: clicksCoord[1].x,
                        yStart: clicksCoord[1].y,
                        xEnd: clicksCoord[0].x,
                        yEnd: clicksCoord[0].y,
                    },
                    color: "white",
                    width: 1,
                    zoomCoords: {
                        xStart: zoomClicksCoord[0].x,
                        yStart: zoomClicksCoord[0].y,
                        xEnd: storeParams.coords.x,
                        yEnd: storeParams.coords.y,
                    },
                })
            }
        }
    }
}