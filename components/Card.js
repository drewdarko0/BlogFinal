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
        <Pressable
        style={styles.button}
        onPress={ () => { navigation.navigate('Article', { article: item }) }}
        >
            <View style={styles.card}>
                <Text style={styles.timeStamp}>{new Date(item.timestamp.seconds*1000).toLocaleDateString()}</Text>
                <Image 
                    style={styles.cardImage} 
                    source={item.image}
                />
                <View style={styles.cardContent}>
                    <View style={styles.cardHeader}>                        
                        <Text style={styles.title}>{item.title}</Text>
                    </View>                    
                </View>
            </View>
        </Pressable>
    )
}

export default Card;

const styles = StyleSheet.create({    
    card: {
        borderWidth: 0,
        shadowColor: '#000000',
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowOpacity: 0.7,
        shadowRadius: 4,
        margin: 12,
        backgroundColor: '#efefef',
        alignSelf: "stretch",
        elevation: 7,
        width: windowWidth * 0.7,
        aspectRatio: 1
    },
    cardImage: {
        flex: '1',
        borderRadius: 3,
        marginHorizontal: 15,
    },
    cardContent: {
        paddingVertical: 15,
        paddingHorizontal: 15
    },
    cardHeader: {
        paddingBottom: 5
    },
    timeStamp: {
        textAlign: 'center',
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        fontFamily: 'PermanentMarker-Regular'
    },
    description: {
        fontSize: 25
    },
});