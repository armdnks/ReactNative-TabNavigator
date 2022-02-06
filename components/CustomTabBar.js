import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabBarStyle}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        // DISPLAY LABEL
        const label = route.name;
        // DISPLAY ICON
        const icon = options.icon;

        const isFocused = state.index === index;

        const onPress = () => {
          if (!isFocused) {
            navigation.navigate({ name: route.name });
          }
        };

        // ANIMATION
        const animation = new Animated.Value(0);

        Animated.spring(animation, {
          toValue: isFocused ? 1 : 0,
          useNativeDriver: true,
        }).start(() => animation.setValue(1));

        const animated = {
          transform: [
            {
              scale: animation.interpolate({
                inputRange: [0, 1],
                outputRange: ['0.6', '1'],
              }),
            },
          ],
        };

        // COLOR AND ICON SIZE SETTINGS
        let color = isFocused ? '#3c06ab' : '#555';
        let iconSize = 35;

        return (
          <View style={styles.tabContainer} key={index}>
            <TouchableWithoutFeedback onPress={onPress}>
              <Animated.View style={animated}>
                <View style={styles.tabContainer}>
                  <AntDesign name={icon} size={iconSize} color={color} />
                  <Text style={{ color: color, marginTop: 5 }}>{label}</Text>
                </View>
              </Animated.View>
            </TouchableWithoutFeedback>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    flexDirection: 'row',
    position: 'absolute',
    left: 30,
    right: 30,
    bottom: 30,
    paddingHorizontal: 15,
    height: 90,
    borderRadius: 50,
    elevation: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },

  tabContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomTabBar;
