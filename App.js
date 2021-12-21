// import WelcomeScreen from './app/screen/WelcomeScreen';

// import {
//   useDimensions,
//   useDeviceOrientation,
// } from '@react-native-community/hooks';
// import {
//   StyleSheet,
//   Text,
//   Alert,
//   // TouchableWithoutFeedback,
//   // TouchableOpacity,
//   // TouchableHighlight,
//   View,
//   Image,
//   Button,
//   Platform,
//   SafeAreaView,
//   StatusBar,
//   Dimensions,
// } from 'react-native';

// export default function App() {
//   // const handlePress = () => {
//   //   console.log('text pressed');
//   // };

//   console.log(useDimensions());
//   const {landscape} = useDeviceOrientation();

//   return (
//     <SafeAreaView style={styles.container}>
//       {/* <Text numberOfLines={1} onPress={handlePress}>
//         heloo world
//       </Text>
//       <TouchableHighlight onPress={() => console.log('Image tapped')}>
//         <Image
//           style={{ width: 100, height: 100 }}
//           source={require('./assets/favicon.png')}
//         />
//       </TouchableHighlight> */}
//       <View
//         style={{
//           backgroundColor: 'dodgerblue',
//           width: '100%',
//           height: landscape ? '100%' : '30%'
//         }}></View>
//       {/* <Button
//         // color="blue"
//         title="Click me"
//         onPress={() =>
//           Alert.alert('submit', 'do you wish to submit', [
//             { text: 'YES', onPress: () => console.log('yes') },
//             { text: 'NO', onPress: () => console.log('no') },
//           ])
//         }
//       /> */}
//     </SafeAreaView>
//   );
// }
// export default function App() {
//   return (
//    <WelcomeScreen/>
// <View
//   style={{
//     backgroundColor: 'white',
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   }}>
//   <View
//     style={{
//       backgroundColor: 'dodgerblue',
//       width: 100,
//       height: 100,
//     }}
//   />
//   <View
//     style={{
//       backgroundColor: 'gold',
//       width: 100,
//       height: 100,
//     }}
//   />
//   <View
//     style={{
//       backgroundColor: 'tomato',
//       width: 100,
//       height: 100,
//     }}
//   />

// </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     // justifyContent: 'center',
//     // alignItems: 'center',
//     paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
//   },
// });
import React from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
// import CarItem from './components/CarItem';
import CarsList from './components/carlist';
import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <CarItem
        name={'Model 3'}
        tagline={'Order online for'}
        taglineCTA={'Touchless Delivery'}
        image={require('./app/assets/car.jpeg')}
      /> */}
      <Header/>
      <CarsList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
