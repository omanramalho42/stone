import React from "react";

import { Provider } from "react-redux";
import { store } from '../../store';

import { NavigationContainer } from "@react-navigation/native";

import { StackRoutes } from './stack.routes';

export function Routes() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <StackRoutes />
      </Provider>
    </NavigationContainer>
  )
}