import { View, Text , StyleSheet} from 'react-native'
import React from 'react'
import { BiArrowBack } from "react-icons/bi";
import { BiListUl } from "react-icons/bi";
export default function Nav() {
  return (
    <View style={nav.div}>



  <View style={nav.div1}>
<BiArrowBack style={nav.icon}></BiArrowBack>
<BiListUl style={nav.icon }></BiListUl>
  </View>

<View style={nav.div2}>
    <Text style={{ fontSize:25,  fontWeight:'bold' , color:'#ffff'}}> Designer</Text>
    <Text style={nav.taxt}> Catologiya</Text>
    <Text style={nav.taxt}> Attetion</Text>
</View>


    </View>
  )
}





const nav = StyleSheet.create({
 div1: {
   flexDirection:'row',
   justifyContent:'space-between',
   margin:25
  },
  icon:{
    fontSize:20,
    color:'#ffff'
  },
  div2:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    paddingBottom:20
  },
  taxt:{
    fontSize:20,
    color:'#edeadd'

  },
  div:{
    backgroundColor:'#984ac3'
  }
});