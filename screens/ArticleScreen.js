import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { Button } from '@rneui/themed';
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../lib/firebase';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ArticleScreen = ({route}) => {

    const navigation = useNavigation();
    const { article } = route.params;     
    
    onAuthStateChanged(auth, (user) => {
        if (user) {
          //Logged in - stay here   
          return (
            <View>
                <Button
                    onPress={() => navigation.navigate('Home')}
                    style={styles.button}
                    title='Back'
                    color='#403e3f'
                />
            </View>    
          )       
        } else {
          //not logged in
          
        }
      })

    return (
        <SafeAreaView>
            <View style={styles.container}>                
                <Text style={styles.time}>{new Date(article.timestamp.seconds*1000).toUTCString()}</Text>                
                <Image 
                        style={styles.articleImage} 
                        source={article.image}
                        resizeMode="contain"
                    />
                <Text style={styles.title}>{ article.title }</Text>
                <Text style={styles.body}>{ article.text }</Text>
                <Button
                    onPress={() => navigation.navigate('Home')}
                    style={styles.button}
                    title='Back'
                    color='#403e3f'
                />
            </View>
        </SafeAreaView>
    );
}

export default ArticleScreen;

const styles = StyleSheet.create({
    container: {    
        flex: '1',    
        padding: 10,
        paddingTop: 20,
        justifyContent: "center",
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
    },
    body: {
        fontSize: 18,
        paddingBottom: 15,
    },
    articleImage: {
        borderRadius: 5,
        height: windowHeight * 0.65,
        aspectRatio: 1
    },
    button: {
        marginTop: 20,
        marginBottom: 20,
        width: 250,        
    },
    time: {
        paddingBottom: 15
    }
});