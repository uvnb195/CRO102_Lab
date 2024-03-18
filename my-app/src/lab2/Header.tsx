import { View, Text, Image } from 'react-native'
import React, { createContext, useContext } from 'react'
import { Ionicons } from '@expo/vector-icons'


export const HeaderContext = createContext<HeaderData>({
    name: null,
    avatar: null
})
export interface HeaderData {
    name: string | null,
    avatar: string | null
}

const Header = () => {
    const headerData = useContext(HeaderContext)
    console.log('header re-render', headerData);

    return (
        <View className='w-full bg-slate-50 flex-row items-center p-2'>
            {
                headerData.avatar ?
                    <Image
                        source={{ uri: headerData.avatar }}
                        className='w-[60] h-[60] rounded-full'
                        resizeMode='cover' />
                    :
                    <Ionicons name='person' size={60} />
            }
            <View className='justify-between'>
                <Text>Chào ngày mới</Text>
                <Text className='font-bold text-lg'>{headerData.name || "Chưa có tên"}</Text>
            </View>
        </View>
    )
}

export default React.memo(Header)