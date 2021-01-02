import React, { useState } from 'react';
import {
  Alert,
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  AsyncStorage
} from 'react-native';
import { Button, Input } from 'react-native-elements';
import { Card } from '../Custom/Card';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/FontAwesome';
import HisApi from '../Common/HisApi';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userInfo, setUserInfo] = useState([]);
  return (
    <ImageBackground
      source={require('../Assests/Images/background.jpg')}
      style={{ width: '100%', height: '100%' }}>
      <SafeAreaView>
        <ScrollView>
          <View>
            <Card>
              <View style={styles.textInputContainer}>
                <Grid>
                  <Col>
                    <View style={{ padding: 5 }}>
                      <Text>Select Login User Type</Text>
                    </View>
                  </Col>
                  {/* <Col>
                  <View style={styles.userType}>
                    <SelectInput value={0} options={options} />
                  </View>
                </Col> */}
                </Grid>
              </View>
              <View style={{ alignItems: 'center' }}>
                <Image
                  source={require('../Assests/Images/hislogo.png')}
                  style={{ width: 200, height: 200, resizeMode: 'contain' }}
                />
              </View>
              <View>
                <Input
                  placeholder='Email or Username'
                  leftIcon={<Icon name='user' size={24} color='black' />}
                  onChangeText={username => setUsername(username)}
                />
              </View>
              <View>
                <Input
                  placeholder='password'
                  secureTextEntry={true}
                  leftIcon={<Icon name='lock' size={24} color='black' />}
                  onChangeText={password => setPassword(password)}
                />
              </View>
              <View style={{ padding: 5, alignItems: 'flex-end' }}>
                <Text
                  style={{ color: '#00b383', textDecorationLine: 'underline' }}
                  onPress={() =>
                    Alert.alert('Forgot Password', 'Hyper link work')
                  }>
                  Forgot password
                  </Text>
              </View>
              <View>
                <Button
                  style={{ marginTop: 2 }}
                  title="LOGIN"
                  type="solid"
                  onPress={() => navigation.replace('Home', { name: 'Home' })}
                  
                />
              </View>
              <View style={{ alignItems: 'center', marginTop: 5 }}>
                <Text>or</Text>
              </View>
              <View>
                <Button
                  style={{ marginTop: 5 }}
                  title="LOGIN WITH GOOGLE"
                  type="outline"
                  onPress={() =>
                    Alert.alert('Info', 'This process under Construction')
                  }
                />
                <Button
                  style={{ marginTop: 5 }}
                  title="LOGIN WITH FACEBOOK"
                  type="outline"
                  onPress={() => Alert.alert('Info', 'This process under Construction')}
                />
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <Text
                  style={{
                    margin: 5,
                    color: '#0066ff',
                    textDecorationLine: 'underline',
                  }}
                  onPress={() => navigation.navigate('Register', { name: 'Register' })}>
                  Don't have a account? Register here
                  </Text>
              </View>
            </Card>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

function _onPressLoginButton() {
  HisApi.login('test', 'test').then(_login => {
    AsyncStorage.setItem('userInfo', JSON.stringify(_login));
  });
  this.props.navigation.replace('Home');
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
  userType: {
    borderWidth: 1,
    padding: 7,
    borderColor: 'black',
    borderRadius: 10,
  },
});
export default Login;