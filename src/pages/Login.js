import React from 'react'
import {
    View, Text, StyleSheet,
    TextInput, TouchableOpacity
} from 'react-native'


class Login extends React.Component {

    constructor(props) {
        this.state = {
            email: '',
            password: ''
        }
    }

    handleLogin = (navigation) => {
        const { email, password } = this.state
        let request = {
            "email": email,
            "password": password
        }
        fetch('http://solarindo.indorobotik.com/api/v1/auth',
            {
                method: 'POST',
                body: request
            }
        ).then((responseJson) => responseJson.json())
            .then((response) => {
                if (response.data !== {}) {
                    navigation.push('Home')
                }
            })
    }

    render() {
        const { navigation } = this.props
        const { email, password } = this.state
        return (
            <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>

                <Text style={{ marginTop: '20%', color: 'grey' }}>Email</Text>
                <TextInput editable style={styles.textInput} value={email}
                    onChange={(value) => {
                        this.setState({ email: value })
                    }} />

                <Text style={{ marginTop: '3%', color: 'grey' }}>Password</Text>
                <TextInput editable secureTextEntry={true} style={styles.textInput} value={password}
                    onChange={(value) => {
                        this.setState({ password: password })
                    }} />

                <TouchableOpacity style={{ width: '65%', alignItems: 'center', marginTop: '5%' }}
                    // onPress={() => navigation.push('HomeTab')}>
                    onPress={() => this.handleLogin(navigation)}>
                    <View style={[styles.textInput, { width: '60%' }]}>
                        <Text style={{ fontWeight: 'bold', paddingVertical: 5, textAlign: 'center' }}>Login</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textInput: {
        width: '65%', shadowColor: 'black', shadowOffset: { width: 0, height: 5 },
        borderWidth: 2, borderColor: '#ddd', borderRadius: 10, paddingVertical: 3, paddingHorizontal: 10,
    }
})

export default Login