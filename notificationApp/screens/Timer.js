import React, { Component } from 'react'
import { Text, View, TouchableHighlight } from 'react-native'

export default class Timer extends Component {

    static navigationOptions = {
        title: 'Timer',
    };

    render() {
        return (
            <TouchableHighlight onPress={() =>
                this.props.navigation.navigate('AllNotifications')}>
                <View>
                    <Text>Timer</Text>
                </View>
            </TouchableHighlight>
        );
    }
}