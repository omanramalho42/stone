import React from 'react'

import { useTailwind } from 'tailwind-rn'

import { useNavigation } from '@react-navigation/native';

import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity 
} from 'react-native'

import { 
  ChevronDownIcon, 
  UserIcon
} from 'react-native-heroicons/solid';

const Header = () => {
  const tailwind = useTailwind();

  const navigation = useNavigation();

  return (
    <View style={tailwind('flex-row pb-3 items-center mx-4')}>
      <Image 
        source={{
          uri: "http://github.com/omanramalho42.png" 
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
      
      <TouchableOpacity
        onPress={() =>
          //@ts-ignore 
          navigation.navigate('Profile')
        }
      >
        <UserIcon 
          size={25} 
          color="#F9F9F9" 
        />
      </TouchableOpacity>
    </View>
  )
}

export default Header