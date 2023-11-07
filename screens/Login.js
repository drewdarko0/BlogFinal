import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { auth }  from '../lib/firebase';
import { Input, Button } from '@rneui/themed';
import Ionicons from '@expo/vector-icons/Ionicons';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { SafeAreaView } from "react-native-safe-area-context";


const LoginScreen = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
        console.log('login');
        
        onAuthStateChanged(auth, (user) => {
        if (user) {
            navigation.navigate('Admin');
        } else {
            //not logged in
        }
        })

        const login = (email, password, nav) => {

        //login to firebase
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log('SUCCESS:' + JSON.stringify(user));
            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            alert(errorMessage);
            });
        }
  
      return (
        <SafeAreaView>
            <View style={styles.anchor}>
                <View style={styles.container}>
                    <Text style={styles.heading}>This requires a registered user to use this part of the app.  Please login below.</Text>
                    <Input
                        placeholder='Enter your email'
                        label='Email'
                        leftIcon={
                            <Ionicons 
                                style={styles.mail}
                                name="mail" 
                                size={24} 
                                color="#075133" 
                            />
                        }
                        autoCapitalize = 'none'
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />
                    <Input
                        placeholder='Enter your password'
                        label='Password'
                        leftIcon={
                            <Ionicons 
                                style={styles.mail}
                                name="lock-closed" 
                                size={24} 
                                color="#075133" 
                            />
                        }
                        autoCapitalize = 'none'
                        value={password}
                        onChangeText={text => setPassword(text)}
                        secureTextEntry
                    />
                    <Button 
                        title="Sign In" 
                        style={styles.button} 
                        onPress={() => login(email, password, navigation)} 
                        color='#075133'
                    />
                    <Button
                        onPress={() => navigation.navigate('Home')}
                        style={styles.button}
                        title='Home'
                        color='#075133'
                    />                
                </View>
            </View>
        </SafeAreaView>                
      )
  }
  
  export default LoginScreen;
  
  const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      heading: {
        fontSize: 16,
        color: '#999',
        marginBottom: 40,         
        textAlign: 'center',
      },
      button: {
          width: 250,
          marginTop: 20,
          marginBottom: 20
      },
      link: {
        fontSize: 16,
        marginBottom: 15,
        color: '#666',
      },
    });