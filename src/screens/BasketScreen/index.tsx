import React , { useState, useEffect, useLayoutEffect } from 'react'

import { useNavigation } from '@react-navigation/native'

import { useDispatch, useSelector } from 'react-redux';

import { 
  removeFromBasket, 
  selectBasketItems, 
  selectBasketTotal
} from '../../../basketReducer';

import { selectRestaurant } from '../../../restaurantReducer';

import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context';

import { XCircleIcon } from 'react-native-heroicons/solid';

import { useTailwind } from 'tailwind-rn';

import { urlFor } from '../../../sanity';

const BasketScreen: React.FC = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const total = useSelector(selectBasketTotal);

  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState<any[]>([]);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  },[]);

  useEffect(() => {
    const groupedItems = items.reduce((results: any, item: any) => {
      (results[items.id] = results[items.id] || []).push(item);
      return results;
    }, {});

    setGroupedItemsInBasket(groupedItems);
  },[items]);

  useEffect(() => { 
    // console.log(
    //   items[0]?.name,
    //   items[0]?.image,
    //   items[0]?.price, 
    //   'name'
    // );

    // console.log(Object.entries(groupedItemsInBasket.map(([key,items]) => items)), 'items');
  },[groupedItemsInBasket]);


  const tailwind = useTailwind();

  return (
    <SafeAreaView style={tailwind('flex-1 bg-white')}>
      <View style={tailwind('flex-1 bg-gray-100')}>
        <View 
          style={[
            { borderBottomWidth: 1, borderBottomColor: 'orange' },
            tailwind('p-4 bg-white')
          ]}
        >
          <View style={[tailwind('items-center')]}>
            <Text style={[tailwind('text-lg font-bold'), { textAlign: 'center' }]}>
              Sexta de compras
            </Text>
            <Text style={[tailwind('text-gray-400'), { textAlign: 'center' }]}>
              { restaurant.title }
            </Text>
          </View>

          <TouchableOpacity 
            style={[{
              position: 'absolute', top: -1, right: 5
            },tailwind('rounded-full bg-white')
            ]}
            onPress={navigation.goBack}
          >
            <XCircleIcon color="orange" height={50} width={50} />
          </TouchableOpacity>
        </View>

        <View 
          style={[
            { paddingVertical: 10, marginTop: 10 }, 
            tailwind('flex-row items-center px-4 bg-white')
          ]}
        >
          <Image 
            source={{ 
              uri: 'http://links.papareact.com/wru' 
            }} 
            style={[
              { marginRight: 5 },
              tailwind('h-7 w-7 bg-gray-300 p-4 rounded-full')
            ]}
          />
          <Text style={tailwind('flex-1')}>
            Entrega entre 50 -75 min
          </Text>
          <TouchableOpacity>
            <Text style={{ color: 'orange' }}>
              Trocar
            </Text>
          </TouchableOpacity>
        </View>
     
        <ScrollView>
          {Object.entries(groupedItemsInBasket).map(([key, items]) => items && (
            <View 
              key={key} 
              style={[
                tailwind('flex-row items-center mx-2 bg-white px-4'), 
                { paddingVertical: 5, marginTop: 5 }
              ]}
            >
              <Text>
                { items?.length } x
              </Text>
              <Image 
                source={{
                  uri: urlFor(items[0]?.image).url()
                }}
                style={{ width: 50, height: 50, borderRadius: 25 }}
              />
              <Text style={[{ marginLeft: 5 }, tailwind('flex-1')]}>
                { items[0]?.name }
              </Text>
              <Text style={[{ marginRight: 10 },tailwind('text-gray-400')]}>
                R$ { items[0]?.price }
              </Text>

              <TouchableOpacity>
                <Text 
                  style={[{ color: 'orange' },tailwind('text-xs')]}
                  onPress={() => dispatch(removeFromBasket({ id: items[0]?.id }))}
                >
                  Remover
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View style={tailwind('p-2 bg-white')}>
          <View style={tailwind('flex-row justify-between p-2')}>
            <Text style={tailwind('text-gray-400')}>
              Subtotal
            </Text>
            <Text style={tailwind('text-gray-400')}>
                R$ { total }
            </Text>
          </View>

          <View style={tailwind('flex-row justify-between p-2')}>
            <Text style={tailwind('text-gray-400')}>Delivere Fee</Text>
            <Text style={tailwind('text-gray-400')}>
                R$ 5.99
            </Text>
          </View>

          <View style={tailwind('flex-row justify-between p-2')}>
            <Text>Pedido total</Text>
            <Text style={tailwind('font-bold')}>
                R$ { total + 5.99 }
            </Text>
          </View>

          <TouchableOpacity 
            style={[
              { backgroundColor: 'orange', borderRadius: 15, margin: 5 },
              tailwind('p-4')
            ]}
            onPress={() => 
              //@ts-ignore
              navigation.navigate('PrepareOrderScreen')
            }
          >
            <Text style={[
              { textAlign: 'center' },
              tailwind('text-white text-lg font-bold')
            ]}>
              Fazer pedido
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  )
}

export default BasketScreen