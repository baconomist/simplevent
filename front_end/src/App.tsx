import * as React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import {registerRootComponent} from "expo";
import Home from "./home";
const untitledImage = require("../assets/Untitled.png");

class App extends React.Component
{
    render()
    {
        return (
            <View style={styles.appContainer}>
                <Image source={{uri: "https://www.w3schools.com/w3css/img_lights.jpg"}} style={{width: 100, height: 105}}/>
                <Text>GUGUGUGUGUUGUGGU</Text>
                <Home/>
                <Image source={untitledImage} style={{width: 100, height: 105}}/>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
    },
});

registerRootComponent(App);