import React, {useState, useCallback, useRef} from 'react';
import {
  View,
  Text
} from 'react-native';

import {moderateScale, ScaledSheet} from 'react-native-size-matters';

const HomeScreen = props => {
    return (
        <View>
            <Text>
                This is Home screen!!
            </Text>
        </View>
    );
};

const styles = ScaledSheet.create({});

export default HomeScreen;