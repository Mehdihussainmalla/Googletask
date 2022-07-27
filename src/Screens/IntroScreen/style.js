import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import { moderateScale, textScale, width } from "../../styles/responsiveSize";

export const styles = StyleSheet.create({

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
