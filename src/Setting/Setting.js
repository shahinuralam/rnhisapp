import React from 'react';
import { Alert, View } from 'react-native';
import { Button } from 'react-native-elements';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

class Setting extends React.Component {
  render() {
    return (
      <View>
        <Button
          icon={<IconAntDesign name="logout" size={20} color="white" />}
          style={{ marginTop: 0 }}
          buttonStyle={{ backgroundColor: 'indianred' }}
          title="Logout"
          type="solid"
          onPress={() => this._onPressLogoutButton()}
        />
      </View>
    );
  }
  _onPressLogoutButton() {
    Alert.alert(
      'Logout',
      'Are you sure ?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'OK', onPress: () => this.props.navigation.replace('Login') }
      ],
      { cancelable: false }
    );
  }
}

export default Setting;
