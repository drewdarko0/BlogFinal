import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { db } from '../lib/firebase';


const HomeScreen = ({navigation}) => {
    
    return (
        <View style={styles.container}>
            <Text>This is the home screen</Text>
        </View>
    )
}

export default HomeScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });