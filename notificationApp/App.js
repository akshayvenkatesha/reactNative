import React, { Component } from 'react'
import { Text, View, NativeModules, DeviceEventEmitter, AppRegistry } from 'react-native'
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

// const eventsMap = {
//   notification: 'notificationReceived',
//   //installedApps: 'installedApps',
// };
// const NotificationModule = NativeModules.NotificationModule;
// const Notification = {};

// Notification.getPermissionStatus = () => {
//   return NotificationModule.getPermissionStatus();
// }

// Notification.requestPermission = () => {
//   return NotificationModule.requestPermission();
// }

// Notification.getInstalledApps = () => {
//   return NotificationModule.getInstalledApps();
// }

// Notification.on = (event, callback) => {
//   const nativeEvent = eventsMap[event];
//   if (!nativeEvent) {
//     throw new Error('Invalid event');
//   }
//   DeviceEventEmitter.removeAllListeners(nativeEvent);
//   return DeviceEventEmitter.addListener(nativeEvent, callback);
// }

// //module.exports = Notification;


export default class App extends Component {

  render() {
    return <Navigator />

    // return(
    //   <View>Happy</View>
    //  )
  }
}

//AppRegistry.registerComponent('App', () => App);