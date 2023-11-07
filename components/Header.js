import React from 'react';
import {Image, StyleSheet, View} from 'react-native';


const Header = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../assets/BlogHeader.png')}                
            />
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    container: {
      
        minHeight: 90,
        minWidth: 390,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 15
    },
});    