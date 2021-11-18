import React from 'react';
import {View, Pressable, Text, Image, Dimensions} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

const CustomButton = props => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <View style={{...styles.container, ...props.style}}>
      <Pressable
        style={{...styles.innerContainer}}
        onPress={props.onPress}
        android_ripple={{color: 'grey'}}>
        <Text style={props.textStyle}>{props.children}</Text>
      </Pressable>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    borderRadius: 7,
    overflow: 'hidden',
  },
  innerContainer: {
    flex: 1,
    padding: '15@ms',
  },
});

export default CustomButton;
