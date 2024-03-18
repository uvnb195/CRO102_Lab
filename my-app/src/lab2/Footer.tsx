import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Footer = () => {
    const [color, setColor] = useState('')
    const randomColor = () => {
        const red = Math.floor(Math.random() * 255)
        const blue = Math.floor(Math.random() * 255)
        const green = Math.floor(Math.random() * 255)

        setColor(`rgb(${red},${blue},${green})`)
    }
    return (
        <TouchableOpacity
            onPress={randomColor}
            className={`w-full`}
            style={{
                backgroundColor: color
            }}>
            <View>
                <Text className='text-lg p-2 text-center '>Thời gian cập nhật thông tin: 16/5/2024 18:02:46</Text>
            </View>
        </TouchableOpacity>
    )
}

export default React.memo(Footer)