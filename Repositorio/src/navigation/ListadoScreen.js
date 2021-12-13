import React from 'react';
import {Text, View,StyleSheet,FlatList} from 'react-native';

//PANTALLA LISTADO      -----------------------------SCREEN-----------------------------
function ListadoScreen({route}) {
  const {edad} = route.params;
  //DECLARACION DE USUARIOS
  const usuarios = [
    { id: 1, name: 'Antonio Morlanes', age: 34, sex: 'Varón' },
    { id: 2, name: 'Margarita Fuentes', age: 29, sex: 'Mujer' },
    { id: 4, name: 'Manuel Machado', age: 51, sex: 'Varón' },
    { id: 5, name: 'Cai Lun', age: 81, sex: 'Varón' },
    { id: 6, name: 'Manuela Aparicia', age: 19, sex: 'Varón' },
    { id: 7, name: 'Manuel Lara', age: 20, sex: 'Varón' },
    { id: 9, name: 'Álvaro Andrade', age: 43, sex: 'Varón' },
    { id: 10, name: 'Ángel Andrade', age: 23, sex: 'Varón' },
    { id: 11, name: 'Araceli Castillo', age: 61, sex: 'Mujer' },
    { id: 12, name: 'Sara Sacristán', age: 49, sex: 'Mujer' },
    { id: 13, name: 'Esther Arroyo', age: 18, sex: 'Mujer' },
    { id: 14, name: 'Martina Danta', age: 45, sex: 'Mujer' },
    { id: 15, name: 'Julia Praena', age: 38, sex: 'Mujer' },
    { id: 16, name: 'Pedro Flecha', age: 53, sex: 'Varón' },
    { id: 17, name: 'Miguel Berral', age: 60, sex: 'Varón' },
    { id: 18, name: 'Lorena Aparicio', age: 53, sex: 'Mujer' },
    { id: 19, name: 'David Toral', age: 61, sex: 'Varón' },
    { id: 20, name: 'Daniel Cifuentes', age: 52, sex: 'Varón' }
  ];

  function condicion({item}) {
    if (edad == item.age) {
      return(
       <Text>{item.name}</Text>
      )
    }
  }

    return (
      <View style={style.fondo}>
        <Text style={style.text}>Lista de Usuarios:</Text>
        <FlatList
          data={usuarios}
          renderItem={condicion}
          keyExtractor={item => item.id}
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
  export default ListadoScreen;