import { useEffect, useRef, useState, MouseEvent } from "react"
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

// Возможное решение проблемы с зумом
// const Test123: FC = () => {
//     const [value1, setValue1] = useState('');
//     const [prevValue1, setPrevValue1] = useState(''); // prevZoom

//     const onChange = () => {
//         if (value1 === prevValue1) {
//             //
//         } else {
//             // setValue1()
//             // 
//             // 
//             //
//             // setPrevValue1()
//         }
//     }
// }

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
        if (storeDataTool !== "noTool") {
            // Вернуться к обсуждению типа any
            dispatch(setClick({
                x: event.clientX - event.target.offsetLeft,
                y: event.clientY - event.target.offsetTop,
            }))
        }
    }

    const onWheel = (e: any) => {
        dispatch(setZoom(e.deltaY))
    }

    // Перенести в утилиты, где происходит отрисовка
    const resetCanvas = (context: any) => {
        context.fillStyle = "black";
        context.fillRect(0, 0, width, height);
        context.stroke();
    }

    useEffect(() => {
        const context = ref.current.getContext("2d");
        resetCanvas(context);
        rerender(context);
    }, [storeDataCoords, storeDataTool, storeDataZoom, storeDataClick])

    return (
        <canvas onClick={onClick} onWheel={onWheel} onMouseMove={onMouseMove} ref={ref} width={width} height={height} />
    )
}

export default Canvas