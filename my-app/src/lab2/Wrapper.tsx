import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Header from './Header'
import Footer from './Footer'

type Props = {
    containerStyle?: string,
    children?: React.ReactNode,
}

const Wrapper = ({ containerStyle, children }: Props) => {
    return (
        <SafeAreaView className='w-full h-full pt-5 flex-col items-center justify-between' >
            <Header />
            <View className={containerStyle}>
                {children}
            </View>
            <Footer />
        </SafeAreaView>
    )
}

export default Wrapper