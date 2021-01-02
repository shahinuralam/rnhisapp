import React from 'react';
import {View, StyleSheet} from 'react-native';

const Restaurantcard = props => {
  let shadowStyle = {
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 1,
  };
  if (props.noShadow) {
    shadowStyle = {};
  }
  return (
      <View style={[styles.containerStyle, props.style, shadowStyle]}>
        {props.children}
      </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    padding: 5,
    margin: 2,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 3,
  },
});

export {Restaurantcard};
