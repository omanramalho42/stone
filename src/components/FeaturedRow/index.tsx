import React from 'react'

import { useTailwind } from 'tailwind-rn';

import { ScrollView, Text, View } from 'react-native'

import { ArrowRightIcon } from 'react-native-heroicons/solid';

import RestaurantCard from '../RestaurantCard';

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
        <RestaurantCard 
          id={123}
          imgUrl="https://links.papareact.com/wru"
          title="Oman"
          rating={4.5}
          genre="Austalian"
          address="Clovis de maia"
          excerpt="descricao breve do reustaurante"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard 
          id={123}
          imgUrl="https://links.papareact.com/wru"
          title="Oman"
          rating={4.5}
          genre="Austalian"
          address="Clovis de maia"
          excerpt="descricao breve do reustaurante"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard 
          id={123}
          imgUrl="https://links.papareact.com/wru"
          title="Oman"
          rating={4.5}
          genre="Austalian"
          address="Clovis de maia"
          excerpt="descricao breve do reustaurante"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard 
          id={123}
          imgUrl="https://links.papareact.com/wru"
          title="Oman"
          rating={4.5}
          genre="Austalian"
          address="Clovis de maia"
          excerpt="descricao breve do reustaurante"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard 
          id={123}
          imgUrl="https://links.papareact.com/wru"
          title="Oman"
          rating={4.5}
          genre="Austalian"
          address="Clovis de maia"
          excerpt="descricao breve do reustaurante"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard 
          id={123}
          imgUrl="https://links.papareact.com/wru"
          title="Oman"
          rating={4.5}
          genre="Austalian"
          address="Clovis de maia"
          excerpt="descricao breve do reustaurante"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  )
}

export default FeautedRow