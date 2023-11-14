import React from 'react';
import { Dimensions, Pressable, StyleSheet, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";



const Footer = () => {

    const navigation = useNavigation();
    
    return (
        
        <View style={styles.container}>
            <Pressable
                onPress={event => window.location.href='https://github.com/drewdarko0'}
                style={({pressed}) => [
                    {
                        backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
                    },
                    styles.pressablegithub,
            ]}>
            {({pressed}) => (
                <Ionicons 
                    style={styles.github}
                    name="logo-github" 
                    size={32} 
                    color="#403e3f" 
                />
            )}
            </Pressable>

            <Pressable
                onPress={event => window.location.href='https://www.linkedin.com/in/andrew-larson-0bb59b218/'}
                style={({pressed}) => [
                    {
                        backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
                    },
                    styles.pressablelinkedin,
            ]}>
            {({pressed}) => (
                <Ionicons 
                    style={styles.linkedin}
                    name="logo-linkedin" 
                    size={32} 
                    color="#403e3f" 
                />
            )}
            </Pressable>
            
            <Pressable
                onPress={event => window.location.href='mailto:drewlars83@gmail.com'}
                style={({pressed}) => [
                    {
                        backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
                    },
                    styles.pressablemail,
            ]}>
            {({pressed}) => (
                <Ionicons 
                    style={styles.mail}
                    name="mail" 
                    size={32} 
                    color="#403e3f" 
                />
            )}
            </Pressable>
            
            <Pressable
                onPress={event => navigation.navigate('Admin')}
                style={({pressed}) => [
                    {
                        backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
                    },
                    styles.pressableadmin,
            ]}>
            {({pressed}) => (
                <Ionicons 
                    style={styles.admin}
                    name="shield" 
                    size={32} 
                    color="#403e3f" 
                />
            )}
            </Pressable>
            
        </View>
    )
}

export default Footer;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex', 
      flexDirection: 'row', 
      justifyContent: 'center', 
      alignItems: 'center',
      backgroundColor: '#efefef',
      borderWidth: 0,
        shadowColor: '#000000',
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowOpacity: 0.7,
        shadowRadius: 4,
        alignSelf: "stretch",
        elevation: 7,        
    },
    github: {
        marginLeft: 15, 
        marginRight: 15, 
    },
    pressablegithub: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    linkedin: {
        marginLeft: 15, 
        marginRight: 15, 
    },
    pressablelinkedin: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    mail: {
        marginLeft: 15, 
        marginRight: 15, 
    },
    pressablemail: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    admin: {
        marginLeft: 15, 
        marginRight: 15, 
    },
    pressableadmin: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
    }
});