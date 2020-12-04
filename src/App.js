import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack'

import Home from './views/Home'
import About from './views/About'

const Stack = createStackNavigator()

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='About' component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  )
} 