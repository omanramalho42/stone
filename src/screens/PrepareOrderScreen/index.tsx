import React from 'react'
import { useTailwind } from 'tailwind-rn'
import { SafeAreaView, Text } from 'react-native'

const PrepareOrderScreen:React.FC = () => {
  const tailwind = useTailwind();

  return (
    <SafeAreaView 
      style={[
        { backgroundColor: 'orange' }, 
        tailwind('flex-1 justify-center items-center') 
      ]}
    >
      <Text>
        PrepareOrderScreen
      </Text>
    </SafeAreaView>
  )
}

export default PrepareOrderScreen