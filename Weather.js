import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LinearGradient} from 'expo';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import PropTypes from 'prop-types';

const weatherCases = {
    Rain: {
        colors:["#00C6FB", "#005BEA"],
        title: "Raining like a shit",
        subtitle: "더 알고 싶다면 창문에 머리를 내밀어",
        icon: 'weather-rainy'
    },
    Clear: {
        colors:["#FEF253", "#FF7300"],
        title: "Sunny as fuck",
        subtitle: "집밖에 좀 나가",
        icon: 'weather-sunny'
    },
    Thunderstorm: {
        colors:["#00ECBC", "#007ADF"],
        title: "Thunderstorm in the house",
        subtitle: "집에서 존버한다.",
        icon: 'weather-lightning'
    },
    Clouds: {
        colors:["#D7D2CC", "#304352"],
        title: "Fucking Cloud",
        subtitle: "우산들고 가면 비안옴 ㅅㄱ",
        icon: 'weather-cloudy'
    },
    Snow: {
        colors:["#7DE2FC", "#B9B6E5"],
        title: "Cold ad balls",
        subtitle: "추운데 밖에 왜나가",
        icon: 'weather-snowy'
    },
    Drizzle: {
        colors:["#89F7FE", "#66A6FF"],
        title: "Rain Fuck",
        subtitle: "비가 오는것도 아니고 안오는 것도 아님",
        icon: 'weather-hail'
    },
    Haze: {
        colors:["#89F7FE", "#66A6FF"],
        title: "Haze",
        subtitle: "이거 미세먼지임?",
        icon: 'weather-cloudy'
    },
    Mist: {
        colors:["#89F7FE", "#66A6FF"],
        title: "Mist",
        subtitle: "안경 잃어버림",
        icon: 'weather-fog'
    },
}

function Weather({ weatherName, temp}){
    console.log(weatherName);
    return(
        <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}>
            <View style={styles.upper}>
                <MaterialCommunityIcons color="white" size={144} name={weatherCases[weatherName].icon}/>
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>   
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired
}
export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper: {
        flex: 1,
        alignItems:"center",
        justifyContent: "center",
        backgroundColor: "transparent"
    },
    temp:{
        fontSize: 48,
        color: "white",
        marginTop: 10
    },
    lower:{
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft:35,
        paddingBottom:35
    },
    title: {
        fontSize: 30,
        color: "white",
        marginBottom:10,
        fontWeight: "300"
    },
    subtitle: {
        fontSize: 24,
        color: "white",
        marginBottom:24
    }
})