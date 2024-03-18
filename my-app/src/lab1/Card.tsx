import { View, Text, ImageSourcePropType, Image } from 'react-native'
import React from 'react'

type Props = {
    title?: string,
    containerStyle?: string,
    details: CardFieldType[],
    children?: React.ReactNode,
}

const Card = ({ title, containerStyle, children, details }: Props) => {
    return (
        <View className={`${containerStyle} px-4 py-4`} >
            {title &&
                <Text className='text-2xl font-bold tracking-[2px] py-2'>{title}</Text>}

            <View className='bg-slate-200 flex-grow rounded-lg p-2' style={{
                elevation: 10
            }} >
                {details && details.map((item, index) => <CardField key={index} data={item} />)}

                {children}
            </View>

        </View>
    )
}

type CardFieldType = {
    title: string,
    desc?: string
}

type CardFieldProps = {
    data: CardFieldType
}

const CardField = ({ data }: CardFieldProps) => (
    <View className='py-[8]'>
        <Text className='text-sm text-gray-600 font-semibold'>{data.title}</Text>
        {data.desc && <Text className='text-xl font-semibold'>{data.desc}</Text>}
    </View>
)

export default Card