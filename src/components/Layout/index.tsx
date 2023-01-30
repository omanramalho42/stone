import React from 'react'
import { SafeAreaView, View } from 'react-native'

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <SafeAreaView style={{ backgroundColor: '#121212', height: '100%', width: '100%' }}>
      { children }
    </SafeAreaView>
  )
}

export default Layout