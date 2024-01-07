import React from 'react'
import { Canvas, RoundedRect, rect, rrect } from '@shopify/react-native-skia'

type TScratchCardProps = {
    canvasHeight: number,
    canvasWidth: number,
    padding: number,
    borderRadius: number,
    scratchCardBgColor: string
}

const ScratchCard = ({ canvasHeight, canvasWidth, padding, borderRadius, scratchCardBgColor }: TScratchCardProps) => {
    const drawingHeight = canvasHeight - padding
    const drawingWidth = canvasWidth - padding
    const x = padding / 2
    const y = padding / 2
    return (
        <Canvas style={{ height: canvasHeight, width: canvasWidth, backgroundColor: scratchCardBgColor }}>
            <RoundedRect rect={rrect(rect(x, y, drawingWidth, drawingHeight), borderRadius, borderRadius)} />
        </Canvas>
    )
}

export default ScratchCard