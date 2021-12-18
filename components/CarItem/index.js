import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';

function CarItem(props) {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require('../../app/assets/car3.jpeg  ')}
        style={styles.images}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model</Text>
        <Text style={styles.subtitle}>Starting at $70,000</Text>
      </View>
    </View>
  );
}

export default CarItem;
