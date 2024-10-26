import { useEffect, useRef, useState } from "react"
import { FC } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setCoord } from "../../../store/coordsSlice"
import { setZoom } from "../../../store/zoomSlice"
import { rerender } from "../../../RenderEngine"
import { createStartWindow } from "../../../RenderEngine/createStartWindow"
import { data } from "../../../data/data"
import { StoreParams } from "../../../models/StoreParams"
import { setTool } from "../../../store/toolSlise"
import { dropClick, addClickHistory } from "../../../store/clickSlice"

type Props = {
    width: number,
    height: number,
}

const Canvas: FC<Props> = ({ width, height }) => {
    const ref: any = useRef()

    const storeDataCoords = useSelector((store: any) => store.coords.coords)
    const storeDataTool = useSelector((store: any) => store.tool.tool)
    const storeDataZoom = useSelector((store: any) => store.zoom.zoom)
    const storeDataClick = useSelector((store: any) => store.click.click)

    const dispatch = useDispatch()

    const onMouseMove = (event: any) => {
        dispatch(setCoord({
            x: event.clientX - event.target.offsetLeft,
            y: event.clientY - event.target.offsetTop,
        }));
    };

    const onClick = (event: any) => {
        if (storeDataTool !== null) {
            dispatch(addClickHistory({
                x: event.clientX - event.target.offsetLeft,
                y: event.clientY - event.target.offsetTop,
            }))
        }
    }

    const onWheel = (e: any) => {
        dispatch(setZoom(e.deltaY))
    }

    const [keyDown, setKeyDown] = useState(null)

    const handleKeyDown = (event: any) => {
        setKeyDown(event.key);
    };

    const handleKeyDown1 = (event: any) => {
        setKeyDown(null)
    };


    useEffect(() => {
        const context = ref.current.getContext("2d");
        createStartWindow(context, width, height);
        const windowParam: StoreParams = {
            coords: storeDataCoords,
            tool: storeDataTool,
            click: storeDataClick,
            zoom: storeDataZoom
        }

        const store = {
            dropClick() {
                dispatch(dropClick(""))
            },
            setTool(tool: string | null) {
                dispatch(setTool(tool))
            },
            addClickHistory(x: number, y: number) {
                dispatch(addClickHistory({ x: x, y: y }))
            }
        }

        rerender(context, data, windowParam, store, keyDown);
    }, [storeDataCoords, storeDataTool, storeDataZoom, storeDataClick, keyDown])

    return (
        <div tabIndex={0} onKeyDown={handleKeyDown} onKeyUp={handleKeyDown1}>
            <canvas onClick={onClick} onWheel={onWheel} onMouseMove={onMouseMove} ref={ref} width={width} height={height} />
        </div>
    )
}

export default Canvas