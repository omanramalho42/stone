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

      {['1','1','1','2','2','1','1','2','1','2'].map((i,idx) => (
        <CategoryCard 
          key={idx}
          imgUrl="https://links.papareact.com/wru" 
          title="Product One" 
        />
      ))}
      
    </ScrollView>
  )
}

export default Categorias