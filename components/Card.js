import { useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const windowWidth = Dimensions.get("window").width;

const Card = ({item}) => {

    const navigation = useNavigation();
    
    const [fontsLoaded] = useFonts({
        'PermanentMarker-Regular': require('../assets/fonts/PermanentMarker-Regular.ttf'),
      });
    
      const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
      }, [fontsLoaded]);
    
      if (!fontsLoaded) {
        return null;
      }

    return (       
        <View style={styles.container}>            
            <Pressable
                style={styles.button}
                onPress={ () => { navigation.navigate('Article', { article: item }) }}
            >
                <View style={styles.card}>                    
                    <Image 
                        style={styles.cardImage} 
                        source={item.image}
                    />
                    <View style={styles.cardContent}>
                        <View style={styles.cardHeader}>                                    
                            <Text style={styles.title}>{new Date(item.timestamp.seconds*1000).toLocaleDateString()} - {item.title}</Text>
                        </View>                    
                    </View>
                </View>            
            </Pressable>
        </View>
    )
}

export default Card;

const styles = StyleSheet.create({   
    container: {
        width: '100%'
    },
    card: {
        borderWidth: 0,
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 7,
        margin: 12,
        backgroundColor: '#efefef',
        alignSelf: "stretch",        
        width: windowWidth * 0.8,
        aspectRatio: 1,
        maxHeight: 700,
        maxWidth: 700
    },
    cardImage: {
        flex: '1',
        borderRadius: 3,
        marginHorizontal: 15,
        marginTop: 15,
        borderWidth: 0,
    },
    cardContent: {
        paddingVertical: 15,
        paddingHorizontal: 15
    },
    cardHeader: {
        paddingBottom: 5
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'PermanentMarker-Regular'
    },
    description: {
        fontSize: 25
    },
});