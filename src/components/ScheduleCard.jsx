import React, { memo, useState } from "react";
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

const ScheduleCard = ({ _id = "", schedule = [], deleteSchedule }) => {
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.card}>
      {schedule.map((s, idx) => (
        <Text style={styles.text} key={idx}>
          {s.hours}:{s.minutes}:00
        </Text>
      ))}
      {loading ? (
        <ActivityIndicator
          size={moderateScale(20)}
          style={{ marginTop: verticalScale(5) }}
          color={"#ff0040"}
        />
      ) : (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => deleteSchedule(_id, setLoading)}
        >
          <Text style={styles.delBtn}>Delete</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default memo(ScheduleCard);

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#e3e3e3",
    marginVertical: verticalScale(5),
    paddingVertical: verticalScale(3),
    paddingHorizontal: scale(10),
    width: "90%",
    borderRadius: moderateScale(5),
  },
  text: {
    color: "white",
    fontSize: moderateScale(20),
    marginVertical: verticalScale(4),
    backgroundColor: "#ff0040",
    padding: moderateScale(5),
    borderRadius: moderateScale(7),
  },
  delBtn: {
    margin: moderateScale(10),
    alignSelf: "center",
    backgroundColor: "#ff0040",
    color: "white",
    borderRadius: moderateScale(100),
    paddingVertical: verticalScale(6),
    width: "50%",
    textAlign: "center",
    fontSize: moderateScale(16),
  },
});
