import { View, Text, ViewToken } from 'react-native'
import React, { useEffect } from 'react'
import { FlatList } from 'react-native'
import Animated, { SharedValue, useAnimatedStyle, useSharedValue } from 'react-native-reanimated'
import ListItem from './ListItem'
import ListFooter from './ListFooter'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootParams } from '../../App'

const list = Array(50).fill(0).map((_item, index) => ({ id: index }))

const FlatlistAnim = () => {
    const navigator = useNavigation<NativeStackNavigationProp<RootParams>>()

    const viewable = useSharedValue<ViewToken[]>([])
    return (
        <View className='w-full h-full bg-cyan-300 p-2'>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={list}
                onViewableItemsChanged={({ viewableItems }) => {
                    viewable.value = viewableItems

                }}
                renderItem={({ item }) => <ListItem item={item} viewableItems={viewable} />}
                ListFooterComponent={
                    <ListFooter onClick={() => { }} />
                }
            />
        </View>
    )
}

export default FlatlistAnim