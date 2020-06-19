import React from 'react';
import { View,Text, Alert, ActivityIndicator } from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import axios from 'axios'
import { StackNavigator, NavigationActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

export default class Login extends React.Component {
    constructor(props){
		super(props)
		this.state={
            email:'',
            password:'',
            loading:false
		}
    }

    async storeToken(token){
        try{
            await AsyncStorage.setItem("@token_key", token);
        }catch(e){
            alert(e)
        }
    }


    onLogin = ()=>{
        this.setState({loading:true})
        axios({method:'POST',url:"http://solarindo.indorobotik.com/api/v1/auth",data:{email:this.state.email,password:this.state.password}})
            .then((res)=>{
                this.storeToken(res.data.token)
                this.props.navigation.push('Home')
            }).catch((err)=>{
                Alert(err)
            })

    }
    

    render(){
        return(
            <View style={{flex: 1,justifyContent:'center',paddingLeft:30,paddingRight:30}}>
                <View style={{justifyContent:'center',alignItems:'center',marginBottom:50}}>
                    <Text style={{fontSize:30,color:'#003CC0',fontWeight:'bold'}}>
                        Login
                    </Text>
                    <Text>
                        Solarindo
                    </Text>
                </View>
                <View style={{marginBottom:15}}>
                    <TextInput onChangeText={(text)=>{this.setState({email:text})}} placeholder="Email" style={{height:55,borderColor:'#C4C4C4',borderRadius:6,borderWidth:1}}>

                    </TextInput>
                </View>
                <View style={{marginBottom:25}}>
                    <TextInput onChangeText={(text)=>{this.setState({password:text})}} placeholder="Password" style={{height:55,borderColor:'#C4C4C4',borderRadius:6,borderWidth:1}} secureTextEntry={true}>

                    </TextInput>
                </View>
                <TouchableOpacity onPress={this.onLogin}>
                    <View style={{height:50,backgroundColor:'#003CC0',justifyContent:'center',alignItems:'center',borderRadius:6}}>
                        {this.state.loading?<ActivityIndicator size="small" color="white"/>:<Text style={{color:'white',fontSize:16,fontWeight:'800',fontWeight:'bold'}}>
                        {this.state.loading?'Loading':'Login'}
                    </Text>}
                        
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}


