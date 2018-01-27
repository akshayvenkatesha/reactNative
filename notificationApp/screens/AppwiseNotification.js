import React, { Component } from 'react'
import { Text, View, TouchableHighlight } from 'react-native'

export default class AppwiseNotification extends Component {

    static navigationOptions = {
        title: 'AppwiseNotification',
    };

    render() {
        return (
            <TouchableHighlight onPress={() =>
                this.props.navigation.navigate('Timer')}>
                <View>
                    <Text>AppwiseNotification</Text>
                </View>
            </TouchableHighlight>
        );
    }
}