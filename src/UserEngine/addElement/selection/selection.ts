import { StoreParams } from "../../../models/StoreParams"
import { Data } from "../../../data/data"

export const selection = (storeParams: StoreParams, storeDispatch: any, data: Data) => {
    
    if(storeParams.fullClick.length > 0) {

        data.auxiliaryElements.Pole[0] = {
            color: "white",
            width: 1,
            coords: {
                xStart: storeParams.fullClick[0].x,
                yStart: storeParams.fullClick[0].y,
                xEnd: storeParams.coords.x,
                yEnd: storeParams.fullClick[0].y,
            },
        }
        data.auxiliaryElements.Pole[1] = {
            color: "white",
            width: 1,
            coords: {
                xStart: storeParams.fullClick[0].x,
                yStart: storeParams.fullClick[0].y,
                xEnd: storeParams.fullClick[0].x,
                yEnd: storeParams.coords.y,
            },
        }
        data.auxiliaryElements.Pole[2] = {
            color: "white",
            width: 1,
            coords: {
                xStart: storeParams.coords.x,
                yStart: storeParams.fullClick[0].y,
                xEnd: storeParams.coords.x,
                yEnd: storeParams.coords.y,
            },
        }
        data.auxiliaryElements.Pole[3] = {
            color: "white",
            width: 1,
            coords: {
                xStart: storeParams.fullClick[0].x,
                yStart: storeParams.coords.y,
                xEnd: storeParams.coords.x,
                yEnd: storeParams.coords.y,
            },
        }
    }
    console.log(storeParams.coords.x, "coords")
    console.log(storeParams.zoomCoords.x)
}