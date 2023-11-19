import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import Card from "./Card";


const renderCard = ({item}) => {
    return (
        <Card item={item} />
    );
}


const ArticleList = ({data}) => {
    
    if (data != null)
    {                  
        return (            
            <FlatList
                style={styles.container}
                data={data}
                renderItem={renderCard}
                keyExtractor={item => item.timestamp}
                ItemSeparatorComponent={ () => {
                    return (
                        <View style={styles.separator} />
                    )
                }}
            />
        )    
        } else {
            return (
                <View>
                    <Text>Loading Posts...</Text>
                </View>
            )
        }
    }

export default ArticleList;

const styles = StyleSheet.create({
    container: {
        
    },
    list: {
        paddingHorizontal: 17,
        backgroundColor: "#eeeeee",
    },
    header: {
        marginTop: 20,
    },
    title: {
        fontSize: 38,
        color: "#000",
        marginBottom: 20,
    },
    separator: {
        marginTop: 10,
    },
});