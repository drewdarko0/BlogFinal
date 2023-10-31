import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Card = ({item}) => {

    const navigation = useNavigation();
    const blogTimestamp = new Date(item.timestamp.seconds*1000);
    const formatedTime=blogTimestamp.toString();

    return (       
        <TouchableOpacity
        style={styles.button}
        onPress={ () => { navigation.navigate('Article', { article: item }) }}
        >
            <View style={styles.card}>
                <Text style={styles.timeStamp}>{formatedTime}</Text>
                <Image 
                    style={styles.cardImage} 
                    source={item.image}
                />
                <View style={styles.cardContent}>
                    <View style={styles.cardHeader}>
                        
                        <Text style={styles.title}>{item.title}</Text>
                    </View>
                    <View style={styles.description}>
                        <Text>{item.text}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Card;

const styles = StyleSheet.create({    
    card: {
        borderWidth: 0,
        minHeight: 500,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        margin: 12,
        backgroundColor: '#FFFFFF',
        alignSelf: "stretch",
        elevation: 7,
        minWidth: 300
    },
    cardImage: {
        flex: '1',
        borderRadius: 3,
        marginHorizontal: 15
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
    },
    description: {
        fontSize: 25
    },
});