import React from "react";
import { StyleSheet, View, Text } from "react-native";

const NotFoundScreen = ({navigation}) => {
    
    return (
        <View style={styles.container}>
            <Text>404 Page Not Found</Text>
        </View>
    )
}

export default NotFoundScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });