import { View, Text, TouchableOpacity, ScrollView, Touchable, TouchableHighlight } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'

type Props = {
    size?: string,
    title: string,
    require?: boolean,
    selected: string,
    list: string[],
    onSelected: (value: string) => void
}

const DropDownMenu = ({ size, title, require, selected, onSelected, list }: Props) => {

    const [expanded, setExpanded] = React.useState(false)

    const handleExpand = () => { setExpanded(!expanded) }

    const renderList = () => list.map((item, index) => <TouchableHighlight
        onPress={() => {
            handleExpand()
            onSelected(item)
        }}
        underlayColor={'white'} >
        <Text key={index} className='z-10 text-2xl border-b-[1px] border-gray-100 p-2'>{item}</Text>
    </TouchableHighlight>)
    return (
        <View className={size}>
            <View className='flex-row items-center'>
                <Text className='text-lg font-semibold'>{title}</Text>
                {require && <Text className='text-red-500 font-bold text-xl ml-[2px]'>*</Text>}
            </View>

            <View className='relative'>

                <View
                    className={`bg-gray-300 p-4 rounded-t flex-row items-center justify-between`}>
                    <Text className='text-xl'>{selected}</Text>
                    <TouchableOpacity
                        onPress={handleExpand}
                        className='bg-gray-200 p-2 rounded'>
                        <Entypo name={`chevron-thin-${expanded ? 'up' : 'down'}`} size={20} color='black' />
                    </TouchableOpacity>
                </View>

                {/* Expand menu */}
                <ScrollView className={`absolute z-20 bg-slate-300 top-[100%] left-0 right-0 h-[150] px-2 ${expanded ? '' : 'hidden'}`}>
                    {renderList()}
                </ScrollView>
            </View>

        </View>
    )
}

export default DropDownMenu