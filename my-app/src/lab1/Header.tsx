import { Image, ImageSourcePropType, Text, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { SimpleLineIcons } from '@expo/vector-icons';

type Props = {
    title?: string,
    avatar?: ImageSourcePropType,
    onClick: () => void
}

const Header = ({ title, avatar, onClick }: Props) => {

    return (
        <View className='w-full flex-row items-center justify-between px-[20] py-[4] relative bg-slate-300'>
            {/* left */}
            <TouchableOpacity
                className='h-full px-1 items-center flex-row p-2'
                onPress={onClick} >
                <SimpleLineIcons name='arrow-left' className='w-full h-full' size={24} />
            </TouchableOpacity>

            {/* text */}
            <Text className='text-lg font-semibold text-center'>{title || ""}</Text>

            {/* right */}
            {avatar ?
                <TouchableOpacity className=' w-[40px] h-[40px] bg-slate-500 rounded-full p-1' >
                    <Image source={require('../../assets/man.png')} className='w-full h-full' />
                </TouchableOpacity>
                : <View className='w-[40] h-[40]' />}
        </View>
    )
}

export default Header