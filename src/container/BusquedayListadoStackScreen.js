import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListadoScreen from '../navigation/ListadoScreen';
import BusquedaScreen from '../navigation/BusquedaScreen';
//PANTALLA BUSQUEDA     -----------------------------STACK-----------------------------
const BusquedaStack = createNativeStackNavigator();
function BusquedaStackScreen() {
  return (
    <BusquedaStack.Navigator>
      <BusquedaStack.Screen name="Búsqueda de Usuarios" component={BusquedaScreen}
      options={{
        headerStyle: {
          backgroundColor: '#469497'
        },
        headerTitleStyle: {
          color: 'white',
          fontWeight: "500"
        },
        headerTitleAlign: 'center'
      }} 
      />
      <BusquedaStack.Screen name="Lista de Usuarios" component={ListadoScreen}
      options={{
        headerStyle: {
          backgroundColor: '#469497',
        },
        headerTitleStyle: {
          color: 'white',
          fontWeight: "500"
        },
        headerTitleAlign: 'center',
      }} />
    </BusquedaStack.Navigator>
  );
}
export default BusquedaStackScreen;