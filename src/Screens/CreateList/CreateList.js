//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet ,TouchableOpacity} from 'react-native';
import actions from '../../redux/actions';

// create a component
const CreateList = () => {
    const logout = () => {
        actions.logout()
    }
    return (
        <View style={styles.container}>
            <Text>CreateList</Text>



            <TouchableOpacity onPress={logout}>
                <Text style={{ marginTop: 30 }}>Logout</Text>
            </TouchableOpacity>
        </View>
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
export default CreateList;
