import React, { Component, useRef } from 'react';
import {
    Text,
    ImageBackground,
    TouchableOpacity,
    StyleSheet,
    View,
    SafeAreaView,
    Dimensions,
    ScrollView,
    Alert
} from 'react-native';
import { Image } from 'react-native-elements';
import Carousel from 'react-native-anchor-carousel';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card } from '../Custom/Card';
const { width } = Dimensions.get('window');
const data = [
    {
        uri: 'https://i.imgur.com/GImvG4q.jpg'
    },
    {
        uri: 'https://i.imgur.com/Pz2WYAc.jpg'
    },
    {
        uri: 'https://i.imgur.com/IGRuEAa.jpg'
    },
    {
        uri: 'https://i.imgur.com/fRGHItn.jpg'
    },
    {
        uri: 'https://i.imgur.com/WmenvXr.jpg'
    }
];
export default class HalalPlaceDetails extends Component {
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
            <SafeAreaView>
                <ScrollView>
                    <View>
                        <Text style={styles.title}>Dawat Caffee and Restaurant</Text>
                        <Carousel style={styles.carousel}
                            data={data}
                            renderItem={this.renderItem}
                            itemWidth={150}
                            containerWidth={width - 20}
                            separatorWidth={0}
                            ref={(c) => {
                                this._carousel = c;
                            }}
                        //pagingEnable={false}
                        //minScrollDistance={20}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
    renderItem = ({ item, index }) => {
        const { uri } = item;
        return (
            <TouchableOpacity
                activeOpacity={1}
                style={styles.item}
                onPress={() => Alert.alert('Image Click Working!')}>
                <Image
                    source={{ uri: uri }}
                    style={{ width: '100%', height: 150 }} />
            </TouchableOpacity>
        );
    };
}
const styles = StyleSheet.create({
    title: {
        color: 'white',
        padding: 5,
        fontSize: 20,
        backgroundColor: 'dimgray',
        textAlign: 'center',
    },
    carousel: {
        flex: 1,
        backgroundColor: 'white',
        width: '100%'
    },
    item: {
        borderWidth: 2,
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        borderColor: 'white',
        elevation: 3
    }
});
