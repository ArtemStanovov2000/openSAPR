import { data } from "../../../data/data"
import { MouseClickCoordinatesArray } from "../createAuxiliaryElements/createAuxiliaryElements"

export const escapeKeyPress = (mouseClickCoordinatesArray: MouseClickCoordinatesArray, key: string | null) => {
    if (key === "Escape") {
        mouseClickCoordinatesArray.pop()
        for (let i = data.auxiliaryElements.length; i > -5; i--) {
            data.auxiliaryElements.pop()
        }
        data.temporaryStorageElements.pop()
        console.log(data.auxiliaryElements.length)
    }
}