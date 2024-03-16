import {
  ActivityIndicator,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import axios from "axios";
import { url } from "../utils/info";

const CurrentSchedule = () => {
  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCurrentSchedule = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${url}/api/v1/schedule/get-schedule`);
      if (data.success) {
        setSchedule(data.schedule);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCurrentSchedule();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar backgroundColor={"white"} />
      <Text style={styles.head}>Current Schedule</Text>
      {loading ? (
        <ActivityIndicator size={moderateScale(50)} style={{marginTop:verticalScale(40)}} color={"#ff0040"}/>
      ) : (
        <ScrollView
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {schedule.map((m) => (
            <Text key={m} style={styles.scheduleCard}>
              {m}
            </Text>
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default CurrentSchedule;

const styles = StyleSheet.create({
  head: {
    color: "#ff0040",
    alignSelf: "center",
    fontSize: moderateScale(25),
    marginVertical: verticalScale(5),
  },
  scheduleCard: {
    backgroundColor: "#e3e3e3",
    color: "black",
    fontSize: moderateScale(19),
    paddingVertical: verticalScale(6),
    paddingHorizontal: scale(10),
    marginVertical: verticalScale(5),
    width: "90%",
  },
});
