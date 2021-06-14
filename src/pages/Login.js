import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { LoginAction } from '../redux/Action'

export class Login extends Component {
    
    constructor(props) {
        super(props)
        this.state={
            email:"",
            pass:""
        }
    }

    handleLogin= () => {
         axios.post('https://solarindo.indorobotik.com/api/v1/auth',{
            params:{
                email:this.state.email,
                pass:this.state.pass,
            }
        })
        .then((response) =>{
            let data=response.data;
            if(data !== ""){
                this.props.LoginAction(true,"isLogin")
                this.props.LoginAction(data,"dataUser")
                alert("Login berhasil")
                this.props.navigation.navigate('Home')
            }else{
                alert("login gagal")
                this.props.LoginAction(false,"isLogin")
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    

    render() {
        return (
            <View>
                <Text> Email </Text>
                <TextInput placeholder="masukan email" onChangeText={(value)=>{this.setState({email:value})}}/>
                <Text> Password </Text>
                <TextInput placeholder="masukan password" onChangeText={(value)=>{this.setState({pass:value})}}/>
                <TouchableOpacity onPress={()=>{this.handleLogin()}}><Text >Login</Text></TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    LoginAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
