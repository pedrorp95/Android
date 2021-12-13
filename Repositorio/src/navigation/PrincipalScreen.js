import React, { useState }  from 'react';
import {Text, View,Image,ScrollView,Switch,StyleSheet} from 'react-native';

//PANTALLA PRINCIPAL      -----------------------------SCREEN-----------------------------
function PrincipalScreen(){
    const [isEnabled, setIsEnabled] = useState(false);
    return(
      <View style={style.fondo} >
        <ScrollView>
  
        
        <Text style={style.text} >El teléfono móvil o teléfono celular es un aparato indispensable en la actualidad; sin embargo su popularización ha sido un fenómeno muy reciente.
        En un principio el teléfono móvil solo podía ser usado en vehículos por su tamaño, 
        reduciéndose posteriormente a una unidad portátil, y finalmente al tamaño de bolsillo que se utiliza hoy en día.</Text>
  
        {/* Switch para boton de imagen */}
        <Switch
          onValueChange={() => setIsEnabled(previosState => !previosState)}
          value={isEnabled}
        />
        {isEnabled ? (
          <Image
            style={{ width: 300, height: 370, marginVertical:20, marginHorizontal:50}}
            source={require('../images/samsung.jpg')}
          />
          ) : null
        }
          <Text style={style.text} >En Europa, la primera red de telefonía móvil fue instalada por la compañía nacional de telefonía sueca, Televerket, en 1955.7​8​
          Los primeros equipos eran grandes y pesados, por lo que estaban casi exclusivamente destinados a un uso a bordo de vehículos. Generalmente se instalaba el equipo de radio en el maletero y se pasaba un cable con el teléfono hasta el salpicadero del coche. Si bien en los años 40 el equipo ocupaba todo el maletero, en los años 60 su tamaño se había reducido al de un maletín gracias al invento del transistor. El transistor, creado en 1948 en los Laboratorios Bell, sustituiría los tubos de vacío para amplificar y conmutar señales, inaugurando la era de la miniaturización de los aparatos electrónicos.</Text>
          </ScrollView>
      </View>
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
  export default PrincipalScreen;