import React, { Component } from 'react';
import { View,AsyncStorage,TouchableOpacity, Text, StatusBar } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons'; 
// const value =  AsyncStorage.getItem(id);

class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

 
  render() {
    const { navigation } = this.props;

    return (
      <View style={{flex:1, backgroundColor:'black', alignItems:'center'}}>
        <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        // barStyle={statusBarStyle}
        // showHideTransition={statusBarTransition}
         />
        <View style={{width:'100%', height:'8%',justifyContent:'center', backgroundColor:'white'}}>
        <TouchableOpacity style={{marginHorizontal:7,}}  onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
        <Entypo name="menu" size={40} color="black" />
        </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('ViewOrder')}} style={{width:'80%', height:'11%',borderRadius:5,elevation:5,marginVertical:'10%', justifyContent:'center', alignItems:'center', backgroundColor:'white'}}><Text style={{color:'black', fontSize:23}}>ORDERS</Text></TouchableOpacity>
    <TouchableOpacity onPress={()=>{this.props.navigation.navigate('PurchaseHistory')}} style={{width:'80%', height:'11%',borderRadius:5,elevation:5, justifyContent:'center', alignItems:'center', backgroundColor:'white'}}><Text style={{color:'black', fontSize:23}}>HISTORY</Text></TouchableOpacity>
      </View>
    );
  }
}

export default home;
