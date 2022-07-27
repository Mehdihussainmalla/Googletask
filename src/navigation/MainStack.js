//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CreateList, Home, Starredtask } from '../Screens';
import navigationStrings from './navigationStrings';

// create a component
const MainStack = (Stack) => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={navigationStrings.HOME_SCREEN}
                component={Home} />
                <Stack.Screen name={navigationStrings.CREATE_LIST}
                component={CreateList} />
                 <Stack.Screen name={navigationStrings.STARRED_TASK}
                component={Starredtask} />
        </Stack.Navigator>
        
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default MainStack;
