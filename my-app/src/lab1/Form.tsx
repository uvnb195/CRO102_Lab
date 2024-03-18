import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header from './Header'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootParams } from '../../App'
import InputField from './InputField'
import { SimpleLineIcons } from '@expo/vector-icons'

const Form = () => {
    const navigator = useNavigation<NativeStackNavigationProp<RootParams>>()

    const [input, setInput] = useState('')
    const [isError, setIsError] = useState(false)
    const handleInput = (value: string) => {
        if (isError) setIsError(false)
        setInput(value)
        if (value.length == 0) setIsError(true)
    }
    const handleValidation = () => {
        if (!input || input.length == 0) setIsError(true)
    }
    return (
        <SafeAreaView className='w-full h-full pt-5' >
            <ScrollView stickyHeaderIndices={[0]}
                showsVerticalScrollIndicator={false}>
                <Header title='Header' avatar={require('../../assets/man.png')} onClick={() => navigator.goBack()} />

                <InputField
                    value={input}
                    title={'Title'}
                    isError={isError}
                    onValueChange={handleInput} />

                <TouchableOpacity
                    onPress={handleValidation}
                    className='mt-[20] w-[200] self-center bg-blue-200 px-2 py-1 rounded-lg border-2 border-blue-400 items-center'>
                    <Text className=' font-semibold text-lg'>Submit</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigator.navigate('Lab2')}
                    className='mt-[20] w-[200] self-center bg-blue-200 px-2 py-1 rounded-lg border-2 border-blue-400 items-center flex-row justify-center'>
                    <Text className=' font-semibold text-lg mr-2'>Next</Text>
                    <SimpleLineIcons name='arrow-right' size={16} />
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Form