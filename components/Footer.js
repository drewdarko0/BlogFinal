import React from 'react';
import {StyleSheet, Text, View} from 'react-native';


const Footer = () => {
    return (
        <View style={styles.container}>
            <Text>Footer Here</Text>
        </View>
    )
}

export default Footer;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      minHeight: 100,
    },
});