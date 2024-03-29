import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import InputField from './components/InputField'
import DropDownMenu from './components/DropDownMenu'

const dropdownList = ['Bưởi', 'Cam', 'Đào', 'Lê', 'Xoài', 'Dừa']

const Lab6Form = () => {
    const [selected, setSelected] = React.useState(dropdownList[0])
    return (
        <View className='mt-5 p-2'>
            {/* name + age */}
            <View className='w-full flex-row items-center mb-2'>
                <InputField
                    size='w-2/3'
                    title='Name'
                    require={true}
                    onValueChange={(value) => {
                        // console.log(value);
                    }} />
                <InputField
                    size={'flex-1 ml-2'}
                    title="User's age"
                    require={true}
                    onValueChange={(value) => {
                        // console.log(value);
                    }} />
            </View>

            <InputField
                size='w-full mb-2'
                title='Email'
                require={true}
                onValueChange={function (value: string): void {
                    throw new Error('Function not implemented.')
                }} />

            <InputField
                size='w-full mb-2'
                title='Password'
                require={true}
                onValueChange={function (value: string): void {
                    throw new Error('Function not implemented.')
                }} />

            <DropDownMenu size='mb-2' selected={selected} list={dropdownList} title={'Dropdown'} require={true} onSelected={setSelected} />

            <TouchableOpacity className='bg-blue-400 p-2 rounded-[10px] items-center z-0' >
                <Text className='font-bold text-2xl text-white'>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Lab6Form