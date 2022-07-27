//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Intro, Welcome } from '../Screens';
import navigationStrings from './navigationStrings';

const AuthStack = (Stack) => {
    return (
        <>

            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={navigationStrings.WELCOME_SCREEN}
                    component={Welcome} />
            </Stack.Navigator>

        </>
    );
};

export default AuthStack;
