import { useEffect, useRef, useState } from "react"
import { FC } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setCoord, setZoomCoords } from "../../../store/coordsSlice"
import { setZoom } from "../../../store/zoomSlice"
import { setTool } from "../../../store/toolSlise"
import { setKeyCode } from "../../../store/keyCodeSlice"
import { dropClick, addClickHistory } from "../../../store/clickSlice"
import { data } from "../../../data/data"
import { StoreParams } from "../../../models/StoreParams"
import { createStartWindow } from "../../../RenderEngine/createStartWindow"
import { rerender } from "../../../RenderEngine"

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
    const storeDataKeyCode = useSelector((store: any) => store.keyCode.keyCode)

    const dispatch = useDispatch()

    const onMouseMove = (e: any) => {
        dispatch(setCoord({
            x: e.clientX - e.target.offsetLeft,
            y: e.clientY - e.target.offsetTop,
        }));
        dispatch(setZoom("mouseMove"))
        dispatch(setZoomCoords(343))
    };

    const onClick = (e: any) => {
        if (storeDataTool !== null) {
            dispatch(addClickHistory({
                x: e.clientX - e.target.offsetLeft,
                y: e.clientY - e.target.offsetTop,
            }))
        }
    }

    const handleKeyDown = (e: any) => {
        dispatch(setKeyCode(e.key));
    };

    const handleKeyDown1 = (e: any) => {
        dispatch(setKeyCode(null))
    };

    const onWheel = (e: any) => {
        dispatch(setZoom(e.deltaY))
    }

    useEffect(() => {
        const context = ref.current.getContext("2d");
        createStartWindow(context, width, height);
        const windowParam: StoreParams = {
            coords: storeDataCoords,
            tool: storeDataTool,
            click: storeDataClick,
            zoom: storeDataZoom,
            keyCode: storeDataKeyCode
        }

        const storeDispatch = {
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

        rerender(context, data, windowParam, storeDispatch);
    }, [storeDataCoords, storeDataTool, storeDataZoom, storeDataClick, storeDataKeyCode])

    return (
        <div tabIndex={0} onKeyDown={handleKeyDown} onKeyUp={handleKeyDown1}>
            <canvas onClick={onClick} onWheel={onWheel} onMouseMove={onMouseMove} ref={ref} width={width} height={height} />
        </div>
    )
}

export default Canvas