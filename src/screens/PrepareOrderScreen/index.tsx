import React, { useEffect } from 'react';

import { useTailwind } from 'tailwind-rn'
import { useNavigation } from '@react-navigation/native'

import { SafeAreaView } from 'react-native'

import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'

const PrepareOrderScreen:React.FC = () => {
  const tailwind = useTailwind();
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      //@ts-ignore
      navigation.navigate('Delivery');
    }, 4000);
  },[])

  return (
    <SafeAreaView 
      style={[
        { backgroundColor: 'orange', justifyContent: 'center' }, 
        tailwind('flex-1 items-center') 
      ]}
    >
      <Animatable.Image
        source={require('../../../assets/preparing.gif')}
        animation="slideInUp"
        iterationCount={1}
        style={{ width: '100%', height: 280 }}     
      />

      <Animatable.Text
        animation="slideInUp"
        iterationCount={1} 
        style={[
          { marginVertical: 10, textAlign: 'center' }, 
          tailwind('text-lg text-white font-bold')
        ]}     
      >
        Espere o restaurante aceitar o seu pedido!
      </Animatable.Text>

      <Progress.Circle color="#FFF" indeterminate={true} />

    </SafeAreaView>
  )
}

export default PrepareOrderScreen