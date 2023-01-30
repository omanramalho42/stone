import React, { useLayoutEffect } from 'react'

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
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView
} from 'react-native'

import { Categorias, Header } from '../../components';
import Layout from '../../components/Layout';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  const navigation = useNavigation();
  
  //assim que a tela for construida
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  },[]);

  const handleSwitchScreen = () => {
    //@ts-ignore
    navigation.navigate('Profile');
  }

  const tailwind = useTailwind();

  return (
    <SafeAreaView style={{ backgroundColor: '#121212' }}>
      <View style={tailwind('flex-row pb-3 items-center mx-4')}>
        <Image 
          source={{
            uri: "https://links.papareact.com/wru" 
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
          
        <UserIcon size={25} color="#F9F9F9" />
      </View>

      <View style={tailwind('flex-row items-center pb-2 mx-4')}>
        <View style={tailwind('flex-row flex-1 bg-gray-200 p-3')}>
          <SparklesIcon size={20} color="#F9F9F9" />
          <TextInput 
            placeholder='Restaurantes próximos' 
            keyboardType='default' 
          />
        </View>
        
        <AdjustmentsHorizontalIcon color="#F9F9F9" style={tailwind('mx-2')} />
      </View>

      <ScrollView
        contentContainerStyle={{
          paddingBottom: 100,
        }} 
        style={tailwind('bg-gray-200')}
      >
        
        <Categorias />
      </ScrollView>
    
    </SafeAreaView>
  )
}

export default Home;