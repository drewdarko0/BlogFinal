import React from 'react';
import {Image, StyleSheet, View} from 'react-native';


const Header = () => {
    return (
        <View>
            <Image
                style={styles.container}
                source={require('../assets/BlogHeader.png')}                
            />
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      minHeight: 100,
      minWidth: 400
    },image: {
        flex: 1,
        justifyContent: 'center',
      },
});    