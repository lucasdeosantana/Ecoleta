import 'react-native-gesture-handler'
import '@react-native-community/masked-view'
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from "@react-navigation/native"
import Home from './pages/Home'
import Points from './pages/Points'
import Details from './pages/Details'
import UrlSearch from './pages/UrlSearch';

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
