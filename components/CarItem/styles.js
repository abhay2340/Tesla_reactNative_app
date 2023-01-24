import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: "100%",
  },
  header: {
    flexDirection: "row",
    marginTop: 45,
    justifyContent: "space-around",
    alignItems: "center",
  },
  image: {
    width: 25,
    height: 25,
  },
  headerTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },
  bgimg: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  chargingSection: {
    alignItems: "center",
    justifyContent: "center",
    marginTop:5 ,
  },
  distanceCharging: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  distanceMeter: {
    marginLeft: 5,

    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  parkingStatus: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  batteryImage: {
    marginRight: 5,
    height: 26,
    width: 70,
  },
  controls:{
    display:'flex',
    flexDirection:'row',
     alignItems:"center",
     justifyContent:'center',
     marginTop:120,
  },
  controlsButton:{
    borderWidth:2,
    borderColor:'white',
    borderRadius:50,
    margin:15,
    padding:14,
  }
});

export default styles;
