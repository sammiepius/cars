import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import StyleButton from '../StyleButton';
import styles from './styles';

function CarItem(props) {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require('../../app/assets/car3.jpeg')}
        style={styles.images}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting at $70,000</Text>
      </View>
      <StyleButton
        type="primary"
        content={'Custom Order'}
        onPress={() => {
          console.warn('custom order was pressed');
        }}
      />
      <StyleButton
        type="secondary"
        content={'Existing Inventory'}
        onPress={() => {
          console.warn('existing was pressed');
        }}
      />
    </View>
  );
}

export default CarItem;
