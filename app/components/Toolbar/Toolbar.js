import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

export default class Toolbar extends React.Component {
  
  
  render() {
    return (
      <View style={styles.toolbarView}>
        <Text style={styles.toolbarText}>
          {this.props.title}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  toolbarView: {
    backgroundColor: '#000',
    padding: '10'
  },
  toolbarText: {
    color: '#fff',
    textAlign: 'center' 
  }
 
});

React.defaultProps = {
    title: 'BookFinder'
}

