import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { moderateScale } from '../styles/responsiveSize';
import colors from '../styles/colors';

const WrapperContainer = ({
    children,
    bgColor = colors.white,
    statusBarColor = colors.white,
    barStyle = "dark-content"
}) => {
   
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: statusBarColor,

        }}>
            <StatusBar backgroundColor={statusBarColor} barStyle={barStyle} />
            <View style={{
                backgroundColor:colors.white,
                flex: 1,
                paddingVertical: moderateScale(1),
                paddingHorizontal: moderateScale(1)
            }}>{children}</View>
        </SafeAreaView>
    )
}

export default React.memo(WrapperContainer);