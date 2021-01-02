import React, { Component } from 'react';
import {
  View,
  Text,
  Alert,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Restaurantcard } from '../Custom/Restaurantcard';
import { Card } from '../Custom/Card';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { SearchBar, Image, Rating, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Halal extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      DATA: [
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
          title: "First Item",
          name: "Dawat Caffe and Restaurant",
          address: "北海道札幌市北区北17条西4丁目1-11 ニューエルム1F",
          description: "Islam teaches us that Halal Food is an important partof our life",
          contact: "0123456789",
          status: true,
          order: true,
          takeout: true,
          delivery: false,
          rating: 5.0
        },
        {
          id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
          title: "Second Item",
          name: "Sample Restaurant",
          address: "北海道札幌市北区北17条西4丁目1-11 ニューエルム1F",
          description: "Islam teaches us that Halal Food is an important partof our life",
          contact: "0123456789",
          status: false,
          order: false,
          takeout: false,
          delivery: false,
          rating: 7.5
        },
        {
          id: "58694a0f-3da1-471f-bd96-145571e29d72",
          title: "Third Item",
          name: "Dawat Caffe and Restaurant",
          address: "北海道札幌市北区北17条西4丁目1-11 ニューエルム1F",
          description: "Islam teaches us that Halal Food is an important partof our life",
          contact: "0123456789",
          status: true,
          order: false,
          takeout: false,
          delivery: true,
          rating: 3.5
        },
      ]
    }
  }
  render() {
    return (
      <View style={{ width: '100%', height: '100%', backgroundColor: '#F0F8FF' }}>
        <SearchBar
          placeholder="Type Here..."
          //onChangeText={value => }
          value={this.state.search}
          containerStyle={{ backgroundColor: 'white' }}
          inputContainerStyle={{ backgroundColor: 'dimgray' }}
        />
        <SafeAreaView>
          <FlatList
            data={this.state.DATA}
            renderItem={item => this.renderItem(item)}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
      </View>
    );
  }
  renderItem = ({ item }) => {
    return (
      <View>
        {/* <TouchableOpacity style={styles.button} onPress={() => Alert.alert('card button pressed')}> */}
          <Card>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={{ color: 'dimgray'}}>{item.address}</Text>
            <Text style={{ color: 'green' }}><Icon name='phone' /> {item.contact}</Text>
            <View style={styles.lineStyle} />
            <Grid>
              <Row>
                <Restaurantcard>
                  <Text style={{ color: 'dimgray'}}>{item.description}</Text>
                </Restaurantcard>
              </Row>
              <Row>
                <Col>
                  <Restaurantcard>
                    <Image
                      source={require('../Assests/Images/hisback.jpg')}
                      style={{ width: '100%', height: '100%' }}
                    />
                  </Restaurantcard>
                </Col>
                <Col>
                  <Row>
                    <Restaurantcard>
                      {item.status ?
                        <Text style={{ color: 'green' }}><Icon name='leanpub'/> Open: ◯</Text>
                        :
                        <Text style={{ color: 'red' }}><Icon name='leanpub'/> Open: x</Text>
                      }
                    </Restaurantcard>
                  </Row>
                  <Row>
                    <Restaurantcard>
                      {item.order ?
                        <Text style={{ color: 'green' }}><Icon name='cutlery'/> Advanced Order: ◯</Text>
                        :
                        <Text style={{ color: 'red' }}><Icon name='cutlery'/> Advanced Order: x</Text>
                      }
                    </Restaurantcard>
                  </Row>
                  <Row>
                    <Restaurantcard>
                      {item.takeout ?
                        <Text style={{ color: 'green' }}><Icon name='shopping-bag'/> Takeout: ◯</Text>
                        :
                        <Text style={{ color: 'red' }}><Icon name='shopping-bag'/> Takeout: x</Text>
                      }
                    </Restaurantcard>
                  </Row>
                  <Row>
                    <Restaurantcard>
                      {item.delivery ?
                        <Text style={{ color: 'green' }}><Icon name='truck'/> Home Delivery: ◯</Text>
                        :
                        <Text style={{ color: 'red' }}><Icon name='truck'/> Home Delivery: x</Text>
                      }
                    </Restaurantcard>
                  </Row>
                  <Row>
                    <Restaurantcard>
                      <Rating
                        readonly
                        type='star'
                        ratingCount={10}
                        startingValue={item.rating}
                        imageSize={17}
                      ></Rating>
                    </Restaurantcard>
                  </Row>
                </Col>
              </Row>
            </Grid>
            <Restaurantcard>
              <Button
                title="Visit"
                type= "outline"
                onPress={() => this.props.navigation.navigate('HalalPlaceDetails')}
              />
            </Restaurantcard>
          </Card>
        {/* </TouchableOpacity> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    color: 'white',
    padding: 5,
    fontSize: 20,
    backgroundColor: 'dimgray',
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: '#808080',
    marginTop: 5,
    marginBottom: 5,
  },
});
