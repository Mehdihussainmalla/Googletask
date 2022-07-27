//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import actions from '../../redux/actions';
import colors from '../../styles/colors';
import { moderateScale, textScale, width } from '../../styles/responsiveSize';

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
            onPress={() =>actions.Intro(false)}
                activeOpacity={0.5}
                style={styles.btnstyle}>
                <Text style={styles.btntxt}>Get started</Text>
            </TouchableOpacity>

        </WrapperContainer>
    );
};

const styles = StyleSheet.create({

    imgstyle: { height: width / 0.7, width: "100%" },
    headingstyle:
    {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20
    },
    headinttxt:
    {
        fontWeight: "400",
        fontSize: textScale(16)
    },

    descstyle:
    {
        marginTop: moderateScale(10),
        marginHorizontal: moderateScale(30),
        justifyContent: 'center',
    },
    desctxt:
    {
        fontSize: textScale(12),
        textAlign: "center",
        color: colors.dimgrey
    },

    btnstyle:
    {
        backgroundColor: "blue",
        justifyContent: 'center',
        alignSelf: "center",
        borderRadius: moderateScale(6),
        marginTop: moderateScale(15),
        padding:moderateScale(8)
    },
    btntxt:
    {
        fontSize: textScale(12),
        // padding: moderateScale(8),
        color: colors.white
    },


});

export default Intro;
