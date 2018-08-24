import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Weather from './Weather';

const API_KEY= "bcf99d3242b1baf36e3eb2ace8ea3dfb";

export default class App extends Component {
  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    name: null,
  };
  componentDidMount(){
    navigator.geolocation.getCurrentPosition(position => {
        this._getWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
            error: error
        })
      }
    );
  }
  _getWeather= (lat, lon) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(json => {
      this.setState({
        temperature:json.main.temp,
        name: json.weather[0].main,
        isLoaded: true
      })
    });
  }
  render() {
    const { isLoaded, error, temperature, name } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/> 
        {isLoaded ? (
          <Weather weatherName={name} temp={Math.floor(temperature - 273.15)}/>
        ) : (
          <View style={styles.loading}><Text style={styles.loadingText}>Getting Fucking Weather...</Text>
          {error ? <Text>{error}</Text> : null}
        </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  errorText: {
    fontSize: 26,
    color:"red",
    textAlign: 'center'
  },
  loading: {
    flex: 1,
    backgroundColor: '#FDF6AA',
    justifyContent: 'center'

  },
  loadingText: {
    fontSize: 26,
    textAlign: 'center'
  }
});
