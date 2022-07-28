//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from "./AuthStack";
import MainStack from './MainStack';
import IntroStack from "./IntroStack";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
const Stack = createNativeStackNavigator();
const Routes = () => {

    const userData = useSelector(state => state?.userStatus?.userData);
    // console.log((userData), "userdata +++++++")
    const {intro} = useSelector((state) => state);
    // console.log(intro,"intro+++")
     const appIntro = intro.appIntroData;
     console.log(appIntro,"app intro is+++")
    return (
        <NavigationContainer>
            {!!appIntro ? IntroStack(Stack) : !!(userData) ? MainStack(Stack)
                : AuthStack(Stack)}
        </NavigationContainer>

    );
};

export default Routes;
