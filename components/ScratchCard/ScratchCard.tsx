import React from 'react'
import { Canvas, Path, RoundedRect, rect, rrect } from '@shopify/react-native-skia'
import { GestureDetector } from 'react-native-gesture-handler'
import useScratchCardGesture from './useScratchCardGesture'
import ScratchCardCover from './ScratchCardCover'

type TScratchCardProps = {
    canvasHeight: number,
    canvasWidth: number,
    padding: number,
    borderRadius: number,
    scratchCardBgColor: string,
    scratchStrokeWidth?: number,
    scratchStrokeColor: string
}

const ScratchCard = ({ canvasHeight, canvasWidth, padding, borderRadius, scratchCardBgColor = "#fff", scratchStrokeWidth = 10, scratchStrokeColor }: TScratchCardProps) => {
    const drawingHeight = canvasHeight - padding
    const drawingWidth = canvasWidth - padding
    const x = padding / 2
    const y = padding / 2

    const { gesture, scratchPath } = useScratchCardGesture()

    const rectBg = rrect(rect(x, y, drawingWidth, drawingHeight), borderRadius, borderRadius)

    const scratchCardCoverSrcRect = rect(0, 0, 400, 400)
    const scratchCardDestinationRect = rect(x, y, drawingWidth, drawingHeight)

    return (
        <GestureDetector gesture={gesture}>
            <Canvas style={{ height: canvasHeight, width: canvasWidth, backgroundColor: scratchCardBgColor }}>
                <RoundedRect rect={rectBg} />
                <ScratchCardCover srcRect={scratchCardCoverSrcRect} destinationRect={scratchCardDestinationRect} />
                <Path clip={rectBg} path={scratchPath} color={scratchStrokeColor} strokeWidth={scratchStrokeWidth} style={"stroke"} strokeCap={"round"} strokeJoin={"round"} />
            </Canvas>
        </GestureDetector>
    )
}

export default ScratchCard