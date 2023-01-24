import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";







import Menu from "../Menu/index";

function index() {
  const [locked, setlocked] = useState(false);
  const clickLock = () => {
    if (locked) {
      setlocked(false);
    } else setlocked(true);
  };
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets-20230122T114850Z-001/assets/background.png")}
        style={styles.bgimg}
      />

      {/* Header */}

      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            source={require("../../assets-20230122T114850Z-001/assets/engineering.png")}
            style={styles.image}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Tesla</Text>
        <TouchableOpacity>
          <Image
            source={require("../../assets-20230122T114850Z-001/assets/network.png")}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>

      {/* charging and distance */}
      <View style={styles.chargingSection}>
        <View style={styles.distanceCharging}>
          <Image
            style={styles.batteryImage}
            source={require("../../assets-20230122T114850Z-001/assets/battery.png")}
          />
          <Text style={styles.distanceMeter}>150 mi</Text>
        </View>
        <Text style={styles.parkingStatus}>Parked</Text>
      </View>

      {/* control icons */}
      <ScrollView>
      <View style={styles.controls}>
        <TouchableOpacity>
          <View style={styles.controlsButton}>
            <Image
              source={require("../../assets-20230122T114850Z-001/assets/fan.png")}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.controlsButton}>
            <Image
              source={require("../../assets-20230122T114850Z-001/assets/key.png")}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={clickLock}>
          <View style={styles.controlsButton}>
            {locked ? (
              <Image
                source={require("../../assets-20230122T114850Z-001/assets/lock.png")}
              />
            ) : (
              <Image
                source={require("../../assets-20230122T114850Z-001/assets/unlock.png")}
              />
            )}
          </View>
        </TouchableOpacity>
      </View>
        <Menu></Menu>
      </ScrollView>
    </View>
  );
}

export default index;
