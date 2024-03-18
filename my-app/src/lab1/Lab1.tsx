import { View, Text, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import Header from './Header'
import Spacer from '../components/Spacer'
import Card from './Card'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types'
import { RootParams } from '../../App'

const Lab1 = () => {
    const navigator = useNavigation<NativeStackNavigationProp<RootParams>>()

    return (
        <SafeAreaView className='w-full h-full pt-5' >
            <ScrollView stickyHeaderIndices={[0]}
                showsVerticalScrollIndicator={false}>

                {/* Bài 1 */}
                <Header title='Header' avatar={require('../../assets/man.png')} onClick={() => { }} />

                <Spacer style='w-full h-[2] bg-slate-500' />

                <Header title='Header' onClick={() => { }} />

                <Spacer style='w-full h-[2] bg-slate-500' />

                <Header onClick={() => { }} />

                {/* Bài 2 */}
                <Card
                    title='Lịch trình'
                    details={[
                        {
                            title: 'Địa điểm',
                            desc: 'Hồ Tràm, Vũng Tàu'
                        },
                        {
                            title: 'Thời gian',
                            desc: '09:00 AM - 12:00 AM, 12/12/2024'
                        },
                        {
                            title: 'Phương tiện di chuyển',
                            desc: 'Xe bus'
                        },
                        {
                            title: 'Thời gian',
                            desc: '21:00 - 22:00'
                        }
                    ]}>
                    <Text className='text-sm text-gray-600 font-semibold'>Hình ảnh</Text>
                    <View className='w-full h-[200]'>
                        <Image source={require('../../assets/85.jpg')} resizeMethod='scale' resizeMode='cover' className='w-full h-full' />
                    </View>
                </Card>

                <Spacer style='w-full h-[10]' />

                <Card
                    title='Khách sạn'
                    details={[
                        {
                            title: 'Địa điểm',
                            desc: 'Hồ Tràm, Vũng Tàu'
                        },
                        {
                            title: 'Thời gian',
                            desc: '09:00 AM - 12:00 AM, 12/12/2024'
                        },
                        {
                            title: 'Phương tiện di chuyển',
                            desc: 'Xe bus'
                        },
                        {
                            title: 'Thời gian',
                            desc: '21:00 - 22:00'
                        }
                    ]}>
                    <TouchableOpacity onPress={() => navigator.navigate('Lab1Bai3')}>
                        <Text className='text-lg font-semibold bg-blue-400 text-center py-2 rounded-sm text-white'>CHI TIẾT</Text>
                    </TouchableOpacity>
                </Card>
            </ScrollView >
        </SafeAreaView>
    )
}

export default Lab1