//import liraries
import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import { styles } from './style';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { showMessage } from 'react-native-flash-message';
import auth from "@react-native-firebase/auth"
import actions from '../../redux/actions';
const Welcome = () => {

    useEffect(() => {
        // GoogleSignin.configure();
        GoogleSignin.configure({
            webClientId: "358138253003-df5k0qm1d96arctrek9r62djr3ot3t0j.apps.googleusercontent.com",
        });

    }, [])

    const googleLogin = async () => {
        const credentails = await GoogleSignin.signIn();
        const idToken = credentails.idToken;
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        let data = await auth().signInWithCredential(googleCredential);
        // console.log(data,"dataaa++++++++");
        try {
            actions.loginData(data)

            showMessage({
                message: "login sucessfully",
                type: "success"
            })
        } catch (error) {
            console.log("error in goolge login", error)
            showMessage({
                message: "failed in gooogle authentication"
            })
        }
    };

    return (
        <WrapperContainer>
            <View style={styles.container}>
                <View style={styles.imgview}>
                    <Image
                        style={styles.imgstyle}
                        source={imagePath.googleappIcon} />
                </View>
                <View style={styles.txtheadingstyle}>
                    <Text style={styles.txtheading}>welcome to Google task</Text>
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={styles.desctxt}>Use Google Account to access the Google tasks</Text>
                </View>
            </View>
            <TouchableOpacity
                onPress={googleLogin}
                activeOpacity={0.5}
                style={styles.btnstyle}>
                <Image style={styles.googleiconstyle}
                    source={imagePath.google_icon} />
                <Text style={styles.btntxt} >Login with Google</Text>
            </TouchableOpacity>


        </WrapperContainer>
    );
};
export default Welcome;
