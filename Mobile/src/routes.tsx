import React, { useEffect } from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack'
import Home from './pages/Home'
import Points from './pages/Points'
import Details from './pages/Details'
import UrlSearch from './pages/UrlSearch';
import { AsyncStorage } from 'react-native';

interface propsI{
    selectFirstScreen:boolean
}

const AppStack = createStackNavigator()


const  Routes: React.FC<propsI> = ({ selectFirstScreen }) => {

  return(
      <NavigationContainer>
        <AppStack.Navigator headerMode="none" screenOptions={{cardStyle:{
          backgroundColor: "#f0f0f5",
        }}}>
          { selectFirstScreen && <AppStack.Screen name="UrlSearch" component={UrlSearch} />}
          <AppStack.Screen name="Home" component={Home} />
          <AppStack.Screen name="Points" component={Points} />
          <AppStack.Screen name="Details" component={Details} />
        </AppStack.Navigator>
      </NavigationContainer>
  )
}

export default Routes;
