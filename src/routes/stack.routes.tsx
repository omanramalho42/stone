import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { 
  BasketScreen, 
  Delivery, 
  Home, 
  PrepareOrderScreen, 
  Profile, 
  RestaurantScreen 
} from '../screens';

const { Screen, Navigator } = createNativeStackNavigator();

export const StackRoutes:React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: true
      }}
    >
      <Screen 
        name='Home' 
        component={Home}
        options={{
          title: "Tela inicial",
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#d9d9d9'
          },
          headerTintColor: '#1b1b1b'
        }}
      />
      <Screen 
        name='Profile' 
        component={Profile}
        options={{
          title: "Configurações de usuário",
          headerTitleAlign: 'center'
        }} 
      />
      <Screen 
        name='Restaurant' 
        component={RestaurantScreen}
        options={{
          title: "Página do Restaurante",
          headerTitleAlign: 'center'
        }} 
      />
      <Screen 
        name='Basket'
        component={BasketScreen}
        options={{
          presentation: 'modal',
          headerShown: false,
        }} 
      />

      <Screen 
        name='PrepareOrderScreen'
        component={PrepareOrderScreen}
        options={{
          presentation: 'modal',
          headerShown: false,
        }} 
      />
      <Screen 
        name='Delivery'
        component={Delivery}
        options={{
          presentation: 'modal',
          headerShown: false,
        }} 
      /> 
     

    </Navigator>
  )
}