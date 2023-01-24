import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
   alignItems:'center',
   marginTop:20,
   marginBottom:10
  },
  down:{
    marginRight:30,
  },
menuRow:{
  display:'flex',
  flexDirection:'row',
  alignItems:'center',
  marginLeft:30,
},
menuText:{
    textTransform:'uppercase',
    paddingLeft:15,
  color:'white',
  textDecorationColor:'white',
}
})

export default styles;
