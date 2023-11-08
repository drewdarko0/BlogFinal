import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { auth, db } from '../lib/firebase';
import { Input, Button } from '@rneui/themed';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { SafeAreaView } from "react-native-safe-area-context";


const dbRef = await addDoc(collection(db, "blog"));

const data = {
    timestamp: {timestamp},
    image: {image},
    title: {title},
    text: {text}
};

const [ timestamp, setTimestamp ] = useState('');
const [ image, setImage ] = useState('');
const [ title, setTitle ] = useState('');
const [ text, setText ] = useState('');
    
    
const AdminScreen = ({navigation}) => {  

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

    createNewPost = () => {
        addDoc(dbRef, data)
        console.log(dbRef)
        console.log(data)
        .then(docRef => {
            console.log('Document added')
        })
        .catch(error => {
            console.log(error);
        })
    }

        
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text>This is the admin screen</Text>
                <View style={styles.buttonGroup}>
                    <Button
                        onPress={() => navigation.navigate('Home')}
                        style={styles.homeButton}
                        title='Home'
                        color='#075133'
                    />
                    <Button 
                        onPress={() => logout()} 
                        style={styles.logoutButton} 
                        title="Sign Out"                
                        color='#075133'
                    />
                    <Button 
                        onPress={() => navigation.navigate('Register')} 
                        style={styles.registerButton} 
                        title="Register New User"                
                        color='#075133'
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
                        value={image}
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
                        title="Sign In" 
                        style={styles.button} 
                        onPress={() => createNewPost()} 
                        color='#075133'
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
        justifyContent: 'center',
    },
    button: {
        marginTop: 15,
        marginLeft: 8, 
        marginRight: 8, 
    },
    buttonGroup: {
        flexDirection: 'row',
        display: 'flex',
        
    },
    form: {
        margin: 0,
        padding: 0
    }
  });