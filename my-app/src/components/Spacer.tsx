import { View, Text } from 'react-native'
import React from 'react'

type SpacerProps = {
    style: string,
}

const Spacer = ({ style }: SpacerProps) => {
    return (
        <View className={style} />
    )
}

export default Spacer