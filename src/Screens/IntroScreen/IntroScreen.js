//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import actions from '../../redux/actions';
import { styles } from './style';

const Intro = () => {
    return (
        <WrapperContainer>
            <Image
                style={styles.imgstyle}
                source={imagePath.intro_image} />
            <View style={styles.headingstyle}>
                <Text style={styles.headinttxt}>Welcome To Tasks</Text>
            </View>
            <View style={styles.descstyle}>
                <Text style={styles.desctxt}>{`Keep Track of Important things that you need to get done in one place`}</Text>
            </View>
            <TouchableOpacity
                onPress={() => actions.Intro(false)}
                activeOpacity={0.5}
                style={styles.btnstyle}>
                <Text style={styles.btntxt}>Get started</Text>
            </TouchableOpacity>

        </WrapperContainer>
    );
};
export default Intro;
