import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

const MyButton = ({
  label = "",
  handler = () => {},
  style = {},
  disabled = false,
  loading=false
}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        ...style,
        backgroundColor: disabled ? "#9e9e9e" : "#ff0040",
      }}
      activeOpacity={0.8}
      onPress={handler}
      disabled={disabled}
    >
      {loading ? <ActivityIndicator size={moderateScale(27)}/> : <Text style={{...styles.text,}}>{label}</Text>}
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  container: {
    margin: moderateScale(5),
    backgroundColor: "#ff0040",
    width: "90%",
    paddingVertical: verticalScale(8),
    paddingHorizontal: scale(20),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: moderateScale(5),
  },
  text: {
    color: "white",
    fontSize: moderateScale(17),
    textTransform: "uppercase",
  },
});
