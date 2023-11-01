import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ArticleScreen = ({route}) => {

    const navigation = useNavigation();
    const { article } = route.params;
    const blogTimestamp = new Date(article.timestamp.seconds*1000);
    const formatedTime=blogTimestamp.toUTCString();    

    return (
        <View style={styles.container}>
            
            <Text style={styles.time}>{formatedTime}</Text>
            
            <Image 
                    style={styles.articleImage} 
                    source={article.image}
                />
            <Text style={styles.title}>{ article.title }</Text>
            <Text style={styles.body}>{ article.text }</Text>
            <Button
                onPress={() => navigation.navigate('Home')}
                style={styles.button}
                title='Back'
            />
        </View>
    );
}

export default ArticleScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      paddingTop: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    body: {
        fontSize: 18,
        paddingBottom: 15
    },
    articleImage: {
        height: 250,
        borderRadius: 5,
        marginBottom: 20,
    },
    button: {
        paddingHorizontal: 15,
        marginTop: 160
    },
    time: {
        paddingBottom: 15
    }
  });