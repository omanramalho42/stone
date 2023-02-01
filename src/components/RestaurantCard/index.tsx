import React from 'react'

import { useTailwind } from 'tailwind-rn';

import {
   Image, 
   Text, 
   TouchableOpacity, 
   View 
} from 'react-native'

import { urlFor } from '../../../sanity';

import { useNavigation } from '@react-navigation/native';

import { StarIcon, MapIcon } from 'react-native-heroicons/solid';

interface RestaurantCardProps {
  id: number;
  imgUrl: string;
  title: string;
  rating: number;
  genre: string;
  address: string;
  short_description: string;
  excerpt: string;
  dishes: any[];
  long: number;
  lat: number;
}

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat
}: RestaurantCardProps) => {
  const tailwind = useTailwind();

  const navigation: any = useNavigation();

  return (
    <TouchableOpacity 
      onPress={() => {
        navigation.navigate('Restaurant', {
          id,
          imgUrl,
          title,
          rating,
          genre,
          address,
          short_description,
          dishes,
          long,
          lat
        });
      }}
      style={[{ 
        backgroundColor: '#121212', 
        marginRight: 10 
      }, tailwind('p-4 bg-gray-800') ]}
    >
      <Image 
        source={{
          uri: urlFor(imgUrl).url(),
        }}
        style={tailwind('h-36 w-64 rounded-sm')}
      />
      <View style={tailwind('px-3 pb-4')}>
        <Text style={tailwind('font-bold text-lg text-gray-100 pt-2')}>
          { title }
        </Text>
        <View style={tailwind('flex-row items-center mx-1')}>
          <StarIcon color="orange" opacity={0.5} size={22} />
          <Text style={tailwind('text-xs text-gray-100')}>
            <Text style={{ color: 'orange' }}>
              { genre }
            </Text>
          </Text>
        </View>

        <View style={tailwind('flex-row items-center mx-1')}>
          <MapIcon color="#F9F9F9" size={22} />
          <Text style={tailwind('text-xs text-gray-100 mx-1')}>
            Localizado: { address } 
          </Text>
        </View>
      </View>

    </TouchableOpacity>
  )
}

export default RestaurantCard