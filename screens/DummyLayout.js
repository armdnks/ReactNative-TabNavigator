import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const DummyLayout = (props) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FC466B', '#3F5EFB']}
        style={styles.linearGradient}
      >
        <Text style={styles.text}>{props.text}</Text>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={props.image} />
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    resizeMode: 'contain',
  },
  text: {
    color: '#fff',
    fontSize: 50,
    fontWeight: '800',
    textAlign: 'left',
    paddingHorizontal: 30,
  },
});

export default DummyLayout;
