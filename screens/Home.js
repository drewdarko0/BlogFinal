import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import ArticleList from "../components/ArticleList";
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../lib/firebase';
import Header from '../components/Header';
import Footer from "../components/Footer";
import { SafeAreaView } from "react-native-safe-area-context";


const blogRef = collection(db, 'blog');
const q = query(blogRef, orderBy('timestamp', 'desc'));
const querySnapshot = await getDocs(q);
const blogData = []; 
const image = { uri: "https://docs.expo.dev/static/images/tutorial/splash.png" };


querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    blogData.push(doc.data());
});


const HomeScreen = ({navigation}) => {
    
    return (
        <SafeAreaView>
            <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <Header />
                <ArticleList data={blogData} />
                <Footer />
            </ImageBackground>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen;


const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    }
  });