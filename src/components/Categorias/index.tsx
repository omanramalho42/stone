import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import CategoryCard from '../categoryCard'

const Categorias = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >

      {['1','1','1'].map((i) => (
        <CategoryCard 
          imgUrl="https://links.papareact.com/wru" 
          title="Product One" 
        />
      ))}
      
      <Text>Categorias</Text>
    </ScrollView>
  )
}

export default Categorias