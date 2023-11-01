import React from "react";
import { StyleSheet, View } from "react-native";
import ArticleList from "../components/ArticleList";
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../lib/firebase';
import Header from '../components/Header';
import Footer from "../components/Footer";


const blogRef = collection(db, 'blog');
const q = query(blogRef, orderBy('timestamp', 'desc'));
const querySnapshot = await getDocs(q);
const blogData = []; 


querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    blogData.push(doc.data());
});


const HomeScreen = ({navigation}) => {
    
    return (
        
        <View style={styles.container}>
            <Header />
            <ArticleList data={blogData} />
            <Footer />
        </View>
        
    )
}

export default HomeScreen;


const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });