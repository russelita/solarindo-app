import React from 'react';
import { View,Text,TouchableOpacity,StatusBar } from 'react-native';
import  Ionicons  from 'react-native-vector-icons/Ionicons';
import { FormProfile,Header } from '../component';


export default class TabProfile extends React.Component{
    render(){
        return(
            <View style={{flex:1,backgroundColor:'white'}}>
                <StatusBar backgroundColor="#0B108C" barStyle="light-content"></StatusBar>
                <Header headerName="Profile"></Header>
                <View style={{marginTop:40,alignItems:'center'}}>
                    <Ionicons name="ios-contact" color={"#9DA8C1"} size={130} />
                </View>
                <View style={{marginTop:50,paddingRight:20,paddingLeft:20}}>
                    <FormProfile label="Nama :" value="Rizal"/>
                    <FormProfile label="Email :" value="admin@solarindo.com"/>
                    <FormProfile label="Phone :" value="01234"/>

                </View>
                <View style={{paddingLeft:30,paddingRight:30,marginTop:50}}>
                    <TouchableOpacity onPress={this.onLogin}>
                        <View style={{height:50,backgroundColor:'#003CC0',justifyContent:'center',alignItems:'center',borderRadius:6}}>
                            <Text style={{color:'white'}}>Update Profile</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{paddingLeft:30,paddingRight:30,marginTop:20}}>
                    <TouchableOpacity onPress={this.onLogin}>
                        <View style={{height:50,backgroundColor:'#F3334A',justifyContent:'center',alignItems:'center',borderRadius:6}}>
                            <Text style={{color:'white'}}>Logout</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}