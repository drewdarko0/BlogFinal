import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import ArticleList from "../components/ArticleList";
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../lib/firebase';
import Header from '../components/Header';


const blogRef = collection(db, 'blog');
const q = query(blogRef, orderBy('id'));
const querySnapshot = await getDocs(q);
const blogData = []; 


querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    blogData.push(doc.data());
});


const HomeScreen = ({navigation}) => {
    
    return (
        
        <View style={styles.container}>
            <Header />
            <ArticleList data={blogData} />
        </View>
        
    )
}

export default HomeScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });