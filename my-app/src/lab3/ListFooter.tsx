import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SimpleLineIcons } from '@expo/vector-icons'

type Props = {
    onClick: () => void
}

const ListFooter = ({ onClick }: Props) => {
    return (
        <TouchableOpacity className='bg-blue-600 w-[200] rounded-lg flex-row items-center justify-center self-center' onPress={onClick}>
            <Text className='text-center text-2xl font-bold text-white p-2 '>Next</Text>
            <SimpleLineIcons name='arrow-right' size={20} color={'white'} />
        </TouchableOpacity>
    )
}

export default ListFooter