import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { SafeAreaView } from "react-native-safe-area-context";
import MyButton from "../components/MyButton";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          marginTop: verticalScale(10),
          width: "90%",
          textAlign: "center",
          paddingVertical: verticalScale(7),
          color: "#ff2655",
          fontSize: moderateScale(30),
        }}
      >
        Welcome To
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#0f0f0f",
            marginRight: scale(2),
            fontSize: moderateScale(30),
            textTransform: "uppercase",
          }}
        >
          Bell
        </Text>
        <Text
          style={{
            color: "#ff002b",
            fontSize: moderateScale(30),
            textTransform: "uppercase",
          }}
        >
          Scheduler
        </Text>
      </View>
      <Image
        source={require("../../assets/bell.webp")}
        style={{ height: verticalScale(180), resizeMode: "contain" }}
      />
      <View style={styles.btnContainer}>
        <MyButton
          label="Schedule Alarm"
          handler={() => navigation.navigate("Schedule")}
        />
        <MyButton
          label="Current Schedule"
          handler={() => navigation.navigate("CurrentSchedule")}
        />
        <MyButton
          label="Get Details"
          handler={() => navigation.navigate("Details")}
        />
      </View>

      <View style={{ width: "100%", flexDirection: "row", paddingHorizontal:scale(10), marginTop:verticalScale(30)}}>
        <View style={styles.imgContainer}>
          <Text style={styles.txt}>Organized By</Text>
          <Image
            source={require("../../assets/ni.png")}
            style={styles.nepaImg}
          />
        </View>

        <View style={styles.imgContainer}>
          <Text style={styles.txt}>Supported By</Text>
          <Image
            source={require("../../assets/nepatronix.png")}
            style={styles.nepaImg}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  btnContainer: {
    width: "100%",
    height:"25%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  txt: {
    fontSize: moderateScale(20),
    color: "#525252",
  },
  nepaImg: {
    height: verticalScale(30),
    resizeMode: "contain",
    marginTop: verticalScale(10),
  },
  imgContainer: {
    width: "50%",
    alignItems: "center",
  },
});
