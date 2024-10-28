import { Clicks } from "../store/clickSlice"
import { Tool } from "../store/toolSlise"
import { Coords } from "../store/coordsSlice"
import { Zoom } from "../store/zoomSlice"
import { KeyCode } from "../store/keyCodeSlice"

export type StoreParams = {
    coords: Coords,
    tool: Tool,
    click: Clicks[],
    zoom: Zoom,
    keyCode: KeyCode
}