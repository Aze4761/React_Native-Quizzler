import React from 'react'
import { Image,View, Text, Button,TouchableOpacity,StyleSheet } from 'react-native'
import Title from '../components/Title'


export default function Home({ navigation }) {

    return (
        <View style={{ felx: 1, justifyContent: 'center', alignItems: 'center',height:'100%',marginTop:30 }}>
            <Title />
            <View style={{flex:1,justifyContent:'center',alignitems:'center'}}>
                <Image source={require("./../../assets/banner1.png")} style={{height:300,width:300}} resizeMode='contain'/>
            </View>
            <View>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Mode')}>
                <Text styles={{color:'white',fontSize:24,}}>Start</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles =StyleSheet.create({
    button:{
        width:'100%',
        padding:20,
        backgroundColor:'#00B4D8',
        borderRadius:16,
        alignItems:'center',
        paddingHorizontal:160,
        marginBottom:60,
    }
})