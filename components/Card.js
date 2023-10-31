import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';

const Card = ({item}) => {

    const navigation = useNavigation();
    const timestamp = item.timestamp;
    const blogTimestamp = new Date(timestamp.seconds*1000);
    const formatedTime=blogTimestamp.toString();

    return (       
        
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

    )
}

export default Card;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
    },
    card: {
        borderWidth: 0,
        minHeight: 300,
        shadowColor: '#000000',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        marginVertical: 12,
        marginTop: 0,
        backgroundColor: '#FFFFFF',
        marginRight: 0,
        alignSelf: "stretch",
        elevation: 4,
        minWidth: 300
    },
    cardImage: {
        flex: 1,
        borderRadius: 3,
        height: 600
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
        fontSize: 35,
        textAlign: 'center',
    },
    description: {
        fontSize: 20
    },
});