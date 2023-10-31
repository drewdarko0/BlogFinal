import React from 'react';
import {Image, StyleSheet, View} from 'react-native';


const Header = () => {
    return (
        <View>
            <Image
                style={styles.container}
                source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}                
            />
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      minHeight: 100,
      minWidth: 300
    },image: {
        flex: 1,
        justifyContent: 'center',
      },
});    