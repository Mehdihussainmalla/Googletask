//import liraries
import React, { } from 'react';
import { StyleSheet } from 'react-native';
import { Intro } from '../Screens';
import navigationStrings from './navigationStrings';

const IntroStack = (Stack) => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={navigationStrings.INTRO_SCREEN}
                component={Intro} />
        </Stack.Navigator>
    )
}

export default IntroStack;
