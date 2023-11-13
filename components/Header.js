import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Header = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../assets/BlogHeader-removebg-preview.png')}                
            />
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    container: {   
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        height: windowHeight * 0.25,
        width: windowWidth * 0.8,
        aspectRatio: 1,
        maxWidth: 415,        
        backgroundColor: 'rgba(0, 0, 0, 0)',
    },
});    