import React from 'react'

import { useNavigation } from '@react-navigation/native'

import { 
  View, 
  Text, 
  Image, 
  SafeAreaView, 
  TouchableOpacity 
} from 'react-native'

import { PhoneIcon, XCircleIcon } from 'react-native-heroicons/solid'

import { useTailwind } from 'tailwind-rn'

import * as Progress from 'react-native-progress';

import { useSelector } from 'react-redux'
import { selectRestaurant } from '../../../restaurantReducer'

import MapView, { Marker } from 'react-native-maps'

const Delivery: React.FC = () => {
  const tailwind = useTailwind()
  const navigation = useNavigation();

  const restaurant = useSelector(selectRestaurant);

  return (
    <View 
      style={[
        { backgroundColor: 'orange'},
        tailwind('flex-1')
      ]}
    >
      <SafeAreaView style={{ zIndex: 50 }}>
        <View
          style={[
            tailwind('flex-row p-4 justify-between')
          ]}
        >
          <TouchableOpacity 
            onPress={
              //@ts-ignore
              () => navigation.navigate('Home')
            }
          >
            <XCircleIcon color="white" size={30} />
          </TouchableOpacity>

          <Text style={tailwind('text-white text-lg')}>
            Ajuda com o pedido
          </Text>
        </View>
      
        <View 
          style={[
            { 
              zIndex: 50, 
              marginVertical: 5,
              shadowOpacity: 0.3,
              shadowRadius: 25,
              shadowOffset: 2, 
              shadowColor: 'rgba(0,0,0,0.3)',
              borderRadius: 10,
              padding: 16
            },
            tailwind('bg-white mx-4')
          ]}
        >
          <View style={tailwind('flex-row justify-between')}>
            <View>
              <Text style={tailwind('text-lg text-gray-400')}>
                Estimativa total
              </Text>
              <Text 
                style={[
                  {fontSize: 30 },
                  tailwind('font-bold')
                ]}
              >
                33-55 Minutos
              </Text>
            </View>
            <Image 
              source={{
                uri: "https://links.papareact.com/wru"
              }}
              style={{ width: 42, height: 42 }}
            />
          </View>

          <Progress.Bar color="orange" indeterminate={true} style={tailwind('mt-2')} />

          <Text style={tailwind('mt-2 text-gray-500')}>
            Seu pedido foi feito pelo(a) {restaurant.title} e já está sendo preparado
          </Text>
        </View>
      </SafeAreaView>

      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005
        }}
        style={[
          { 
            zIndex: 0,
            marginVertical: 10, 
            borderRadius: 5,
          },
          tailwind('flex-1')
        ]}
        mapType="mutedStandard"
      >
        <Marker 
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.long
          }}
          title={restaurant.title}
          description={restaurant.short_description}
          identifier="origin"
          pinColor="orange"
        />
      </MapView>

      <SafeAreaView 
        style={[
          { height: 75 },
          tailwind('bg-white flex-row items-center')
        ]}
      >
        <Image
          source={{
            uri: "https://links.papareact.com/wru"
          }}
          style={[
            { width: 12, height: 12, marginHorizontal: 5 },
            tailwind('bg-gray-300 p-4 rounded-full')
          ]}
        />

        <View style={tailwind('flex-1')}>
          <Text style={tailwind('text-lg')}>
            Oman Ramalho
          </Text>
          <Text style={tailwind('text-gray-400')}>
            Mais informaçoes
          </Text>
        </View>

        <View style={tailwind('mx-4')}>
          {/* <Text 
            style={[
              tailwind('text-lg font-bold'), 
              { marginRight: 5, color: '#121212' }
            ]}
          > */}
            <PhoneIcon size={22} color="green" />
            {/* Ligar */}
          {/* </Text> */}
        </View>
      </SafeAreaView>

    </View>
  )
}

export default Delivery