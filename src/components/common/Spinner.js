import React from 'react';
import {View, ActivityIndicator} from 'react-native';

const Spinner = ({size}) => {
  return(
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || 'large'}/> //If we do not specify a size default to Large
    </View>
  );
};

const styles = {
  spinnerStyle:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export {Spinner};
