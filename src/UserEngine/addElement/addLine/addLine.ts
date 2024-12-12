import { StoreParams } from "../../../models/StoreParams"
import { Data } from "../../../data/data"
import { auxiliaryDrawingElements } from "../auxiliaryDrawingElements/auxiliaryDrawingElements"
import { KeyCode } from "../../../store/keyCodeSlice"

export const addLine = (storeParams: StoreParams, storeDispatch: any, data: Data) => {
    const zoomClicksCoord = storeParams.zoomClick.slice().reverse()
    const zoomCoord = storeParams.zoomCoords
    const clicksCoord = storeParams.click.slice()

    const escapePressEvent = (keyCode: KeyCode) => {
        if (keyCode === "Escape") {
            data.temporaryStorageElements.Lines.pop()
            storeDispatch.setTool(null)
            storeDispatch.dropClick()
            storeDispatch.dropZoomClick()

            for (let i = data.auxiliaryElements.Lines.length; i > 0; i--) {
                data.auxiliaryElements.Lines.pop()
            }

            data.auxiliaryElements.Text.pop()
        }
    }

    escapePressEvent(storeParams.keyCode)

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
        auxiliaryDrawingElements(data.temporaryStorageElements.Lines[0].zoomCoords, data.auxiliaryElements, zoomCoord.x, zoomCoord.y)
        escapePressEvent(storeParams.keyCode)
    }

    if (zoomClicksCoord[1]) {
        if (data.elements.Lines.length === 0) {
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
            if (lastElementCoords.xEnd !== clicksCoord[0].x && lastElementCoords.yEnd !== clicksCoord[0].y) {
                if (zoomClicksCoord.length - 1 === data.elements.Lines.length) {
                    data.elements.Lines.push({
                        coords: {
                            xStart: clicksCoord[1].x,
                            yStart: clicksCoord[1].y,
                            xEnd: clicksCoord[0].x,
                            yEnd: clicksCoord[0].y,
                        },
                        color: "white",
                        width: 1,
                        zoomCoords: data.temporaryStorageElements.Lines[0].zoomCoords
                    })
                } else if (clicksCoord.length === 2) {
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
                            xEnd: zoomClicksCoord[1].x,
                            yEnd: zoomClicksCoord[1].y,
                        },
                    })
                } else {
                    data.elements.Lines.push({
                        coords: {
                            xStart: clicksCoord[1].x,
                            yStart: clicksCoord[1].y,
                            xEnd: clicksCoord[0].x,
                            yEnd: clicksCoord[0].y,
                        },
                        color: "white",
                        width: 1,
                        zoomCoords: data.temporaryStorageElements.Lines[0].zoomCoords
                    })
                }
            }
        }
    }
}