//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useSelector } from 'react-redux';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../navigation/navigationStrings';
import colors from '../../styles/colors';
import { textScale, width } from '../../styles/responsiveSize';

// create a component
const Home = ({ navigation }) => {
    const userData = useSelector(state => state?.userStatus?.userData)
     const photo = userData?.user?.photoURL;
    //   console.log(photo,"photo is") 
    return (
        <WrapperContainer>
            <View style={{ position: "relative" }}>
                <View style={styles.container}>
                    <View style={{ flex: 0.9 }}>
                        <Text style={styles.headertxt}>Tasks</Text>
                    </View>
                    <View style={{ flex: 0.1 }}>
                        <Image
                            style={styles.imgtxt}
                            source={ {uri:photo}}
                             />
                    </View>
                </View>

                <View style={{ flexDirection: "row", borderBottomWidth: 0.3, marginTop: 10, padding: 10 }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate(navigationStrings.STARRED_TASK)}
                        activeOpacity={0.5} style={{ flex: 0.3 }}>
                        <Image style={styles.starstyle} source={imagePath.starred_star} />
                    </TouchableOpacity>

                    <TouchableOpacity

                        activeOpacity={0.5}
                        style={{ flex: 0.3 }}>
                        <Text style={{ textAlign: "center" }}>My Tasks</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate(navigationStrings.CREATE_LIST)}
                        activeOpacity={0.8}>
                        <Text>+ New list</Text>
                    </TouchableOpacity>

                </View>
            </View>
            <View style={styles.bottomstyle}>
                <Text style={{ paddingLeft: 10 }}>fsdf</Text>
            </View>
        </WrapperContainer>
    );
};

const styles = StyleSheet.create({
    container:
        { flexDirection: "row", justifyContent: "space-between", marginTop: 10 },
    headertxt:
        { fontSize: textScale(16), textAlign: "center", marginTop: 5 },
    imgtxt:
        { height: width / 12, width: width / 12, marginRight: 20, borderRadius: width, }
        ,
    bottomstyle:
    {
        position: "absolute", bottom: -34,
        backgroundColor: colors.dimgrey,
        padding: 15,
        width: width,
    },
    starstyle:
        { marginHorizontal: 10 }


});

export default Home;
