import React from "react";
import {  Dimensions, ImageBackground, StyleSheet, View } from "react-native";
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
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    blogData.push(doc.data());
});


const HomeScreen = ({navigation}) => {
    
    return (
        <SafeAreaView>
            <View>
                <ImageBackground 
                    source={require('../assets/blogbackground31.jpg')} 
                    style={styles.image}
                    blurRadius={1}
                >                    
                    <View style={styles.container}>                    
                        <Header style={styles.header} />
                        <ArticleList style={styles.list} data={blogData} />
                        <Footer />
                    </View>
                </ImageBackground>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        
    },
    list: {

    },
    header: {

    }
  });