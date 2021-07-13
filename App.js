
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer,DrawerActions } from '@react-navigation/native';
// import { createDrawerNavigator } from "@react-navigation/drawer";

// import { createStackNavigator } from 'react-navigation/stack';
import Splash from './src/components/splash.js';
import SignUp from './src/components/singUp.js';
import SignIn from './src/components/signIn.js';
import ForgetPassword from './src/components/forgetPassword.js';
import OtpCode from './src/components/otpCode.js';
import Home from './src/components/home.js';
import OrderDetails from './src/components/orderDetails.js';
import History from './src/components/history.js';
import HelpSupport from './src/components/helpSupport.js';
import Policies from './src/components/policies.js';
import Faq from './src/components/faq.js';
import Designation from './src/components/designation.js';
import ViewOrder from './src/components/viewOrder.js';
import Drawer_Stack from './src/navigator/drawerStack'
import PurchaseHistory from './src/components/purchaseHistory'
// import DrawerNavigator from './src/navigator/drawerStack'
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons'; 
enableScreens();

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}}  name="Splash" component={Splash} />
        <Stack.Screen options={{ title: '', headerTintColor:'black' }} name="SignUp" component={SignUp} />
        <Stack.Screen options={{headerShown: false}} name="SignIn" component={SignIn} />
        <Stack.Screen options={{headerShown: false}} name="OtpCode" component={OtpCode} />
        <Stack.Screen options={{headerShown: false}} name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen options={{headerShown:false}} name="Drawer" component={Drawer_Stack} />
        <Stack.Screen options={{headerShown:false}}  name="OrderDetails" component={OrderDetails} />
        <Stack.Screen options={{headerShown:false}} name="History" component={History} />
        <Stack.Screen options={{headerShown:false}} name="HelpSupport" component={HelpSupport} />
        <Stack.Screen options={{headerShown:false}} name="Policies" component={Policies} />
        <Stack.Screen options={{headerShown:false}} name="Faq" component={Faq} />
        <Stack.Screen options={{headerShown:false}} name="ViewOrder" component={ViewOrder} />
        <Stack.Screen options={{headerShown:false}} name="Designation" component={Designation} />
        <Stack.Screen options={{headerShown:false}} name="PurchaseHistory" component={PurchaseHistory} />
        
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;