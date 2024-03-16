import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

const MyInput = ({
  label = "",
  placeholder = "",
  keyboardType = "",
  disabled = false,
  value="",
  setValue
}) => {
  return (
    <View style={{marginBottom:verticalScale(7)}}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        keyboardType={keyboardType}
        editable={!disabled}
        style={{...styles.input}}
        value={value}
        onChangeText={(text) => setValue(text)}
      />
    </View>
  );
};

export default MyInput;

const styles = StyleSheet.create({
    input:{
        width:"100%",
        borderWidth:moderateScale(1.2),
        borderColor:"#00aaff",
        paddingVertical:verticalScale(5),
        borderRadius:moderateScale(5),
        paddingHorizontal:scale(10),
        color:"black",
        fontSize:moderateScale(16)
    },
    label:{
        fontSize:moderateScale(17),
        color:"#000",
        marginBottom:verticalScale(2),
        marginLeft:scale(3)
    }
});
