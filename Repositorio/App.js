import React from 'react';
import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import PrincipalStackScreen from './src/container/PrincipalStackScreen';
import BusquedaStackScreen from './src/container/BusquedayListadoStackScreen';

// Tab---Stack---Screen



function pintar ({item}){
  if(item.age==route.params.numero){
    return <View>
      <Text>{item.name}</Text>
      <Text>{item.age}</Text>
    </View>
  }
}


//--------------------------------------------------------------------------------TAB--------------------------------------------------------------------------------
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      
      <Tab.Navigator
      screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Historia') {
                iconName = focused
                  ? 'archive'
                  : 'archive-outline';
              } else if (route.name === 'Buscar') {
                iconName = focused ? 'search' : 'search-outline';
              }
              
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'grey',
          })}
        >
        <Tab.Screen options={{ headerShown: false }} name="Historia" component={PrincipalStackScreen} />
        <Tab.Screen options={{ headerShown: false }} name="Buscar" component={BusquedaStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


const style = StyleSheet.create({
  fondo:{
    backgroundColor: '#C8FDFF'
  },
  header:{
    textAlign:'center',
    backgroundColor: '#C8FDFF'
  },
  text:{
    fontSize: 15,
    color: 'black',
    textAlign:'center',
    fontWeight: 'bold'
  },
  input: {
    marginTop: 465,
    width: 150,
    height: 40,
    borderWidth: 1
  }
})