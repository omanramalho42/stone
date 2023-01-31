import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react'

import { useNavigation } from '@react-navigation/native'

import { 
  UserIcon, 
  ChevronDownIcon,
  SparklesIcon,
  AdjustmentsHorizontalIcon
} from 'react-native-heroicons/solid'

import { useTailwind } from 'tailwind-rn';

import { 
  View, 
  Text, 
  Image,
  TextInput,
  ScrollView
} from 'react-native'

import { Categorias, Header } from '../../components';

import Layout from '../../components/Layout';

import { SafeAreaView } from 'react-native-safe-area-context';
import FeaturedRow from '../../components/FeaturedRow';

import SanityClient from '../../../sanity';

const Home = () => {
  const [featuredCategories, setFeaturedCategories] = useState<any[]>([]);
  //assim que a tela for construida
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  },[]);
  
  useLayoutEffect(() => {
    SanityClient.fetch(`
      *[_type == "destaque"] {
        ...,
        restaurantes[]->(
          ...,
          pratos[]->
        }
      }`
    ).then((data) => {
      console.log(data),
      setFeaturedCategories(data);
    });
  },[]);

  const navigation = useNavigation();


  const handleSwitchScreen = () => {
    //@ts-ignore
    navigation.navigate('Profile');
  }

  const tailwind = useTailwind();

  const [search, setSearch] = useState<string>("");
  useEffect(() => { console.log(search) },[search]);
  
  return (
    <SafeAreaView style={{ backgroundColor: '#121212' }}>
      
      <Header  />

      {/* SEARCH AREA */}
      <View style={tailwind('flex-row items-center pb-2 mx-4')}>
        
        {/* FILTER */}
        <View style={tailwind('flex-row flex-1 bg-gray-200 p-3')}>
          <SparklesIcon size={20} color="#F9F9F9" />
          <TextInput 
            value={search}
            onChange={(event: any) => 
              console.log(event,'EVENTO')
            }
            placeholder='Restaurantes próximos' 
            keyboardType='default' 
          />
        </View>
        
        {/* ANOTHER FILTER */}
        <AdjustmentsHorizontalIcon 
          color="#F9F9F9" 
          style={tailwind('mx-2')} 
        />
      </View>
      
      {/* SCROOLLVIEW CATEGORIES */}
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 100,
        }} 
        style={tailwind('bg-gray-900')}
      >
        <Categorias />
        {['Mais pedidos 🤲','Mais baratos 🔥','Mais Populares ❤️'].map((i, idx) => (
          <FeaturedRow
            key={idx}
            id={idx} 
            title={i} 
            description="Pago recentenmente por parceiros" 
          />
        ))}
      </ScrollView>
    
    </SafeAreaView>
  )
}

export default Home;