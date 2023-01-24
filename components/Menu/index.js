import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import items from '../../assets/items'

function index() {
  return (
    <View style={styles.menuItems}>
      {items.map(item=>(
        <TouchableOpacity >
        <View style={styles.wrapper}>
        <View style={styles.menuRow}>
       
      {/* require() */}
          {/* <Image
        source={{uri:'../../assets-20230122T114850Z-001/assets/music.png'}}
          /> */}
          <Text style={styles.menuText}>{item.title}</Text>
        </View>
          <Image
          style={styles.down}
            source={require('../../assets-20230122T114850Z-001/assets/down.png')}
          />
          </View>
      </TouchableOpacity>
      ))}
      
      {/* <View style={styles.menuRow}>
      <Image source={require('../../assets-20230122T114850Z-001/assets/updates.png')}/>
      <Text style={styles.menuRowText}>Media</Text>
      
    </View>
    <View style={styles.menuRow}>
      <Image source={require('../../assets-20230122T114850Z-001/assets/snowflake.png')}/>
      <Text style={styles.menuRowText}>Media</Text>
      
    </View>
    
    <View style={styles.menuRow}>
      <Image source={require('../../assets-20230122T114850Z-001/assets/golden-key.png')}/>
      <Text style={styles.menuRowText}>Media</Text>
      
    </View>
    <View style={styles.menuRow}>
      <Image source={require('../../assets-20230122T114850Z-001/assets/location.png')}/>
      <Text style={styles.menuRowText}>Media</Text>
      
    </View>
    <View style={styles.menuRow}>
      <Image source={require('../../assets-20230122T114850Z-001/assets/key.png')}/>
      <Text style={styles.menuRowText}>Media</Text>
      
    </View>
    <View style={styles.menuRow}>
      <Image source={require('../../assets-20230122T114850Z-001/assets/key.png')}/>
      <Text style={styles.menuRowText}>Media</Text>
      
    </View> */}
    </View>
  );
}

export default index;
