import React from 'react';
import { Text, View } from 'react-native';

const styles = {
    textStyle: {
        fontSize: 20,
    },
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        elevation: 2,
        position: 'relative'
    },
};

const Header = (props) => {
  return (
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>{props.headerText}</Text>
      </View>   
  );
};

export default Header;
