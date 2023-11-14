import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { auth, db } from '../lib/firebase';
import { Input, Button } from '@rneui/themed';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { SafeAreaView } from "react-native-safe-area-context";

    
const AdminScreen = ({navigation}) => {

    const [ timestamp, setTimestamp ] = useState('');
    const [ img, setImage ] = useState('');
    const [ title, setTitle ] = useState('');
    const [ text, setText ] = useState('');

    const user = auth.currentUser;

    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }

    onAuthStateChanged(auth, (user) => {
        if (user) {
          //Logged in - stay here          
        } else {
          //not logged in
          navigation.navigate('Login');
        }
      })

    const createNewPost = async (img, title, text) => {
        await addDoc(collection(db, "blog"), {
            timestamp: Timestamp.now(),
            image: img,
            title: title,
            text: text
        }).then( (docRef) => {
            console.log('Adding doc' + JSON.stringify(docRef))
        }).catch ( (err) => {
            console.log('Error adding doc');
        }).finally( () => {
            console.log('Finally sent...');
        })
        setImage('');
        setTitle('');
        setText('');
        alert('New post created!');
    }

        
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text>ADMIN SCREEN</Text>
                <View style={styles.buttonGroup}>
                    <Button
                        onPress={() => navigation.navigate('Home')}
                        style={styles.homeButton}
                        title='Home'
                        color='#403e3f'
                    />
                    <Button 
                        onPress={() => logout()} 
                        style={styles.logoutButton} 
                        title="Sign Out"                
                        color='#403e3f'
                    />
                    <Button 
                        onPress={() => navigation.navigate('Register')} 
                        style={styles.registerButton} 
                        title="Register New User"                
                        color='#403e3f'
                    />
                </View>
                    <Input
                        placeholder={new Date().toLocaleDateString()}
                        label='Blog Timestamp'                        
                        autoCapitalize = 'none'
                        value={timestamp}
                        onChangeText={text => {
                                        if(text){
                                            setTimestamp(text)
                                        }else{
                                            setTimestamp(new Date())
                                        }
                                    }
                        }
                    />
                    <Input
                        placeholder='Enter an image URL'
                        label='Image URL'                        
                        autoCapitalize = 'none'
                        value={img}
                        onChangeText={text => setImage(text)}
                    />
                    <Input
                        placeholder='Enter title for post'
                        label='Blog Title'                        
                        autoCapitalize = 'none'
                        value={title}
                        onChangeText={text => setTitle(text)}
                    />
                    <Input
                        placeholder='Enter text content for post'
                        label='Blog Text'
                        multiline='true'
                        numberOfLines='4'
                        autoCapitalize = 'none'
                        value={text}
                        onChangeText={text => setText(text)}
                    />
                    <Button 
                        title="Submit"
                        style={styles.button} 
                        onPress={() => createNewPost(img, title, text)} 
                        color='#403e3f'
                    />
            </View>
        </SafeAreaView>    
    )
}

export default AdminScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    form: {
        flex: 1,
        margin: 0,
        padding: 0
    },
    button: {
        marginTop: 15,
        marginLeft: 8, 
        marginRight: 8, 
    },
    homeButton: {
        marginLeft: 8, 
        marginRight: 8, 
    },
    logoutButton: {
        marginLeft: 8, 
        marginRight: 8, 
    },
    registerButton: {
        marginLeft: 8, 
        marginRight: 8, 
    },
    buttonGroup: {
        flexDirection: 'row',
        margin: 15
    },    
  });