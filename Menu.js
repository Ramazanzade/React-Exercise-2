import { View, Text , StyleSheet , Image} from 'react-native'
import React from 'react'
import { BiDotsHorizontalRounded } from "react-icons/bi";
export default function Menu() {
  return (
    <View>
     


<View style={ menu.div}>

<View>
    <Image  style={{...menu.img, marginTop:25}} source={{
          uri: 'https://www.pngmart.com/files/22/User-Avatar-Profile-PNG-Isolated-Transparent-Picture.png',
        }}></Image>
</View>


<View style={menu.div4}>
    <Text style={menu.test}>Nizam Ramazanzade</Text>
    <Text style={{...menu.test, fontSize:10}}>Title : durdane vs nese </Text>

    <View style={menu.div1}>
        <View>
            <Text style={menu.test1} >2021</Text>
            <Text style={menu.test1}>Title</Text>
        </View>
        <View>
            <Text style={menu.test1}>2022</Text>
            <Text style={menu.test1}>Body</Text>
        </View>
        <View>
            <Text style={menu.test1}>2023</Text>
            <Text style={menu.test1}>Id</Text>
        </View>
    </View>
</View>

<View style={menu.div2}>
    <BiDotsHorizontalRounded style={menu.test}></BiDotsHorizontalRounded>
    <Text style={{...menu.test, marginTop:30 , fontSize:45, marginRight:15}}> 1</Text>
    <Text style={{...menu.test, fontSize:10}}>Parking</Text>
</View>



</View>


<View style={ {...menu.div , backgroundColor:'#db3e00'}}>

<View>
    <Image  style={{...menu.img, marginTop:25}} source={{
          uri: 'https://www.pngmart.com/files/22/User-Avatar-Profile-PNG-Isolated-Transparent-Picture.png',
        }}></Image>
</View>


<View style={menu.div4}>
    <Text style={menu.test}>Leonel Messi</Text>
    <Text style={{...menu.test, fontSize:10}}>Title : Kələ </Text>

    <View style={menu.div1}>
        <View>
            <Text style={menu.test1} >2021</Text>
            <Text style={menu.test1}>Title</Text>
        </View>
        <View>
            <Text style={menu.test1}>2022</Text>
            <Text style={menu.test1}>Body</Text>
        </View>
        <View>
            <Text style={menu.test1}>2023</Text>
            <Text style={menu.test1}>Id</Text>
        </View>
    </View>
</View>

<View style={menu.div2}>
    <BiDotsHorizontalRounded style={menu.test}></BiDotsHorizontalRounded>
    <Text style={{...menu.test, marginTop:30 , fontSize:45, marginRight:15}}> 2</Text>
    <Text style={{...menu.test, fontSize:10}}>Parking</Text>
</View>



</View>




<View style={ {...menu.div , backgroundColor:'#cbae35'}}>

<View>
    <Image  style={{...menu.img, marginTop:25}} source={{
          uri: 'https://www.pngmart.com/files/22/User-Avatar-Profile-PNG-Isolated-Transparent-Picture.png',
        }}></Image>
</View>


<View style={menu.div4}>
    <Text style={menu.test}>Ronaldo </Text>
    <Text style={{...menu.test, fontSize:10}}>Title : Pis döyulsən</Text>

    <View style={menu.div1}>
        <View>
            <Text style={menu.test1} >2021</Text>
            <Text style={menu.test1}>Title</Text>
        </View>
        <View>
            <Text style={menu.test1}>2022</Text>
            <Text style={menu.test1}>Body</Text>
        </View>
        <View>
            <Text style={menu.test1}>2023</Text>
            <Text style={menu.test1}>Id</Text>
        </View>
    </View>
</View>

<View style={menu.div2}>
    <BiDotsHorizontalRounded style={menu.test}></BiDotsHorizontalRounded>
    <Text style={{...menu.test, marginTop:30 , fontSize:45, marginRight:15}}> 3</Text>
    <Text style={{...menu.test, fontSize:10}}>Parking</Text>
</View>



</View>






<View style={ {...menu.div , backgroundColor:'#41af78'}}>

<View>
    <Image  style={{...menu.img, marginTop:25}} source={{
          uri: 'https://www.pngmart.com/files/22/User-Avatar-Profile-PNG-Isolated-Transparent-Picture.png',
        }}></Image>
</View>


<View style={menu.div4}>
    <Text style={menu.test}>Xan Lənkaran</Text>
    <Text style={{...menu.test, fontSize:10}}>Title :Loading... </Text>

    <View style={menu.div1}>
        <View>
            <Text style={menu.test1} >2021</Text>
            <Text style={menu.test1}>Title</Text>
        </View>
        <View>
            <Text style={menu.test1}>2022</Text>
            <Text style={menu.test1}>Body</Text>
        </View>
        <View>
            <Text style={menu.test1}>2023</Text>
            <Text style={menu.test1}>Id</Text>
        </View>
    </View>
</View>

<View style={menu.div2}>
    <BiDotsHorizontalRounded style={menu.test}></BiDotsHorizontalRounded>
    <Text style={{...menu.test, marginTop:30 , fontSize:45, marginRight:15}}> 4</Text>
    <Text style={{...menu.test, fontSize:10}}>Parking</Text>
</View>



</View>





    </View>
  )
}


const menu = StyleSheet.create({
 div1:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    marginTop:20,
    marginRight:50
   
 },
 div2:{
    flexDirection:'column',
    
 },
 div4:{
    marginVertical:20
 },
 div:{
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'#004dcf',
    borderRadius:20,
    margin:20

 },

 test:{
    color:'#ffff',
    fontSize:20,
    
 },
 test1:{
fontSize:12,
color:'#ffff',
marginHorizontal:15
 },
 img:{
    width:100,
    height:80,
    marginTop :10
 }
});