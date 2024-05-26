import React, { useState } from 'react';
  import { StyleSheet, Text, View, Alert } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';
  import AntDesign from '@expo/vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native';

  const data = [
    { label: 'Easy', value: 'easy' },
    { label: 'Medium', value: 'medium' },
    { label: 'Hard', value: 'hard' },
  ];
  const data2 = [
    { label: 'General Knowledge', value: '9' },
    { label: 'Entertainment: Books', value: '10' },
    { label: 'Entertainment: Film', value: '11' },
    { label: 'Entertainment: Music', value: '12' },
    { label: 'Entertainment: Musical & Theater', value: '13' },
    { label: 'Entertainment: Television', value: '14' },
    { label: 'Entertainment: Video Games', value: '15' },
    { label: 'Entertainment: Board Games', value: '16' },
    { label: 'Entertainment: Science & Nature', value: '17' },
    { label: 'Entertainment: Science & Computers', value: '18' },
    //{ label: 'Entertainment: Science & Mathematics', value: '19' },
    { label: 'Mythology', value: '20' },
    { label: 'Sports', value: '21' },
    { label: 'Geophrapy', value: '22' },
    { label: 'History', value: '23' },
    //{ label: 'Politics', value: '24' },
    //{ label: 'Art', value: '25' },
    { label: 'Clebrities', value: '26' },
    { label: 'Animals', value: '27' },
    { label: 'vehicels', value: '28' },
    { label: 'Entertainment: Comics', value: '29' },
    //{ label: 'Science: Gadget', value: '30' },
    { label: 'Entertainment: Japanese Anime & Manga', value: '31' },
    { label: 'Entertainment: Cartoon & Animations', value: '23' },
  ];

const Mode=({navigation})=> {
    const [value, setValue] = useState(null);
    const [value2, setValue2] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [isFocus2, setIsFocus2] = useState(false);

    const renderLabel = () => {
      if (value || isFocus) {
        return (
          <Text style={[styles.label, isFocus && { color: '#00B4D8' }]}>
            Level
          </Text>
        );
      }
      return null;
    };

    const renderLabel2 = () => {
        if (value || isFocus2) {
          return (
            <Text style={[styles.label, isFocus2 && { color: '#00B4D8' }]}>
              Categorie
            </Text>
          );
        }
        return null;
      };
      
      const submit=(value,value2)=>{
        if(value,value2===null){
          Alert.alert('Quizzler', 'Please select Level or Category for Your Quiz', [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);
        }
        else{
        navigation.navigate('Fetch', {paramkey:value2,paramKey:value})
        }
      }
    return (
        <View>
        <View style={styles.container} >
          <View style={styles.contText}>
          <Text style={styles.Text}>Challenge your mind, conquer the quiz, and become the ultimate trivia master!</Text>
        </View>
        <View style={styles.container1}>
        
          {renderLabel()}
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: '#00B4D8' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Select Level' : '...'}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setIsFocus(false);
            }}
            renderLeftIcon={() => (
              <AntDesign
                style={styles.icon}
                color={isFocus ? '#00B4D8' : 'black'}
                name="Safety"
                size={20}
              />
            )}
          />
        </View>
        <View style={styles.container2}>
          {renderLabel2()}
          <Dropdown
            style={[styles.dropdown, isFocus2 && { borderColor: '#00B4D8' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data2}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Select Category' : '...'}
            searchPlaceholder="Search..."
            value2={value}
            onFocus={() => setIsFocus2(true)}
            onBlur={() => setIsFocus2(false)}
            onChange={item => {
              setValue2(item.value);
              setIsFocus2(false);
            }}
            renderLeftIcon={() => (
              <AntDesign
                style={styles.icon}
                color={isFocus ? '#00B4D8' : 'black'}
                name="Safety"
                size={20}
              />
            )}
          />
        </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={()=>submit(value,value2)} >
          <Text>Lets Go!</Text>
        </TouchableOpacity>
        </View>
      );
    };

export default Mode;

const styles = StyleSheet.create({
    container:{
      backgroundColor:"#00B4D8",
      paddingBottom:250,
      borderRadius:30,
      top:20
    },
    contText:{
      justifyContent:'center',
      alignItems:'center',
      top:40
    },
    Text:{fontSize:17,fontWeight:'bold'},
    
    container1: {
      backgroundColor: 'white',
      padding: 16,
      top:80
    },
    container2: {
      backgroundColor: 'white',
      padding: 16,
      top:120
    },
    dropdown: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
    button:{
      padding:20,
      marginHorizontal:20,
      backgroundColor:'#00B4D8',
      borderRadius:16,
      alignItems:'center',
      justifyContent:'center',
      alignItems:'center',
      top:250
  }
  });