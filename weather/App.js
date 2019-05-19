import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button, TextInput} from 'react-native';

const APP_ID = '94a22dc9d6342fd5fd3860d19d795a1e';
const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&mode=json&APPID=' + APP_ID;


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      city: ''
      }
  }
  componentDidMount(){
    this.dohvatiVreme();
  }
  dohvatiVreme(){
            return fetch(`${BASE_URL}&q=${this.state.city}`)
            .then(res => res.json())
            .then(result => {
              this.setState({
                city: result.name
              })
        }

    )
  }
  



  render() {
    return (
     <ImageBackground
     source={require('./assets/indjija.jpg')}
        style={{width: '100%', height: '100%', flex: 1}}
     >
      <View style={styles.container}>
        <Text styles={styles.name}>Indjija</Text>
        <Text styles={styles.type}>Clear Sky</Text>
        <Text styles={styles.temp}>16C</Text>
        <Button
        title="Pretrazi grad"
        onPress={() => {
          this.dohvatiVreme();
        }}
        style={{color:'#fff'}}
        />
        <Text style={styles.updateTime}>
          vreme azuriranja 12:00:00
        </Text>
        <TextInput
          onChangeText = {text => {
            this.setState({
              city: text,
          })
        }}
        value = {this.state.city}
        style = {{backgroundColor: 'white', width:100}}
        />
        
      </View>
      </ImageBackground>
      
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 28,
    color: '#fff',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  type: {
    color: '#fff',
    fontSize: 22,
    marginBottom: 5,
  },
  temp: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 5,
  },
  updateTime: {
    color: '#fff',
    fontSize: 14,
  }


});
