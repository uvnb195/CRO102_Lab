import { View, Text, TextInput } from 'react-native'
import React from 'react'

type Props = {
    size?: string,
    title: string,
    require: boolean,
    onValueChange: (value: string) => void
}

const InputField = ({ size, title, require, onValueChange }: Props) => {
    return (
        <View className={size}>
            <View className='flex-row items-center'>
                <Text className='text-lg font-semibold'>{title}</Text>
                {require && <Text className='text-red-500 font-bold text-xl ml-[2px]'>*</Text>}
            </View>
            <View className='bg-gray-300 p-4 rounded-lg'>
                <TextInput
                    cursorColor={'black'}
                    className='w-full text-xl'
                    onChangeText={onValueChange}
                />
            </View>
        </View>)
}

export default InputField