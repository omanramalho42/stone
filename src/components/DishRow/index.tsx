import React, { useState } from 'react'

import { useTailwind } from 'tailwind-rn'

import { View, Text, TouchableOpacity, Image } from 'react-native'

import { urlFor } from '../../../sanity';
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';
// import { Currency } from 'react-currency-formatter';

const DishRow = ({ id, name, description, price, image }: any) => {
  const tailwind = useTailwind();

  const [isPressed, setIsPressed] = useState(false);

  return (
    <>
      <TouchableOpacity 
        onPress={
          () => setIsPressed(!isPressed)
        } 
        style={tailwind(`bg-white border p-4 border-gray-200 ${isPressed && 'border-b-0'}`)}
      >
        <View style={tailwind('flex-row')}>
          <View style={tailwind('flex-1 pr-2')}>
            <Text style={tailwind('text-lg mb-1')}>
              { name }
            </Text>
            <Text style={tailwind('text-gray-400')}>
              { description }
            </Text>
            <Text style={tailwind('text-gray-400 mt-2')}>
              {/* <Currency quantity={price} currency="BRL" /> */}
              R$ { price }
            </Text>
          </View>
          
          <View>
            <Image 
              source={{ uri:urlFor(image).url() }}
              style={[
                { borderWidth: 1, borderColor: '#F9F9F9' },
                tailwind('h-20 w-20 bg-gray-300 p-4')
              ]}  
              />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View style={tailwind('bg-white px-4')}>
          <View style={tailwind('flex-row items-center mx-2 pb-3')}>
            <TouchableOpacity>
              <MinusCircleIcon size={20} color="#F9F9F9" />
            </TouchableOpacity>

            <Text>0</Text>

            <TouchableOpacity>
              <PlusCircleIcon size={20} color="#F9F9F9" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  )
}

export default DishRow