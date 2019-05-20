import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button, TextInput, Image} from 'react-native';

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
            fetch(`${BASE_URL}&q=${this.state.city}`)
            .then(res => res.json())
            .then(result => {
              this.setState({
                city: result.name,
                status: result.weather[0].decription,
                icon: result.weather[0].icon,
                updateTime: result.dt,
                temp: result.main.temp
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
        <Image icon={this.state.icon} />  
        <Text styles={styles.name}>{this.state.city}</Text>
        <Text styles={styles.type}>{this.state.status}</Text>
        <Text styles={styles.temp}>{this.state.temp} °C</Text>
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
    color: '#ffffff',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  type: {
    color: '#ffffff',
    fontSize: 22,
    marginBottom: 5,
  },
  temp: {
    color: '#ffffff',
    fontSize: 18,
    marginBottom: 5,
  },
  updateTime: {
    color: '#ffffff',
    fontSize: 14,
  }


});
