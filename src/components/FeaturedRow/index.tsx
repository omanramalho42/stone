import React, { useEffect, useLayoutEffect, useState } from 'react'

import { useTailwind } from 'tailwind-rn';

import { ScrollView, Text, View } from 'react-native'

import { ArrowRightIcon } from 'react-native-heroicons/solid';

import RestaurantCard from '../RestaurantCard';

import SanityClient from '../../../sanity';

interface FeaturedRowProps {
  title: string;
  description: string;
  id: number;
  featuredCategory?: string;
}

const FeautedRow = ({ 
  title, 
  description, 
  id,
  featuredCategory 
}: FeaturedRowProps) => {
  
  const tailwind = useTailwind();

  const [restaurants, setRestaurants] = useState([]);

  useLayoutEffect(() => {
    SanityClient.fetch(`
      *[_type == "destaque" && _id == $id] {
        ...,
        restaurantes[]->{
          ...,
          pratos[]->,
          type-> {
            name
          }
        },
      }[0]
    `, { id }).then(
      (data) => setRestaurants(data?.restaurantes)
    );
  },[]);
  
  return (
    <View>
      <View style={tailwind('mt-4 flex-row items-center justify-between px-4')}>
        <Text style={tailwind('font-bold text-lg text-gray-100')}>
          { title }
        </Text>
        <ArrowRightIcon />
      </View>

      <Text style={tailwind('text-xs text-gray-100 px-4')}>
        { description }
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        style={tailwind('pt-4')}
      >
       {restaurants?.map((restaurant: any) => restaurant && (
        <RestaurantCard
          key={restaurant._id}
          id={restaurant._id}
          imgUrl={restaurant.imagem}
          title={restaurant.nome}
          rating={restaurant.avaliacao}
          genre={restaurant.tipo?.nome}
          address={restaurant.endereco}
          excerpt={restaurant.curta_descricao}
          dishes={restaurant.pratos}
          long={restaurant.long}
          lat={restaurant.lat} 
          short_description={restaurant.curta_descricao}
        />
       ))}
      </ScrollView>
    </View>
  )
}

export default FeautedRow