import React, { Component } from 'react';
import { View,AsyncStorage,TouchableOpacity, Text, Image } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome} from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

class helpSupport extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1, alignItems:'center', backgroundColor:'white'}}>
      <View style={{width:'100%', flexDirection:'row', height:'8%',alignItems:'center',  backgroundColor:'white'}}>
   <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}} style={{marginHorizontal:7,}}  >
   {/* <Entypo name="menu" size={40} color="black" /> */}
   <Ionicons name="arrow-back-outline" size={30} color="black" />
   </TouchableOpacity>
   <Text style={{fontSize:20, color:'black', marginHorizontal:70}}>Help & Support</Text>
   </View>
   {/* <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Select1')}} style={{flexDirection:'row', marginVertical:6, borderBottomColor:'gray', borderBottomWidth:0.5 ,  alignItems:'center'}}> */}
     <Text style={{width:'90%' ,marginTop:30, fontSize:16}}>To help you find the ideal tool for your needs—a simple support ticket system or a robust multi-channel support app—we've examined the top customer service options. We broke down each app's features and pricing structure and grabbed a screenshot to give you a quick view of how to answer emails in that app.

</Text>
     {/* <FontAwesome name="angle-right" size={24} color="gray" />
   </TouchableOpacity>
   <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Select1')}} style={{flexDirection:'row', marginVertical:6, borderBottomColor:'gray', borderBottomWidth:0.5 ,  alignItems:'center'}}>
     <Text style={{width:'90%' , fontSize:16}}>Maintenance Complain</Text>
     <FontAwesome name="angle-right" size={24} color="gray" />
   </TouchableOpacity>
   <TouchableOpacity onPress={()=>{this.props.navigation.navigate('RepairingComplaint')}} style={{flexDirection:'row', marginVertical:6, borderBottomColor:'gray', borderBottomWidth:0.5 ,  alignItems:'center'}}>
     <Text style={{width:'90%' , fontSize:16}}>Repairing Complaint</Text>
     <FontAwesome name="angle-right" size={24} color="gray" />
   </TouchableOpacity> */}
   {/* <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Select1')}} style={{flexDirection:'row', marginVertical:6, borderBottomColor:'gray', borderBottomWidth:0.5 ,  alignItems:'center'}}>
     <Text style={{width:'90%' , fontSize:16}}>Others Complain</Text>
     <FontAwesome name="angle-right" size={24} color="gray" />
   </TouchableOpacity> */}
      </View>
    );
  }
}

export default helpSupport;
