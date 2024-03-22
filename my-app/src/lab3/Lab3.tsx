import { View, Text, SafeAreaView, TouchableOpacity, AnimatableNumericValue } from 'react-native'
import React, { useEffect } from 'react'
import Wrapper from '../lab2/Wrapper'
import Animated, { useSharedValue, withSpring, withTiming } from 'react-native-reanimated'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootParams } from '../../App'
import { useNavigation } from '@react-navigation/native'
import { SimpleLineIcons } from '@expo/vector-icons'


const Lab3 = () => {
    const navigator = useNavigation<NativeStackNavigationProp<RootParams>>()
    const translateY = useSharedValue(0)
    const scale = useSharedValue(0)
    const handleAnimated = () => {
        translateY.value = withTiming(Math.floor(Math.random() * 500))
    }

    useEffect(() => {
        scale.value = withSpring(1, { duration: 500 })
    })
    return (

        <SafeAreaView className='w-full h-full p-2 pt-5 items-center justify-between' >
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
            <TouchableOpacity
                onPress={() => navigator.navigate('Lab3Flatlist')}
                className='bg-blue-400 py-2 px-4 rounded-lg flex-row items-center'>
                <Text className='text-2xl text-white font-bold'>Next</Text>
                <SimpleLineIcons name='arrow-right' size={20} color={'white'} />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Lab3