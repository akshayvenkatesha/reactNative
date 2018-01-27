import React, { Component } from 'react'
import { Text, View, TouchableHighlight } from 'react-native'

export default class AllNotifications extends Component {

    static navigationOptions = {
        title: 'AllNotifications',
    };

    render() {
        return (
            <TouchableHighlight onPress={() =>
                this.props.navigation.navigate('NotificationConfig')}>
                <View>
                    <Text>AllNotifications</Text>
                </View>
            </TouchableHighlight>
        );
    }
}