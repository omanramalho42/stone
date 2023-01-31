import React, { useLayoutEffect, useState } from 'react';

import SanityClient, { urlFor } from '../../../sanity';

import CategoryCard from '../categoryCard';

import { ScrollView } from 'react-native';

const Categorias = () => {
  const [categories, setCategories] = useState<any>([]);

  useLayoutEffect(() => {
    SanityClient.fetch(`
      *[_type == "categoria"]
    `).then(
      (data) => setCategories(data)
    );
  },[]);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >

      {categories?.map((categoria: any, idx: number) => (
        <CategoryCard 
          key={categoria._id}
          imgUrl={urlFor(categoria.imagem).width(200).url()} 
          title={categoria.nome}
        />
      ))}
      
    </ScrollView>
  )
}

export default Categorias