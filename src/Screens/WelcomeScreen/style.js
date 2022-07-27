import { StyleSheet } from "react-native";
import colors from '../../styles/colors';
import { moderateScale, textScale, width } from '../../styles/responsiveSize';
export const styles = StyleSheet.create({

    container:
    {
        flex: 0.65
    },
    imgview:
    {
        alignItems: "center",
        alignContent: "center",
        marginTop: moderateScale(30)
    },
    imgstyle: {
        height: width / 1.5,
        width: width / 1.5,
    },
    txtheadingstyle:
    {
        marginTop: moderateScale(20),
        alignSelf: "center",
        padding: moderateScale(10),
    },
    txtheading:
    {
        fontWeight: "500",
        fontSize: textScale(16)
    },
    desctxt:
    {
        fontWeight: "300",
        fontSize: textScale(14),
        textAlign: "center"
    },
    btnstyle:
    {
        flexDirection: "row",
        justifyContent: "space-between",
        // alignItems: "center",
        marginHorizontal: moderateScale(70),
        backgroundColor: "blue",
        padding: moderateScale(8),
        borderRadius: moderateScale(5),
        marginTop: moderateScale(20)
    },
    googleiconstyle:
    {
        marginLeft: moderateScale(20)
    },
    btntxt:
    {
        paddingRight: 30,
        color: colors.white,
        fontSize: textScale(14),
        fontWeight: "500"
    }

});

