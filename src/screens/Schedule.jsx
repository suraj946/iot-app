import {
  Image,
  Keyboard,
  StatusBar,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import MyInput from "../components/MyInput";
import { moderateScale, verticalScale } from "react-native-size-matters";
import MyButton from "../components/MyButton";
import Toast from "react-native-toast-message";
import { validateHours, validateMinutes } from "../utils/validator";
import ScheduleList from "../components/ScheduleList";
import axios from "axios";
import { url } from "../utils/info";

const Schedule = ({ navigation }) => {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(false);

  const addToSchedule = () => {
    Keyboard.dismiss();
    const checkHours = validateHours(hours);
    if (!checkHours.isValid) {
      Toast.show({
        type: "error",
        text1: checkHours.errorText,
      });
      return;
    }
    const checkMinutes = validateMinutes(minutes);
    if (!checkMinutes.isValid) {
      Toast.show({
        type: "error",
        text1: checkMinutes.errorText,
      });
      return;
    }

    setSchedule((prev) => [
      ...prev,
      { hours: Number(hours), minutes: Number(minutes) },
    ]);
    Toast.show({
      type: "success",
      text1: "Added to schedule",
    });
    setHours("");
    setMinutes("");
  };

  const handleSchedule = async () => {
    try {
      setLoading(true);
      const {data} = await axios.post(`${url}/api/v1/schedule/add-schedule`, {
        schedule,
      });
      if (data.success) {
        Toast.show({ type: "success", text1: "Bell scheduled" });
        navigation.navigate("Home");
      }
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  const removeFromList = (hours, minutes) => {
    setSchedule((prev) =>
      prev.filter((s) => !(hours === s.hours && minutes === s.minutes))
    );
  };

  return (
    <>
    <StatusBar backgroundColor={"white"} barStyle={"dark-content"}/>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{ flex: 1, alignItems: "center", backgroundColor: "#fff" }}>
        <Text style={styles.head}>Schedule Alarm</Text>
        <Image
          source={require("../../assets/bell.webp")}
          style={{ height: moderateScale(100), resizeMode: "contain" }}
        />
        <View style={styles.formContainer}>
          <MyInput
            label="Hours"
            disabled={loading}
            keyboardType="number-pad"
            placeholder="Enter hours"
            value={hours}
            setValue={setHours}
          />
          <MyInput
            label="Minutes"
            disabled={loading}
            keyboardType="number-pad"
            placeholder="Enter minutes"
            value={minutes}
            setValue={setMinutes}
          />
          <MyButton
            style={{
              alignSelf: "center",
              width: "100%",
              marginTop: verticalScale(10),
            }}
            label="Add to list"
            handler={addToSchedule}
            disabled={loading}
          />

          <MyButton
            style={{
              alignSelf: "center",
              width: "100%",
              marginTop: verticalScale(10),
            }}
            label="Schedule"
            handler={handleSchedule}
            disabled={schedule.length ===  0 || loading}
            loading={loading}
          />
        </View>
        {schedule.length === 0 ? (
          <Text
            style={{
              marginTop: verticalScale(10),
              fontSize: moderateScale(20),
              color: "#ff0040",
            }}
          >
            Nothing to schedule
          </Text>
        ) : (
          <ScheduleList data={schedule} removeFromList={removeFromList} />
        )}
      </View>
    </TouchableWithoutFeedback>
    </>
  );
};

export default Schedule;

const styles = StyleSheet.create({
  formContainer: {
    width: "90%",
  },
  head: {
    color: "#ff0040",
    fontSize: moderateScale(25),
    paddingVertical: verticalScale(7),
    textTransform: "uppercase",
  },
});
