import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign, EvilIcons } from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { resetValue, updateValue } from '../redux/counterSlice'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp, NativeStackNavigatorProps, NativeStackScreenProps } from '@react-navigation/native-stack/lib/typescript/src/types'
import { RootParams } from '../../App'

const Content = () => {
    const navigator = useNavigation<NativeStackNavigationProp<RootParams>>()
    const dispatch = useDispatch()
    const counterSelector = useSelector((state: RootState) => state.counter.value)
    const handleChangeCounter = (value: number) => {
        dispatch(updateValue(value))
    }

    const handleResetCounter = () => {
        dispatch(resetValue())
    }

    return (
        <SafeAreaView className='w-full h-full p-2 pt-5 items-center justify-center' >
            <View className='rounded-[20px] h-[100] items-center flex-row justify-center bg-slate-300'>
                <View className=' w-[200] p-[10]  items-center justify-center h-full'>
                    <Text className='text-2xl font-bold text-slate-800'>{counterSelector}</Text>
                </View>
                <TouchableOpacity onPress={handleResetCounter}>
                    <View className='p-2'>
                        <EvilIcons name='close' size={24} />

                    </View>
                </TouchableOpacity>

                <View className='h-full justify-evenly pr-4'>
                    <TouchableOpacity onPress={() => handleChangeCounter(+1)}>
                        <AntDesign name='up' size={24} color={'rgba(30,41,59,1)'} />
                    </TouchableOpacity>
                    <View className='w-full h-[1] bg-slate-400' />
                    <TouchableOpacity onPress={() => handleChangeCounter(-1)}>
                        <AntDesign name='down' size={24} color={'rgba(30,41,59,1)'} />
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                <TouchableOpacity onPress={() => navigator.navigate('Lab56Api')}>
                    <Text className='text-2xl font-bold text-slate-800 bg-blue-300 px-4 py-2 rounded-lg mt-[20]'>Next</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

export default Content
