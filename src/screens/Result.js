import { Image,StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import Title from '../components/Title'

const Result = ({navigation,route}) => {
  return (
    <View style={{ felx: 1, justifyContent: 'center', alignItems: 'center',height:'100%',marginTop:30 }}>
            <Title />{route.params.paramKey>4 ? 
            <View style={{flex:1,justifyContent:'center',alignitems:'center'}}>
                <Image source={require("./../../assets/banner4.png")} style={{height:300,width:300}} resizeMode='contain'/>
            </View> :
            <View style={{flex:1,justifyContent:'center',alignitems:'center'}}>
            <Image source={require("./../../assets/banner3.png")} style={{height:300,width:300}} resizeMode='contain'/>
            </View>}
            <View style={styles.contscore}>
            <View style={styles.score1}>
            <Text>Correct Answer</Text>
            <Text style={{fontSize:34,marginVertical:20}}>{route.params.paramKey}</Text>
            </View>            <View style={styles.score2}>  
            <Text>Wrong Answer</Text>
            <Text style={{fontSize:34,marginVertical:20}}>{route.params.paramky}</Text>
            </View>
            </View>
            <View>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Mode')}>
                <Text styles={{color:'white',fontSize:24,}}>Try Again</Text>
            </TouchableOpacity>
            </View>
        </View>
  )
}

export default Result

const styles = StyleSheet.create({
  button:{
    width:'100%',
    padding:20,
    backgroundColor:'#00B4D8',
    borderRadius:16,
    alignItems:'center',
    marginBottom:50,
    paddingHorizontal:140,
},
contscore:{
  justifyContent:'center',
  flexDirection:'row',
  bottom:40
},
score1 :{
  justifyContent:'center',
  alignItems:'center',
  margin:10,
  backgroundColor:'#56E39F',
  padding:20,
  borderRadius:25
},
score2 :{
  justifyContent:'center',
  alignItems:'center',
  margin:10,
  backgroundColor:'#DD1C1A',
  padding:20,
  borderRadius:25
}
})