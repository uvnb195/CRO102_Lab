import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const Header = () => {
    return (
        <View className='w-full bg-slate-50 flex-row items-center p-2'>
            <Ionicons name='person' size={60} />
            <View className='justify-between'>
                <Text>Chào ngày mới</Text>
                <Text className='font-bold text-lg'>Chưa có tên</Text>
            </View>
        </View>
    )
}

export default React.memo(Header)