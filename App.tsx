import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Routes } from './src/routes';

import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json';

export default function App() {
  return (
    //@ts-ignore
    <TailwindProvider utilities={utilities}>
      <StatusBar style="auto" />
      <Routes /> 
    </TailwindProvider>
  );
}
