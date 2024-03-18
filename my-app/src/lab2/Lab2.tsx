import { View, Text, SafeAreaView, TouchableOpacity, ImageSourcePropType } from 'react-native'
import React, { createContext, useState } from 'react'
import Header, { HeaderContext, HeaderData } from './Header'
import Wrapper from './Wrapper'
import InputField from '../lab1/InputField'
import { SimpleLineIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootParams } from '../../App'




const Lab2 = () => {
    const navigator = useNavigation<NativeStackNavigationProp<RootParams>>()

    const [input, setInput] = useState<HeaderData>({ name: '', avatar: '' })

    const [isError, setIsError] = useState<{ name: boolean, avatar: boolean }>({ name: false, avatar: false })

    const [headerData, setHeaderData] = useState<HeaderData>({
        name: null,
        avatar: null
    })


    const validation = () => {
        const hasError = () => {
            const errors = Object.values(isError)
            const error = errors.find(item => item == true)
            console.log(error);
            return (error == undefined ? false : true)
        }
        if (hasError() == false) {
            setHeaderData({ ...input })
            setIsError({ name: false, avatar: false })
            setInput({ name: '', avatar: '' })
        }


        if (!input.name || !input.avatar) {
            setIsError({
                name: input.name == undefined || input.name?.length == 0,
                avatar: input.avatar == undefined || input.avatar?.length == 0
            })
            return
        }

        // if (notError)
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
        <HeaderContext.Provider value={headerData}>
            <Wrapper containerStyle='w-full justify-start flex-grow items-center'>
                <InputField
                    style='w-full'
                    title={'Tên'}
                    isError={isError.name}
                    value={input.name || ''}
                    onValueChange={handleName} />

                <InputField
                    style='w-full'
                    title={'Địa chỉ avatar'}
                    isError={isError.avatar}
                    value={input.avatar || ''}
                    onValueChange={handleAvatar} />
                <TouchableOpacity
                    onPress={validation}
                    className='m-2  bg-blue-400 py-2 px-4 rounded-lg'>
                    <Text className='text-white text-lg font-semibold text-center'>CẬP NHẬT THÔNG TIN</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { navigator.navigate('Lab3') }}
                    className='m-2  bg-blue-400 py-2 px-4 rounded-lg flex-row items-center'>
                    <Text className='text-white text-lg font-semibold text-center pr-2'>Next</Text>
                    <SimpleLineIcons name='arrow-right' size={20} color={'white'} />
                </TouchableOpacity>
            </Wrapper>
        </HeaderContext.Provider>
    )
}

export default Lab2