import React from 'react';
import axios from 'axios';
import { StyleSheet, 
          Text, 
          View,
          TextInput,
          ImageBackground,
          Image
       } from 'react-native';



export default class App extends React.Component {
  render() {
    return (
      <ImageBackground
      source={require('./assets/images/beograd.jpg')}
      style={{width:'100%', height:'100%'}}
      >
      <View style={styles.container}>
        <Image source={require('./assets/images/snow.png')}/>
        <Text styles={styles.name}>Beograd</Text>
        <Text styles={styles.type}>Snow</Text>
        <Text styles={styles.temp}>10C</Text>
        <TextInput
        style={{height: 40,
                width: 200,
                textAlign: 'center',
                backgroundColor: '#fff8dc'}}
        placeholder="Pretrazi grad"
        />
        <Text styles={styles.updateTime}>Azurirano</Text>
      </View>

      </ImageBackground>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name:{
    fontSize:50,
    color:'#2f4f4f',
    fontWeight: 'bold',
    marginBottom: 5
  },
  type:{
    color: '#fff',
    fontSize: 22,
    marginBottom: 5
  },
  temp: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 5
  },
  updateTime:{
    color: '#fff',
    fontSize: 14
  }
  });
