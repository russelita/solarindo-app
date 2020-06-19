import React from 'react';
import { View,Text,Button,AsyncStorage, Alert } from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import axios from 'axios'


export default class Login extends React.Component {
    constructor(props){
		super(props)
		this.state={
            email:'',
            password:'',
            loading:false
		}
    }

    


    onLogin = ()=>{
        this.setState({loading:true})
        axios({method:'POST',url:"http://solarindo.indorobotik.com/api/v1/auth",data:{email:this.state.email,password:this.state.password}})
            .then(async(res)=>{
                AsyncStorage.setItem('tokenlogin', res.token);
                this.props.navigation.push('Home')
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
                        <Text style={{color:'white',fontSize:16,fontWeight:'800',fontWeight:'bold'}}>
                            {this.state.loading?'Loading':'Login'}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}


