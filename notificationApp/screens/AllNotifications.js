import React, { Component } from 'react'
import { Text, View, TouchableHighlight, PermissionsAndroid } from 'react-native'
import Notification from "../modules/Notification"

const PERMISSION = PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE;

export default class AllNotifications extends Component {

    constructor(props) {
        super(props);
        this.state = {
          sender: '',
          text: '',
          apps: [],
        };
      }
    

    static navigationOptions = {
        title: 'AllNotifications',
    };

    componentDidMount() {
        this._checkPermissionPhoneState();
        this._checkPermissionNotification();
    
        Notification.on('notification', (data) => {
          //console.log("AppState", AppState.currentState);
          console.log("notification received", JSON.stringify(data));
          if (AppState.currentState === 'active') {
            this.setState({
              sender: data.app,
              text: data.text
            });
          }
        });
      }
    
      _checkPermissionPhoneState = () => {
        PermissionsAndroid.check(PERMISSION).then((result) => {
          if (!result) {
            PermissionsAndroid.requestPermission(PERMISSION).then((result) => {
              if (result) {
                console.log("User accepted read phone state permission");
              } else {
                console.log("User refused read phone state permission");
              }
            });
          }
        });
      }
    
      _checkPermissionNotification = () => {
        Notification.getPermissionStatus()
          .then(response => {
            if (response === 'denied') {
              this._requestPermissionNotification();
            }
          });
      }
    
      _requestPermissionNotification = () => {
        Alert.alert(
          'Can we access your notifications?',
          'We need access so that blah blah blah',
          [
            {text: 'No', onPress: () => console.log('permission denied')},
            {text: 'OK', onPress: Notification.requestPermission},
          ]
        )
      }
      
      getInstalledApps = () => {
        Notification.getInstalledApps()
          .then(response => {
            console.log("Installed Apps", JSON.stringify(response));
            this.setState({apps: response});
          });
      }    

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