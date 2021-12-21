import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';

function Header(props) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../app/assets/images.png')}
      />
      <Image
        style={styles.menu}
        source={require('../../app/assets/menu.jpeg')}
      />
    </View>
  );
}

export default Header;
