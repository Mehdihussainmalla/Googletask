import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import { moderateScale, textScale, width } from "../../styles/responsiveSize";

export const styles = StyleSheet.create({
    container:
    {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: moderateScale(10)
    },
    headertxt:
    {
        fontSize: textScale(16),
        textAlign: "center",
        marginTop: moderateScale(5)
    },
    imgtxt:
    {
        height: width / moderateScale(12),
        width: width / moderateScale(12),
        marginRight: moderateScale(20),
        borderRadius: width
    },
    bottomstyle:
    {
        position: "absolute",
        bottom: moderateScale(-34),
        backgroundColor: colors.dimgrey,
        padding: moderateScale(15),
        width: width
    },
    starsimg:
    {
        marginHorizontal: moderateScale(10)
    },
    starstyle:
    {
        flexDirection: "row",
        borderBottomWidth: moderateScale(0.3),
        marginTop: moderateScale(10),
        padding: moderateScale(10)
    },
    mytasktxt:
    {
        textAlign: "center"
    }


});
