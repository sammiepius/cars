import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import StyleButton from '../StyleButton';
import styles from './styles';

function  CarItem(props) {
  const { name, tagline, taglineCTA, image } = props.car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.images} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
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
    </View>
  );
}

export default CarItem;
