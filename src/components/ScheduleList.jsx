import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

const ScheduleList = ({ data = [], removeFromList }) => {
  return (
    <View style={{ width: "100%", padding: moderateScale(10)}}>
      <Text
        style={{
          fontSize: moderateScale(20),
          textAlign: "center",
          textTransform: "uppercase",
          color: "#ff0040",
        }}
      >
        Scheduled List
      </Text>
      <ScrollView style={{paddingVertical:verticalScale(10)}}>
        {data.map((d, idx) => (
          <View key={idx} style={styles.listItemContainer}>
            <Text style={styles.text}>
              {d.hours} : {d.minutes}
            </Text>
            <Text style={styles.btn} onPress={() => removeFromList(d.hours, d.minutes)}>X</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ScheduleList;

const styles = StyleSheet.create({
    listItemContainer:{
        backgroundColor:"#ff4a80",
        flexDirection:"row",
        paddingHorizontal:scale(15),
        paddingVertical:verticalScale(5),
        width:"95%",
        alignSelf:"center",
        borderRadius:moderateScale(5),
        justifyContent:"space-between",
        alignItems:"center",
        marginVertical:verticalScale(4)
    },
    text:{
        fontSize:moderateScale(20),
        color:"white"
    },
    btn:{
        backgroundColor:"#ff0040",
        padding:moderateScale(5),
        borderRadius:moderateScale(100),
        fontSize:moderateScale(20),
        width:40,
        height:40,
        textAlign:"center",
        color:"white"
    }
});
