import fonts from "../Constants/fonts"
import { StyleSheet } from "react-native"
import theme from "../Constants/theme"
import { RFValue } from "react-native-responsive-fontsize"
import { getWidth } from "../functions/CommonFunctions"
const textStyles = StyleSheet.create({
    lightText:{
        fontFamily:fonts.AnekBanglaLight,
        includeFontPadding:false,
        color:theme.blackColor,
        fontSize:RFValue(14),
        letterSpacing:RFValue(2),
        fontWeight:"500"
    },
    mediumText:{
        fontFamily:fonts.AnekBanglaLight,
        includeFontPadding:false,
        color:theme.blackColor,
        fontSize:RFValue(14),
        letterSpacing:RFValue(2),
        fontWeight:"500"
    },
    boldText:{
        fontFamily:fonts.AnekBanglaLight,
        includeFontPadding:false,
        color:theme.blackColor,
        fontSize:RFValue(14),
        letterSpacing:RFValue(2),
        fontWeight:"600"
    }
})

export default textStyles

const globalstyles = {
    inputContainer:{
        height: RFValue(45),
        margin: 8,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: theme.blueColor,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        paddingLeft: 5,
      },
    textInputStyle:{
        height: RFValue(53),
        borderRadius: RFValue(18),
        width: getWidth(70),
        borderColor: '#1B1561',
        color:theme.blueColor,
        paddingLeft: RFValue(10),
        letterSpacing:RFValue(1.5),
        fontFamily:fonts.AnekBanglaMedium
    },
    buttonStyle:{
        height:RFValue(45),
      
        borderWidth: 1,
       
        borderRadius: 20,
        borderColor: theme.blueColor,
        backgroundColor:  theme.blueColor,
        alignItems: "center",
        justifyContent: "center",
      }
}


export {globalstyles}