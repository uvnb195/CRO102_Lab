import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header from './Header'
import Wrapper from './Wrapper'
import InputField from '../lab1/InputField'

const Lab2 = () => {
    console.log('lab 2 re-render');
    const [input, setInput] = useState<{ name: string, avatar: string }>({ name: '', avatar: '' })
    const [isError, setIsError] = useState<{ name: boolean, avatar: boolean }>({ name: false, avatar: false })
    const validation = () => {
        if (!input.name || !input.avatar)
            setIsError({
                name: input.name.length == 0,
                avatar: input.avatar.length == 0
            })
    }

    const handleName = (name: string) => {
        if (name.length == 0 && isError.name == false)
            setIsError({ ...isError, name: true })
        else if (name.length > 0 && isError.name == true) {
            setIsError({ ...isError, name: false })
        }
        setInput({ ...input, name })
    }
    const handleAvatar = (avatar: string) => {
        if (avatar.length == 0 && isError.avatar == false)
            setIsError({ ...isError, avatar: true })
        else if (avatar.length > 0 && isError.avatar == true) {
            setIsError({ ...isError, avatar: false })
        }
        setInput({ ...input, avatar })
    }

    return (
        <Wrapper containerStyle='w-full justify-start flex-grow items-center'>
            <InputField
                style='w-full'
                title={'Tên'}
                isError={isError.name}
                value={input.name}
                onValueChange={handleName} />

            <InputField
                style='w-full'
                title={'Địa chỉ avatar'}
                isError={isError.avatar}
                value={input.avatar}
                onValueChange={handleAvatar} />
            <TouchableOpacity
                onPress={validation}
                className='m-2  bg-blue-400 py-2 px-4 rounded-lg'>
                <Text className='text-white text-lg font-semibold text-center'>CẬP NHẬT THÔNG TIN</Text>
            </TouchableOpacity>
        </Wrapper>
    )
}

export default Lab2