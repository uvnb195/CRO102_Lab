import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'
import React from 'react'
import { useGetProductsQuery } from '../redux/productsApi'
import { MaterialIcons } from '@expo/vector-icons'

const DummyJson = () => {
    const { data, isError, isLoading } = useGetProductsQuery({})
    console.log(data?.products?.length);

    return (
        <View className='w-full h-full pt-5 flex-col items-center'>
            {/* <TouchableOpacity disabled={isLoading || isError}>
                <View className={`${isLoading || isError ? 'bg-slate-400 ' : 'bg-blue-300 '}px-4 h-[50] items-center justify-center rounded-lg`}>
                    <Text className='font-bold text-lg'>Get All Products</Text>
                </View>
            </TouchableOpacity> */}
            <View className='mt-5'>
                {isLoading == true && <ActivityIndicator size={40} color={'black'} />}
                {isError == true &&
                    <View className='flex-row  items-center '>
                        <MaterialIcons name='error-outline' size={40} color='red' />
                        <Text className='ml-2 text-lg' style={{ color: 'red' }}>Error fetching data</Text>
                    </View>}
                {data && <FlatList data={data.products} renderItem={({ item, index }) =>
                    <View className={`border-y-[1px] ${index % 2 == 0 ? ' bg-blue-100 ' : '  bg-yellow-100 '}`}>
                        <Text className='text-2xl font-bold ' key={item.id} >{item.title}</Text>
                    </View>
                } />}
            </View>
        </View>
    )
}

export default DummyJson