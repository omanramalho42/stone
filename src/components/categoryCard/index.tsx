import React from 'react'

import { 
  Image, 
  Text, 
  TouchableOpacity, 
  View 
} from 'react-native'
import { useTailwind } from 'tailwind-rn';

interface CategoryCardProps {
  imgUrl: string;
  title: string;
}

const CategoryCard = ({ imgUrl, title }: CategoryCardProps) => {
  const tailwind = useTailwind();

  return (
    <View>
      <TouchableOpacity
        onPress={() => {}}
      >
        <Image 
          source={{ uri: imgUrl }} 
          style={tailwind('h-20 w-20 rounded')}
        />
        <Text style={tailwind('absolute bottom-1 left-1 text-white font-bold')}>
          { title }
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default CategoryCard