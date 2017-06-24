import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import Toolbar from './app/components/Toolbar/Toolbar';

export default class bookfinder extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Toolbar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
 
});
