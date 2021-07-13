import React,{Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Switch,
  Image,
  Dimensions,
  Picker,
  Alert
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

  class DrawerContent extends Component { 
    constructor(props) {
      super(props);
      this.state = {
        isEnabled:false,
      }
    }
     toggleSwitch ()
      {this.setState({isEnabled:!this.state.isEnabled})}


    render(){
  return (
   <View style={{flex:1}}>
      <View style={{height:'30%', width:'100%',justifyContent:'center', alignItems:'center', backgroundColor:'black'}}>
      <View style={{width:100, height:100, backgroundColor:'#D1C9C9', borderRadius:60}}></View>
    </View>
     <Switch
     trackColor={{ false: 'black', true: 'green' }}
     thumbColor={this.state.isEnabled ? 'white' : '#f4f3f4'}
     ios_backgroundColor="#3e3e3e"
     onValueChange={()=>{this.toggleSwitch(), Alert.alert(this.state.isEnabled?'Your are In-Active':'You are Ative')}}
     value={this.state.isEnabled}
     style={{ transform: [{ scaleX: 1.1}, { scaleY: 1.1}], margin:15 }}
   />
    <View style={{marginHorizontal:20}}>
    <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Home')}}><Text style={{fontSize:16}}>Home</Text></TouchableOpacity>
    {/* <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Designation')}}><Text style={{fontSize:16, marginVertical:5}}>Designation</Text></TouchableOpacity> */}
    <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Policies')}}><Text style={{fontSize:16, marginVertical:5}}>Policies </Text></TouchableOpacity>
    <TouchableOpacity onPress={()=>{this.props.navigation.navigate('HelpSupport')}}><Text style={{fontSize:16, marginVertical:5}}>Help & Support</Text></TouchableOpacity>
    <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Faq')}}><Text style={{fontSize:16, marginVertical:5}}>FAQ</Text></TouchableOpacity>
    </View>
    <View style={{justifyContent:'flex-end', alignItems:'center', height:280}}>
    <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Splash')}} style={{backgroundColor:'black',alignItems:'center',borderRadius:40, justifyContent:'center', borderWidth:1, width:180, height:50}}>
      <Text style={{fontSize:22, fontWeight:'bold', color:'white'}}> Log Out</Text>
    </TouchableOpacity>
    </View> 
     </View>
  );}

};

export default DrawerContent;
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  logoCircleDesign: {
    backgroundColor: '#D1D1D1',
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    width: Dimensions.get('window').width * 0.2,
    height: Dimensions.get('window').width * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%'
  },
  appNameView: {
    marginTop: '10%'
  },
  appNameText:{
    color: '#D1D1D1',
  },
  barView: {
    borderBottomColor: '#D1D1D1',
    borderBottomWidth: 1,
    marginRight: '5%',
    marginTop: '5%'
  },
  barView2: {
    borderBottomColor: '#D1D1D1',
    borderBottomWidth: 1,
    margin: '5%',
  },
  logoutView: {
    marginTop: '80%'
  }
});



// <View
//         style={ styles.drawerContent}>
//         <View style={styles.userInfoSection}>
//           <View style={styles.logoCircleDesign}>
//           <Image
//         source={require('../../assets/logo.png')}
//         style={{height: '100%', width: '100%',alignSelf:'center',}}
//          />
//           </View>
//           <View style={styles.appNameView}>
//             <Text style={styles.appNameText}>App Name</Text>
//           </View>
//           <View style={styles.barView}></View>
//         </View>
//         <View style={styles.drawerSection}>
//           <DrawerItem
//             icon={({ color, size }) => (
//               <Ionicons
//                 name="ios-restaurant-outline"
//                 color={color}
//                 size={size}
//               />
//             )}
//             label="My Order"
//             onPress={() => this.props.navigation.navigate('Dishes')}
//           />
//           <DrawerItem
//             icon={({ color, size }) => (
//               <Ionicons
//                 name="ios-settings-outline"
//                 color={color}
//                 size={size}
//               />
//             )}
//             label="Settings"
//             onPress={() => this.props.navigation.navigate('Settings')}
//           />
//           <DrawerItem
//             icon={({ color, size }) => (
//               <Ionicons
//                 name="ios-help-outline"
//                 color={color}
//                 size={size}
//               />
//             )}
//             label="Help"
//             onPress={() => this.props.navigation.navigate('Help')}
//           />
//           <DrawerItem
//             icon={({ color, size }) => (
//               <Ionicons
//                 name="ios-share-social-outline"
//                 color={color}
//                 size={size}
//               />
//             )}
//             label="Share"
//             onPress={() => this.props.navigation.navigate('Share')}
//           />
//            <DrawerItem
//             icon={({ color, size }) => (
//               <Ionicons
//                 name="ios-share-social-outline"
//                 color={color}
//                 size={size}
//               />
//             )}
//             label="Select Branch"
//             onPress={() => this.props.navigation.navigate('SelectBranch')}
//           />
//         </View>
//         <View style={styles.logoutView}>
//           <View style={styles.barView2}></View>
//           <DrawerItem
//             icon={({ color, size }) => (
//               <Ionicons
//                 name="ios-log-out-outline"
//                 color={color}
//                 size={size}
//               />
//             )}
//           />
//         </View>
//  </View>