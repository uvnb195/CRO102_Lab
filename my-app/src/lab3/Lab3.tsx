import { View, Text, SafeAreaView, TouchableOpacity, AnimatableNumericValue } from 'react-native'
import React, { useEffect } from 'react'
import Wrapper from '../lab2/Wrapper'
import Animated, { useSharedValue, withDelay, withSpring, withTiming } from 'react-native-reanimated'

const Lab3 = () => {
    const translateY = useSharedValue(0)
    const scale = useSharedValue(0)
    const handleAnimated = () => {
        translateY.value = withTiming(Math.floor(Math.random() * 500))
    }

    useEffect(() => {
        scale.value = withSpring(1, { duration: 500 })
    })
    return (

        <SafeAreaView className='w-full h-full p-2 pt-5' >
            <TouchableOpacity onPress={handleAnimated}>
                <Animated.View className='w-[200] h-[200] bg-red-500 rounded-[20px] justify-center items-center' style={{
                    transform: [
                        { translateY: translateY },
                        { scale: scale }
                    ]
                }} >
                    <Text className='text-2xl font-bold text-white'>Tap Me!</Text>
                </Animated.View>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Lab3