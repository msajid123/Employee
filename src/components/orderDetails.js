// import React, { Component } from 'react';
// import { View,TouchableOpacity,Alert, Text, AsyncStorage } from 'react-native';
// import { Entypo } from '@expo/vector-icons'; 
// import { Ionicons } from '@expo/vector-icons'; 

// class orderDetails extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       id:''
//     };
//   }
//  async componentDidMount()
//   {
//   this._retrieveData();
//   }
//   _retrieveData = async () => {
//     try {
//       const value = await AsyncStorage.getItem('id');
//       if (value !== null) {
//        this.setState({id:value})
//       }
//     } catch (error) {
//       // Error retrieving data
//     }
//   };
//   renderElement(){ 
//     if(this.state.id == '0')
//        {return <View style={{flex:1, marginHorizontal:'2%', marginTop:20}}>
//        <Text style={{fontSize:22, color:'gray' }}> Full Name</Text>
//        <Text style={{fontSize:22, color:'gray' }}> Phone No</Text>
//        <Text style={{fontSize:22, color:'gray' }}> City</Text>
//        <Text style={{fontSize:22, color:'gray' }}> Address</Text>
//        <Text style={{fontSize:22, color:'gray' }}> Description</Text>
//        </View>}
//        else
//        {
//          return (<View>
//          <View style={{marginHorizontal:10, borderColor:'black', marginTop:30,  borderWidth:0.8, width:340, height:'28%'}}>
//                 <Text style={{fontSize:22, color:'gray' }}> Customer Details</Text>
//                  </View>
//                  <View 
//                    style={{marginHorizontal:10, borderColor:'black',marginVertical:15,  borderWidth:0.8, width:340, height:'35%'}}>
//                          <Text style={{fontSize:22, color:'gray' }}> Product Details</Text>
//                  </View>
//          </View>)

//        }
 
//  }
//   render() {

//     return (
//         <View style={{flex:1, backgroundColor:'white', }}>
//         {/* <StatusBar
//         animated={true}
//         backgroundColor="#61dafb"
       
//          /> */}
//         <View style={{width:'100%', height:'8%',flexDirection:'row',alignItems:'center', backgroundColor:'white'}}>
//         <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}} style={{marginHorizontal:7,}}  >
//         {/* <Entypo name="menu" size={40} color="black" /> */}
//         <Ionicons name="arrow-back-outline" size={35} color="black" />
//         </TouchableOpacity>
//         <Text style={{marginLeft:50, fontSize:20, fontWeight:'bold'}}>Order Details</Text>
//         </View>
//        <View>

// </View>
// { this.renderElement() }
        
//         <View style={{marginVertical:10, alignItems:'center', justifyContent:'flex-end'}}>
//         <TouchableOpacity  onPress={()=>{Alert.alert('Your Request is Submitted Successfuly')}} style={{width:330,marginVertical:10, height:40,borderRadius:20, justifyContent:'center', alignItems:'center', backgroundColor:'black'}}><Text style={{color:'white', fontSize:22}}>Accept</Text></TouchableOpacity>
//         <TouchableOpacity style={{width:330, height:40,borderRadius:20, justifyContent:'center', alignItems:'center', backgroundColor:'black'}}><Text style={{color:'white', fontSize:22}}>Cancel</Text></TouchableOpacity>
//         </View>
//       </View>
//     );
//   }
// }


// export default orderDetails;


import React, { Component } from 'react';
import { View,TextInput,TouchableOpacity, Text, Image, Alert } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome} from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

class orderDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:''
    };
  }

  async componentDidMount()
  {
  this._retrieveData();
  }
  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('id');
      if (value !== null) {
       this.setState({id:value})
      }
    } catch (error) {
      // Error retrieving data
    }
  };
  render() {
    return (
      <View style={{flex:1, alignItems:'center', backgroundColor:'white'}}>
      <View style={{width:'100%', flexDirection:'row', height:'8%',alignItems:'center',  backgroundColor:'white'}}>
   <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}} style={{marginHorizontal:7,}}  >
   {/* <Entypo name="menu" size={40} color="black" /> */}
   <Ionicons name="arrow-back-outline" size={30} color="black" />
   </TouchableOpacity>
   <Text style={{fontSize:20, color:'black', marginHorizontal:70}}>Request Form</Text>
   </View>
   <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' , marginHorizontal:5}}>
  
   <View  style={{flexDirection:'row', marginVertical:10, borderBottomColor:'gray', borderBottomWidth:0.5 ,  alignItems:'center'}}>
     <Text style={{width:'90%' , fontSize:16, color:'gray'}}>Full Name</Text>
   </View>

   <View  style={{flexDirection:'row', marginVertical:10, borderBottomColor:'gray', borderBottomWidth:0.5 ,  alignItems:'center'}}>
     <Text style={{width:'90%' , fontSize:16, color:'gray'}}>Phone No</Text>
   </View>
   <View  style={{flexDirection:'row', marginVertical:10, borderBottomColor:'gray', borderBottomWidth:0.5 ,  alignItems:'center'}}>
     <Text style={{width:'90%' , fontSize:16, color:'gray'}}>City</Text>
   </View>
   <View  style={{flexDirection:'row', marginVertical:10, borderBottomColor:'gray', borderBottomWidth:0.5 ,  alignItems:'center'}}>
     <Text style={{width:'90%' , fontSize:16, color:'gray'}}>Adress</Text>
   </View>
   <View  style={{flexDirection:'row', marginVertical:10, borderBottomColor:'gray', borderBottomWidth:0.5 ,  alignItems:'center'}}>
     <Text style={{width:'90%' , fontSize:16, color:'gray'}}> </Text>
   </View>
   <View  style={{flexDirection:'row', marginVertical:10, borderBottomColor:'gray', borderBottomWidth:0.5 ,  alignItems:'center'}}>
     <Text style={{width:'90%' , fontSize:16, color:'gray'}}> </Text>
   </View>
   <TextInput
            style={{fontSize: 17,
              borderColor:'gray',
              borderWidth:0.5,
              margin:10,
              width:'90%',}}
            multiline={true}
            numberOfLines={8}
            placeholder="Write On the Wall"
            underlineColorAndroid='transparent'
            require={true}
/>
<View style={{ width:'96%',justifyContent:'center',height:180,elevation:0.5,borderRadius:5,marginHorizontal:'1%', marginTop:10,  elevation:5, backgroundColor:'white'}}>
          {/* <TouchableOpacity onPress={()=>{this.props.navigation.navigate('ProductDetails')}} style={{width:'90%',justifyContent:'center',height:180,elevation:0.5,borderRadius:5,marginHorizontal:'3%', marginTop:15,  backgroundColor:'transparent'}}> */}
        <View style={{flexDirection:'row', marginHorizontal:15, marginVertical:1}}>
        <Text>09-02-2020</Text>
        <View style={{width:185}}></View>
        <Text style={{alignSelf:'flex-end', marginRight:10}}>Category</Text>
      </View>
        <View style={{flexDirection:'row', marginHorizontal:15, marginVertical:1}}>
        <Text>Request id</Text>
        <View style={{width:190}}></View>
        <Text style={{alignSelf:'flex-end', marginRight:10}}>complete</Text>
      </View>
        <View style={{flexDirection:'row', marginHorizontal:15, marginVertical:5}}>
        <Image style={{alignSelf:'center',}} style={{width:70, height:90}} source={require('./../assets/mob5.jpeg')}/>
     <View>
     <View style={{flexDirection:'row'}}>
     <Text style={{color:'black', fontSize:13, width:185}}>mahsgdjmashd kash</Text>
     <Text style={{color:'black', alignSelf:'flex-end',fontWeight:'bold',fontSize:13}}>Repairing</Text>
      
     </View>
     <Text style={{color:'black', fontSize:13, width:220}}>All the product details will show here All the product details will show her All the product details will show her</Text>
     
     </View>
        </View>
          <View style={{alignItems:'center', justifyContent:'center', flexDirection:'row', marginBottom:10}}>

          </View>
      {/* </TouchableOpacity> */}
        </View>
        <Text style={{margin:15}}>Images</Text>
       <View style={{flexDirection:'row', alignSelf:'center'}}>
        <Image style={{alignSelf:'center',}} style={{width:'40%', height:150, marginVertical:10}} source={require('./../assets/mob5.jpeg')}/>
        <Image style={{alignSelf:'center',}} style={{width:'40%', height:150, marginVertical:10}} source={require('./../assets/mob5.jpeg')}/>

       </View>
              
      <View style={{marginVertical:10, alignItems:'center', justifyContent:'flex-end'}}>
         <TouchableOpacity  onPress={()=>{Alert.alert('Your Request is Submitted Successfuly')}} style={{width:330,marginVertical:10, height:40,borderRadius:20, justifyContent:'center', alignItems:'center', backgroundColor:'black'}}><Text style={{color:'white', fontSize:22}}>Accept</Text></TouchableOpacity>
        <TouchableOpacity style={{width:330, height:40,borderRadius:20, justifyContent:'center', alignItems:'center', backgroundColor:'black'}}><Text style={{color:'white', fontSize:22}}>Cancel</Text></TouchableOpacity>
         </View>
              </ScrollView>
      </View>
    );
  }
}

export default orderDetails;