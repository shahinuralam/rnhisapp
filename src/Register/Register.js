import React, { Component } from 'react';
import {
  Text,
  ImageBackground,
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card } from '../Custom/Card';
export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      phone: '',
      password: '',
      confirm_password: '',
    };
  }

  render() {
    return (
      <ImageBackground
        source={require('../Assests/Images/background.jpg')}
        style={{ width: '100%', height: '100%' }}>
        <SafeAreaView>
          <ScrollView>
            <View>
              <Card>
                <Text>Your Name:</Text>
                <View>
                  <Input
                    placeholder='Full name'
                    leftIcon={<Icon name='user' />}
                    onChangeText={email => this.setState({ email })}
                  />
                </View>
                <Text>Email Address:</Text>
                <View>
                  <Input
                    placeholder='Email Address'
                    leftIcon={<Icon name='envelope-o' />}
                    onChangeText={email => this.setState({ email })}
                  />
                </View>
                <Text>Phone Number:</Text>
                <View>
                  <Input
                    placeholder='Phone Number'
                    leftIcon={<Icon name='phone' />}
                    onChangeText={phone => this.setState({ phone })}
                  />
                </View>
                <Text>Password:</Text>
                <View>
                  <Input
                    placeholder='Password'
                    leftIcon={<Icon name='lock' />}
                    secureTextEntry={true}
                    onChangeText={password => this.setState({ password })}
                  />
                </View>
                <Text>Confirm Password:</Text>
                <View>
                  <Input
                    placeholder='Confirm Password'
                    leftIcon={<Icon name='lock' />}
                    secureTextEntry={true}
                    onChangeText={confirm_password => this.setState({ confirm_password })}
                  />
                </View>

                <View>
                  <Button
                    style={{ marginTop: 2 }}
                    title="Submit"
                    type="solid"
                    onPress={() => this._onPressRegisterButton()}
                  />
                </View>
                <View style={{ alignItems: 'flex-end' }}>
                  <Text
                    style={{
                      margin: 5,
                      color: '#0066ff',
                      textDecorationLine: 'underline',
                    }}
                    onPress={() => this.props.navigation.navigate('Login')}>
                    Already have a account? Login here
              </Text>
                </View>
              </Card>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    );
  }
  _onPressRegisterButton() {
    this.props.navigation.replace('Login');
  }
}
const styles = StyleSheet.create({
  textInputContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#000',
    paddingBottom: 5,
    paddingTop: 10,
  },
  inputStyle: {
    flex: 1,
    height: 40,
    marginLeft: 5,
  },
  textStyle: {
    flex: 1,
    height: 40,
    marginLeft: 5,
  },
});
