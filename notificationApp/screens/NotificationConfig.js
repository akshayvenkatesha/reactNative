import React, { Component } from 'react'
import { Text, View, TouchableHighlight } from 'react-native'

export default class NoficationConfig extends Component {

    static navigationOptions = {
        title: 'NoficationConfig',
    };

    render() {
        return (
            <TouchableHighlight onPress={() =>
                this.props.navigation.navigate('AppwiseNotification')}>
                <View>
                    <Text>NoficationConfig</Text>
                </View>
            </TouchableHighlight>
        );
    }
}