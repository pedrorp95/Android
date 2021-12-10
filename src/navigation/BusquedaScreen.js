import React from 'react';
import {TextInput, Text, View, Button,StyleSheet} from 'react-native';

//PANTALLA BUSQUEDA     -----------------------------SCREEN-----------------------------
function BusquedaScreen({navigation}){
  const [number, onChangeNumber] = React.useState(null);
    return(
      <View style={style.fondo}>
        <Text style={style.text}>Busca los usuarios por edad</Text>
        <TextInput
        style={style.input}
        onChangeText={x => onChangeNumber(x)}
        value={number}
        placeholder="Introduce una edad"
        keyboardType="numeric"
      />
        <Button
          title="Búsqueda"
          onPress={() => navigation.navigate('Lista de Usuarios',{edad:number})}
        />
      </View>
    );
  }

  //----------------------------------------------------------------------------------------ESTILO----------------------------------------------------------------------------------------
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
  export default BusquedaScreen;