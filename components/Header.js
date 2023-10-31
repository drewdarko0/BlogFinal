import React from 'react';
import {Image, StyleSheet, View} from 'react-native';


const Header = () => {
    console.log('header success!');
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/image1.jpg')}
                style={styles.image}
            />
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },image: {
        flex: 1,
        justifyContent: 'center',
      },
    });
    