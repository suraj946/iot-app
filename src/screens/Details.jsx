import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { moderateScale, verticalScale } from "react-native-size-matters";
import { url } from "../utils/info";
import axios from "axios";
import ScheduleCard from "../components/ScheduleCard";
import Toast from "react-native-toast-message";

const Details = () => {
  const [scheduleList, setScheduleList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAllSchedules = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${url}/api/v1/schedule/get-all-details`
      );
      if (data.success) {
        setScheduleList(data.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const updateSchedule = (id) => {
    setScheduleList(prev => prev.filter(l => id !== l._id));
  }

  useEffect(() => {
    fetchAllSchedules();
  }, []);

  const deleteSchedule = async (id, setDelLoading) => {
    try {
      setDelLoading(true);
      const { data } = await axios.delete(
        `${url}/api/v1/schedule/delete/${id}`
      );
      if (data.success) {
        Toast.show({ type: "success", text1: "Deletion success" });
        updateSchedule(id);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setDelLoading(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />

      <Text style={styles.head}>All Schedules</Text>
      {loading ? (
        <ActivityIndicator
          size={moderateScale(50)}
          style={{ marginTop: verticalScale(40) }}
          color={"#ff0040"}
        />
      ) : (
        <ScrollView
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {scheduleList.map((s) => (
            <ScheduleCard
              key={s._id}
              _id={s._id}
              schedule={s.schedule}
              deleteSchedule={deleteSchedule}
            />
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  head: {
    color: "#ff0040",
    alignSelf: "center",
    fontSize: moderateScale(25),
    marginVertical: verticalScale(5),
  },
});
