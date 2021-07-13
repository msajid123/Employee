import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './../components/home'
import { NavigationContainer } from '@react-navigation/native';
import History from './../components/history.js';
import HelpSupport from './../components/helpSupport.js';
import Policies from './../components/policies.js';
import Designation from './../components/designation.js';
import Name from './../components/name.js';
import Faq from './../components/faq.js';
import { Entypo } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native-gesture-handler';
import DrawerContent from './drawerContent'

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={(props) => (
      <DrawerContent {...props} />
    )}>
    <Drawer.Screen  name="Home" component={Home} />
       <Drawer.Screen  name="Name" component={Name} />
    {/* <Drawer.Screen name="Designation" component={Designation} /> */}
    <Drawer.Screen name="Policies" component={Policies} />
    <Drawer.Screen name="History" component={History} />
    <Drawer.Screen name="Faq" component={Faq} />
  </Drawer.Navigator>
  );
}

export default MyDrawer;


// options={{  headerLeft: () => (
//   <TouchableOpacity  onPress={() => this.props.navigation.navigate('DrawerOpen')}>
// <Entypo name="menu" size={30} color="black" />
//   </TouchableOpacity>
// ), headerTintColor:'black' }} 