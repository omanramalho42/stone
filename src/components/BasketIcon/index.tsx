import React, { useEffect }  from 'react';

import { useNavigation } from '@react-navigation/native';

import { useTailwind } from 'tailwind-rn';

import { 
  View, 
  Text, 
  TouchableOpacity 
} from 'react-native';

import { useSelector } from 'react-redux';

import { 
  selectBasketItems, 
  selectBasketTotal 
} from '../../../basketReducer';

const BasketIcon:React.FC = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);

  const tailwind = useTailwind();

  if(items?.length === 0){
    return null;
  }

  return (
    <View 
      style={[{
        position: 'absolute', 
        bottom: 10,
        zIndex: 50
        },tailwind('w-full')]}>
      <TouchableOpacity 
        style={[
          { backgroundColor: 'orange', borderRadius: 10 },
          tailwind('mx-4 p-4 flex-row items-center justify-between')]}
          onPress={() =>
            //@ts-ignore 
            navigation.navigate('Basket')
          }
        >
        <Text style={[
          { backgroundColor: '#000', opacity: 0.4 },
          tailwind('text-white font-bold text-lg px-3')]}>
          {items?.length}
        </Text>
        <Text style={tailwind('text-lg text-white font-bold')}>
          Olhar sexta
        </Text>
        <Text style={tailwind('text-lg text-white font-bold')}>
          R$ { basketTotal }
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default BasketIcon