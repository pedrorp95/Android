
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PrincipalScreen from '../navigation/PrincipalScreen';


//PANTALLA PRINCIPAL     -----------------------------STACK-----------------------------
const PrincipalStack = createNativeStackNavigator();
//Nombre de arriba en la cabecera
function PrincipalStackScreen() {
  return (
    <PrincipalStack.Navigator initialRouteName="Principal">
       <PrincipalStack.Screen name="Historia" component={PrincipalScreen}
       options={{
        headerStyle: {
          backgroundColor: '#469497',
        },
        headerTitleStyle: {
          color: 'white',
          fontWeight: "500"
        },
        headerTitleAlign: 'center',
      }} 
       />
    </PrincipalStack.Navigator>
  );
}
export default PrincipalStackScreen;