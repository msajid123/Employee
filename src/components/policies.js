import React, { Component } from 'react';
import { View,TouchableOpacity, Text  } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

class policies extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1}}>
      <View style={{width:'100%', height:'8%',borderBottomColor:'gray', borderBottomWidth:1, justifyContent:'center', backgroundColor:'white'}}>
      <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}} style={{marginHorizontal:7,}}  >
      {/* <Entypo name="menu" size={40} color="black" /> */}
      <Ionicons name="arrow-back-outline" size={35} color="black" />
      </TouchableOpacity>
      </View>
      <Text style={{marginHorizontal:20, fontSize:17, marginTop:20}}>A mobile app privacy policy is a legal statement that discloses how a party gathers, stores, and uses the personal information it collects from app users. Personal information refers to anything that can be used to identify an individual, including names, phone numbers, email addresses, device IDs, and locations.

These policies are used by companies and mobile app developers to stay compliant with federal laws. They fulfill the legal requirement to safeguard user privacy while also protecting the company itself from legal challenges.</Text>

 
      </View>
    );
  }
}

export default policies;

