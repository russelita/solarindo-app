import React from 'react';
import {
    StyleSheet,
    View,
    Text, 
    TextInput,
    Platform
} from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.headerView}>
            <Text style={styles.headerText}>{props.headerName}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    headerView: {
        width: "100%",
        backgroundColor: '#1016BB',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 0,
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: Platform.OS === 'ios' ? 15 : 0,
    },
    headerText: {
        fontSize: 16,
        fontFamily: 'Montserrat-SemiBold',
        color: '#ecf0f1',
        marginBottom: 15,
        marginTop: 15,
    },
});

export { Header };