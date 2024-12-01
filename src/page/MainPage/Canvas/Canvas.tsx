import { useEffect, useRef } from "react"
import { FC } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setCoord } from "../../../store/coordsSlice"
import { setZoomCoords } from "../../../store/zoomCoordsSlice"
import { setZoom } from "../../../store/zoomSlice"
import { setTool } from "../../../store/toolSlise"
import { setKeyCode } from "../../../store/keyCodeSlice"
import { dropClick, addClickHistory } from "../../../store/clickSlice"
import { data } from "../../../data/data"
import { StoreParams } from "../../../models/StoreParams"
import { createStartWindow } from "../../../RenderEngine/createStartWindow"
import { rerender } from "../../../RenderEngine"
import { createUseStyles } from "react-jss"
import { addZoomClickHistory, dropZoomClick } from "../../../store/zoomClickSlice"

type Props = {
    width: number,
    height: number,
}

const useStyles = createUseStyles({
    canvas: {
        cursor: "none"
    },
});

const Canvas: FC<Props> = ({ width, height }) => {
    const classes = useStyles()
    const ref: any = useRef()

    const storeDataCoords = useSelector((store: any) => store.coords.coords)
    const storeDataTool = useSelector((store: any) => store.tool.tool)
    const storeDataZoom = useSelector((store: any) => store.zoom.zoom)
    const storeDataClick = useSelector((store: any) => store.click.click)
    const storeDataKeyCode = useSelector((store: any) => store.keyCode.keyCode)
    const storeDataZoomCoords = useSelector((store: any) => store.zoomCoords.zoomCoords)
    const storeZoomDataClick = useSelector((store: any) => store.zoomClick.zoomClick)

    const dispatch = useDispatch()

    const onMouseMove = (e: any) => {
        dispatch(setCoord({
            x: e.clientX - e.target.offsetLeft,
            y: e.clientY - e.target.offsetTop,
        }));
        dispatch(setZoom("mouseMove"))
    };

    const onClick = (e: any) => {
        if (storeDataTool !== null) {
            dispatch(addClickHistory({
                x: storeDataZoomCoords.x,
                y: storeDataZoomCoords.y,
            }))
        }
    }

    const handleKeyDown = (e: any) => {
        dispatch(setKeyCode(e.key));
    };

    const handleKeyDown1 = () => {
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
            keyCode: storeDataKeyCode,
            zoomCoords: storeDataZoomCoords,
            zoomClick: storeZoomDataClick,
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
            },
            dropZoomClick(length: number) {
                dispatch(dropZoomClick(length))
            },
            addZoomClickHistory(x: number, y: number) {
                dispatch(addZoomClickHistory({ x: x, y: y }))
            },
            setZoomCoords(x: number, y: number) {
                dispatch(setZoomCoords({ x: x, y: y }))
            }
        }

        rerender(context, data, windowParam, storeDispatch);
    }, [storeDataCoords, storeDataTool, storeDataZoom, storeDataClick, storeDataKeyCode])

    return (
        <div tabIndex={0} onKeyDown={handleKeyDown} onKeyUp={handleKeyDown1}>
            <canvas className={classes.canvas} onClick={onClick} onWheel={onWheel} onMouseMove={onMouseMove} ref={ref} width={width} height={height} />
        </div>
    )
}

export default Canvas