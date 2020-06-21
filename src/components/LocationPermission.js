import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import * as Location from "expo-location";

export default function App({ stateLocation, setLocation }) {
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation([location.coords.latitude, location.coords.longitude]);
    })();
  });

  return null;

  return (
    <Text style={{ fontSize: 25, fontWeight: "bold", marginLeft: 15 }}>
      Latitude: {stateLocation[0]} Longitude:{stateLocation[1]}{" "}
    </Text>
  );
}
