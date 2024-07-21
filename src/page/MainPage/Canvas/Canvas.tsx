import { useEffect, useRef, useState } from "react"
import { FC } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setClick } from "../../../store/clickSlice"
import { setCoord } from "../../../store/coordsSlice"
import { setZoom } from "../../../store/zoomSlice"
import { rerender } from "../../../utils/rerender/rerender"

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

    const handleMouseMove = (event: any) => {
        dispatch(setCoord({
            x: event.clientX - event.target.offsetLeft,
            y: event.clientY - event.target.offsetTop,
        }));
    };

    const clickEvent = (event: any) => {
        if(storeDataTool === "noTool") {
            dispatch(setClick({
                x: 0,
                y: 0,
            }))
        } else {
            dispatch(setClick({
                x: event.clientX - event.target.offsetLeft,
                y: event.clientY - event.target.offsetTop,
            }))
        }
    }

    const wheel = (e: any) => {
        dispatch(setZoom(e.deltaY))
    }

    useEffect(() => {
        const canvas: any = ref.current
        const context = canvas.getContext("2d")
        context.fillStyle = "black";
        context.fillRect(0, 0, width, height);
        context.stroke();
        rerender(context)
    }, [storeDataCoords, storeDataTool, storeDataZoom, storeDataClick])

    return (
        <canvas onClick={clickEvent} onWheel={wheel} onMouseMove={handleMouseMove} ref={ref} width={width} height={height} />
    )
}

export default Canvas