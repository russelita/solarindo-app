import React from 'react';
import {
    StyleSheet,
    View,
    Text, 
    TextInput,
    Platform
} from 'react-native';

const FormProfile = (props) => {
    return (
        <View style={{height:55,flexDirection:'row',borderBottomColor:'#C4C4C4',borderBottomWidth:1,justifyContent:'center',paddingLeft:5,paddingRight:5}}>
            <View style={{flex:1,justifyContent:'center'}}>
                <Text style={{color:'#525252'}}>{props.label}</Text>
            </View>
            <View style={{flex:1,justifyContent:'center',alignItems:'flex-end'}}>
                <Text style={{fontSize:16,fontWeight:'bold'}}>{props.value}</Text>
            </View>
        </View>
    );
}


export { FormProfile };