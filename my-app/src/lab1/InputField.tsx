import { View, Text, TextInput } from 'react-native'
import React from 'react'
import Spacer from '../components/Spacer'
import { MaterialIcons } from '@expo/vector-icons'

type Props = {
    style?: string,
    title: string,
    isError: boolean,
    value: string,
    onValueChange: (newValue: string) => void
}

const InputField = ({ title, isError, value, style, onValueChange }: Props) => {
    const color = isError ? "bg-red-50 border-red-500" : "bg-blue-50 border-blue-500"
    return (
        <View className={`p-2 relative ${style}`}>
            {/* Title */}
            <View className='flex-row items-start'>

                {title && <Text className='font-semibold text-[20px] flex-row items-start tracking-[0.5px]'>{title}</Text>}
                <Text className='pl-1 text-red-600 font-bold'>*</Text>
            </View>
            <Spacer style='h-[10] w-full' />

            <View>
                <TextInput
                    value={value}
                    onChangeText={onValueChange}
                    className={`${color} border-2 rounded-lg p-2`}
                    placeholder={"Nhập " + title}
                    placeholderTextColor={isError ? 'red' : 'gray'}
                    cursorColor={isError ? 'red' : 'gray'} />
                {isError && <View
                    className='absolute top-0 right-[10px] h-full items-center flex-row'>

                    <MaterialIcons
                        name='error'
                        size={24}
                        color={'rgb(185,28,28)'} />
                </View>}
            </View>
        </View>
    )
}

export default InputField