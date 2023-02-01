import React, { useEffect, useLayoutEffect } from 'react'

import { useNavigation, useRoute } from '@react-navigation/native';

import { useTailwind } from 'tailwind-rn';

import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native'

import { urlFor } from '../../../sanity';

import { 
  ArrowLeftIcon, 
  ChevronLeftIcon, 
  ChevronRightIcon,
  MapPinIcon,
  QuestionMarkCircleIcon, 
  StarIcon 
} from 'react-native-heroicons/solid';

import { DishRow } from '../../components';

import BasketIcon from '../../components/BasketIcon';

import { useDispatch } from 'react-redux';

import { setRestaurant } from '../../../restaurantReducer';

const RestaurantScreen:React.FC = () => {
  const navigation = useNavigation();
  const tailwind = useTailwind();

  const dispatch = useDispatch();

  const {
    params: {
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
    }
  } = useRoute<any>();

  useEffect(() => {
    dispatch(
      setRestaurant({
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
      })
    );
  },[]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  },[]);

  return (
    <>
      <ScrollView>
        <View>
          <Image 
            source={{ uri: urlFor(imgUrl).url() }} 
            style={tailwind('w-full h-56 bg-gray-300 p-4')} 
          />
          <TouchableOpacity 
            onPress={navigation.goBack}
            style={tailwind('absolute top-14 left-5 p-2 bg-gray-100 rounded-full')}
          >
            <ArrowLeftIcon size={20} color="#121212" />
          </TouchableOpacity>
        </View>

        {/* <View style={tailwind('')}> */}
          <View style={tailwind('px-4 pt-4')}>
            <Text style={tailwind('text-3xl font-bold')}>
              { title }
            </Text>
            
            <View style={tailwind('flex-row mx-2 my-1')}>  
              
              <View style={tailwind('flex-row items-center mx-1')}>
                <StarIcon color="orange" size={22} opacity={0.5} />
                <Text style={tailwind('text-orange-500')}>
                  { rating }
                </Text>
                { genre }
              </View>

              <View style={tailwind('flex-row items-center mx-1')}>
                <MapPinIcon color="gray" size={22} opacity={0.4} />
                <Text style={tailwind('text-xs text-gray-500')}>
                  Localização: { address }
                </Text>
              </View>

            </View>

            <Text style={tailwind('text-gray-500 mt-2 pb-4')}>
              { short_description }
            </Text>
          {/* </View> */}

          <TouchableOpacity style={tailwind('flex-row items-center mx-1 p-4 border-y')}>
            <QuestionMarkCircleIcon color="gray" size={20} opacity={0.4} />
            <Text style={[{ fontSize: 14 },tailwind('pl-2 flex-1 font-bold')]}>
              Tem algum tipo de alérgia a alimento?
            </Text>
            <ChevronRightIcon size={20} color="gray" opacity={0.2} />
          </TouchableOpacity>
        </View>
        
        <View style={{ paddingBottom: 36 }}>
          <Text style={tailwind('px-4 pt-6 mb-3 font-bold text-xl')}>
            Menu
          </Text>

          {dishes?.map(((dish: any) => (
            <DishRow 
              key={dish._id}
              id={dish._id}
              name={dish.nome}
              description={dish.curta_descricao}
              price={dish.preco}
              image={dish.imagem}
            />
          )))}
        </View>
      </ScrollView>
      
      <BasketIcon />
    </>
  )
}

export default RestaurantScreen