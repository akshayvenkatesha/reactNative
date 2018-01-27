import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { StackNavigator } from 'react-navigation'

import AllNotifications from './screens/AllNotifications'
import NotificationConfig from './screens/NotificationConfig'
import AppwiseNotification from './screens/AppwiseNotification'
import Timer from './screens/Timer'

const Navigator = StackNavigator({
  AllNotifications: {
    screen: AllNotifications,
  },
  NotificationConfig: {
    screen: NotificationConfig
  },
  AppwiseNotification: {
    screen: AppwiseNotification
  },
  Timer: {
    screen: Timer
  }
});

export default class App extends Component {

  render() {
    return <Navigator />
  }
}