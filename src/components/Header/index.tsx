import React from 'react'

import { useTailwind } from 'tailwind-rn'

import { View, Text, Image } from 'react-native'
import { ChevronDownIcon, UserIcon } from 'react-native-heroicons/solid';

const Header = () => {
  const tailwind = useTailwind();

  return (
    <View style={tailwind('flex-row pb-3 items-center mx-4')}>
      <Image 
        source={{
          uri: "https://links.papareact.com/wru" 
        }}
        style={tailwind('h-7 w-7 bg-gray-300 p-4 rounded-full')}
      />
      <View style={tailwind('flex-1 mx-2')}>
        <Text style={tailwind('font-bold text-gray-400 text-xs')}>
          Entrega já
        </Text>
        <Text style={tailwind('font-bold text-gray-100 text-xl')}>
          Localização atual
          <ChevronDownIcon size={20} color="#f9f9f9" />
        </Text>
      </View>
        
      <UserIcon size={25} color="#F9F9F9" />
    </View>
  )
}

export default Header