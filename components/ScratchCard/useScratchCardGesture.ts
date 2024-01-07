import { Skia } from "@shopify/react-native-skia"
import { useMemo } from "react"
import { Gesture } from "react-native-gesture-handler"


const useScratchCardGesture = () => {

    const scratchPath = Skia.Path.Make()
    scratchPath.moveTo(0, 0)
    const pan = Gesture.Pan().onStart((e) => {
        scratchPath.moveTo(e.x, e.y)
    }).onChange((e) => {
        scratchPath.lineTo(e.x, e.y)
    })
    const gesture = useMemo(() => Gesture.Simultaneous(pan), [])
    return { gesture, scratchPath }
}

export default useScratchCardGesture