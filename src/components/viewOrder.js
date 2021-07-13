import React, { Component } from 'react';
import { View,TouchableOpacity, Text  } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import {
  Picker,
} from 'native-base';
import { AntDesign } from '@expo/vector-icons'; 

class viewOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language:''
    };
  }

  render() {
    const { navigation } = this.props;

    return (
        <View style={{flex:1, backgroundColor:'white', alignItems:'center'}}>
        {/* <StatusBar
        animated={true}
        backgroundColor="#61dafb"
       
         /> */}
        <View style={{width:'100%', height:'8%',borderBottomColor:'gray', borderBottomWidth:1, justifyContent:'center', backgroundColor:'white'}}>
        <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}} style={{marginHorizontal:7,}}  >
        {/* <Entypo name="menu" size={40} color="black" /> */}
        <Ionicons name="arrow-back-outline" size={35} color="black" />
        </TouchableOpacity>
        </View>
        <View style={{  marginHorizontal:'5%', marginTop:20}}>
            <View style={{borderColor:'black',flexDirection:'row',alignItems:'center',  borderWidth:1, width:320, height:60}}>
            <TouchableOpacity style={{width:'60%'}} onPress={()=>{this.props.navigation.navigate('OrderDetails')}} >
                <Text style={{fontSize:22, fontWeight:'bold', marginHorizontal:4}}>Order</Text>
            </TouchableOpacity>
           <View style={{backgroundColor:'black',width:120,alignItems:'center', flexDirection:'row', borderRadius:30}}>
           <Picker
        selectedValue={this.state.language}
        style={{  color: 'white',width:70, height: 40,}}
        mode="dropdown"
        onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
         <Picker.Item label="Status" value="Status" />
        <Picker.Item  label="Pending" value="Pending" />
        <Picker.Item label="On Way " value="OneHour" />
        <Picker.Item label="Arrived" value="Arrived" />
        <Picker.Item label="Completed" value="Completed" />

      </Picker>
      <AntDesign name="caretdown" size={15} style={{marginRight:10}} color="white" />
           </View>
            </View>

        </View>
        <View style={{ marginHorizontal:'5%',  marginTop:20}}>
            <View style={{borderColor:'black',flexDirection:'row',alignItems:'center',  borderWidth:1, width:320, height:60}}>
            <TouchableOpacity style={{width:'60%'}} onPress={()=>{this.props.navigation.navigate('OrderDetails')}} >
                <Text style={{fontSize:22, fontWeight:'bold', marginHorizontal:4}}>Order</Text>
            </TouchableOpacity>
           <View style={{backgroundColor:'black',width:120,alignItems:'center', flexDirection:'row', borderRadius:30}}>
           <Picker
        selectedValue={this.state.language}
        style={{  color: 'white',width:70, height: 40,}}
        mode="dropdown"
        onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
        <Picker.Item label="Status" value="Status" />
        <Picker.Item  label="Pending" value="Pending" />
        <Picker.Item label="On Way " value="OneHour" />
        <Picker.Item label="Arrived" value="Arrived" />
        <Picker.Item label="Completed" value="Completed" />
      </Picker>
      <AntDesign name="caretdown" size={15} style={{marginRight:10}} color="white" />
           </View>
            </View>

        </View>
        <View style={{ marginHorizontal:'5%',  marginTop:20}}>
            <View style={{borderColor:'black',flexDirection:'row',alignItems:'center',  borderWidth:1, width:320, height:60}}>
            <TouchableOpacity style={{width:'60%'}} onPress={()=>{this.props.navigation.navigate('OrderDetails')}} >
                <Text style={{fontSize:22, fontWeight:'bold', marginHorizontal:4}}>Order</Text>
            </TouchableOpacity>
           <View style={{backgroundColor:'black',width:120,alignItems:'center', flexDirection:'row', borderRadius:30}}>
           <Picker
        selectedValue={this.state.language}
        style={{  color: 'white',width:70, height: 40,}}
        mode="dropdown"
        onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
         <Picker.Item label="Status" value="Status" />
        <Picker.Item  label="Pending" value="Pending" />
        <Picker.Item label="On Way " value="OneHour" />
        <Picker.Item label="Arrived" value="Arrived" />
        <Picker.Item label="Completed" value="Completed" />

      </Picker>
      <AntDesign name="caretdown" size={15} style={{marginRight:10}} color="white" />
           </View>
            </View>

        </View>
        <View style={{ marginHorizontal:'5%',  marginTop:20}}>
            <View style={{borderColor:'black',flexDirection:'row',alignItems:'center',  borderWidth:1, width:320, height:60}}>
            <TouchableOpacity style={{width:'60%'}} onPress={()=>{this.props.navigation.navigate('OrderDetails')}} >
                <Text style={{fontSize:22, fontWeight:'bold', marginHorizontal:4}}>Order</Text>
            </TouchableOpacity>
           <View style={{backgroundColor:'black',width:120,alignItems:'center', flexDirection:'row', borderRadius:30}}>
           <Picker
        selectedValue={this.state.language}
        style={{  color: 'white',width:70, height: 40,}}
        mode="dropdown"
        onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
         <Picker.Item label="Status" value="Status" />
        <Picker.Item  label="Pending" value="Pending" />
        <Picker.Item label="On Way " value="OneHour" />
        <Picker.Item label="Arrived" value="Arrived" />
        <Picker.Item label="Completed" value="Completed" />

      </Picker>
      <AntDesign name="caretdown" size={15} style={{marginRight:10}} color="white" />
           </View>
            </View>

        </View>
        <View style={{ marginHorizontal:'5%',  marginTop:20}}>
            <View style={{borderColor:'black',flexDirection:'row',alignItems:'center',  borderWidth:1, width:320, height:60}}>
            <TouchableOpacity style={{width:'60%'}} onPress={()=>{this.props.navigation.navigate('OrderDetails')}} >
                <Text style={{fontSize:22, fontWeight:'bold', marginHorizontal:4}}>Order</Text>
            </TouchableOpacity>
           <View style={{backgroundColor:'black',width:120,alignItems:'center', flexDirection:'row', borderRadius:30}}>
           <Picker
        selectedValue={this.state.language}
        style={{  color: 'white',width:70, height: 40,}}
        mode="dropdown"
        onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
        <Picker.Item label="Status" value="Status" />
        <Picker.Item  label="Pending" value="Pending" />
        <Picker.Item label="On Way " value="OneHour" />
        <Picker.Item label="Arrived" value="Arrived" />
        <Picker.Item label="Completed" value="Completed" />

      </Picker>
      <AntDesign name="caretdown" size={15} style={{marginRight:10}} color="white" />
           </View>
            </View>

        </View>
        <View style={{ marginHorizontal:'5%',  marginTop:20}}>
            <View style={{borderColor:'black',flexDirection:'row',alignItems:'center',  borderWidth:1, width:320, height:60}}>
            <TouchableOpacity style={{width:'60%'}} onPress={()=>{this.props.navigation.navigate('OrderDetails')}} >
                <Text style={{fontSize:22, fontWeight:'bold', marginHorizontal:4}}>Order</Text>
            </TouchableOpacity>
           <View style={{backgroundColor:'black',width:120,alignItems:'center', flexDirection:'row', borderRadius:30}}>
           <Picker
        selectedValue={this.state.language}
        style={{  color: 'white',width:70, height: 40,}}
        mode="dropdown"
        onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
         <Picker.Item label="Status" value="Status" />
        <Picker.Item  label="Pending" value="Pending" />
        <Picker.Item label="On Way " value="OneHour" />
        <Picker.Item label="Arrived" value="Arrived" />
        <Picker.Item label="Completed" value="Completed" />
      </Picker>
      <AntDesign name="caretdown" size={15} style={{marginRight:10}} color="white" />
           </View>
            </View>

        </View>
        
        
      </View>
    );
  }
}

export default viewOrder;
