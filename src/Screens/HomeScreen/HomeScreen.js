//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useSelector } from 'react-redux';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../navigation/navigationStrings';
import { styles } from './style';

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
                            style={styles.imgstyle}
                            source={{ uri: photo }}
                        />
                    </View>
                </View>

                <View style={styles.starstyle}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate(navigationStrings.STARRED_TASK)}
                        activeOpacity={0.5}
                        style={{ flex: 0.3 }}>
                        <Image style={styles.starsimg} source={imagePath.starred_star} />
                    </TouchableOpacity>

                    <TouchableOpacity

                        activeOpacity={0.5}
                        style={{ flex: 0.3 }}>
                        <Text style={styles.mytasktxt}>My Tasks</Text>
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


export default Home;
