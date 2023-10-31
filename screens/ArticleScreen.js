import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ArticleScreen = ({route}) => {

    const { article } = route.params
    const blogTimestamp = new Date(article.timestamp.seconds*1000);
    const formatedTime=blogTimestamp.toString();    

    return (
        <View style={styles.container}>
            <Text>{formatedTime}</Text>
            <Image 
                    style={styles.articleImage} 
                    source={article.image}
                />
            <Text style={styles.title}>{ article.title }</Text>
            <Text style={styles.body}>{ article.text }</Text>
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
    },
    articleImage: {
        height: 250,
        borderRadius: 5,
        marginBottom: 20,
    }
  });