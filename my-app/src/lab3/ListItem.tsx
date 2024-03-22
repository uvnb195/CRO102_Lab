import { View, Text, ViewToken } from 'react-native'
import React from 'react'
import Animated, { SharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated'

export type ListItemProps = {
    item: { id: number },
    viewableItems: SharedValue<ViewToken[]>
}

const ListItem = ({ item, viewableItems }: ListItemProps) => {
    const animStyle = useAnimatedStyle(() => {
        const isVisible = Boolean(viewableItems.value.filter(item => item.isViewable).find(findItem => item.id == findItem.item.id))

        return {
            transform: [
                { scale: withTiming(isVisible ? 1 : 0, { duration: 200 }) }
            ],
            opacity: withTiming(isVisible ? 1 : 0, { duration: 300 })
        }
    })
    return <Animated.View
        className='h-[50] w-full bg-white my-2 rounded-lg items-center justify-center'
        style={
            [animStyle]
        }>
        <Text className='text-2xl'>{item.id}</Text>
    </Animated.View>
}

export default React.memo(ListItem)