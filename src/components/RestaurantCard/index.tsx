import React from 'react'

import { useTailwind } from 'tailwind-rn';

import {
   Image, 
   Text, 
   TouchableOpacity, 
   View 
} from 'react-native'

import { StarIcon, MapIcon } from 'react-native-heroicons/solid';

interface RestaurantCardProps {
  id: number;
  imgUrl: string;
  title: string;
  rating: number;
  genre: string;
  address: string;
  excerpt: string;
  dishes: any[];
  long: number;
  lat: number;
}

const RestaurantCard = (props: RestaurantCardProps) => {
  const tailwind = useTailwind();

  return (
    <TouchableOpacity 
      style={[{ 
        backgroundColor: '#121212', 
        marginRight: 10 
      }, tailwind('p-4 bg-gray-800') ]}
    >
      <Image 
        source={{
          uri: props.imgUrl,
        }}
        style={tailwind('h-36 w-64 rounded-sm')}
      />
      <View style={tailwind('px-3 pb-4')}>
        <Text style={tailwind('font-bold text-lg text-gray-100 pt-2')}>
          { props.title }
        </Text>
        <View style={tailwind('flex-row items-center mx-1')}>
          <StarIcon color="orange" opacity={0.5} size={22} />
          <Text style={tailwind('text-xs text-gray-100')}>
            <Text style={{ color: 'orange' }}>
              { props.genre }
            </Text>
          </Text>
        </View>

        <View style={tailwind('flex-row items-center mx-1')}>
          <MapIcon color="#F9F9F9" size={22} />
          <Text style={tailwind('text-xs text-gray-100 mx-1')}>
            Localizado: { props.address } 
          </Text>
        </View>
      </View>

    </TouchableOpacity>
  )
}

export default RestaurantCard