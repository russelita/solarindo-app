import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'
import {
    Text,
    TouchableOpacity
} from 'react-native';

const ListMenu = ({ onPress, children }) => {
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>{children}</Text>
            <Icon name={"chevron-right"} size={25} color={"darkblue"} style={{position: 'absolute', right:'2%', marginTop: 10}} />
        </TouchableOpacity>
    );
}

const styles = {
    textStyle: {
        color: '#333333',
        fontSize: 14,
        fontFamily: 'Montserrat-Medium',
        paddingTop: 15,
        paddingBottom: 15,
    },
    buttonStyle: {
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: "#f1f1f1",
        paddingLeft: 15,
        paddingRight: 15,
    }
}

export { ListMenu };