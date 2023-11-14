import React, { useState } from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input, Button } from '@rneui/themed';
import Ionicons from '@expo/vector-icons/Ionicons';
import { auth } from '../lib/firebase';
import { signOut, getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const RegisterScreen = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');

    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
        if (user) {
            navigation.navigate('Register');
        } else {
          //not logged in
            navigation.navigate('Login');
        }
      })

    const registration = (email, password1, password2, nav) => {

        if(password1 == password2){

            createUserWithEmailAndPassword(auth, email, password1)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                // ...
                setEmail('');
                setPassword1('');
                setPassword2('');
                alert('Registration Successful!');
                signOut(auth);
                navigation.navigate('Login');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.log(errorCode);
                alert(errorMessage);
            });            
        }else{
            alert('Both password fields must match to verify password')
        }
        
    }

    
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.heading}>Please enter your email and password below.</Text>
                <Input
                    placeholder='Enter your email'
                    label='Email'
                    leftIcon={
                        <Ionicons 
                            style={styles.mail}
                            name="mail" 
                            size={24} 
                            color="#403e3f" 
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
                            color="#403e3f" 
                        />
                    }
                    autoCapitalize = 'none'
                    value={password1}
                    onChangeText={text => setPassword1(text)}
                    secureTextEntry
                />
                <Input
                    placeholder='Verify your password'
                    label='Verify Password'
                    leftIcon={
                        <Ionicons 
                            style={styles.mail}
                            name="lock-closed" 
                            size={24} 
                            color="#403e3f" 
                        />
                    }
                    autoCapitalize = 'none'
                    value={password2}
                    onChangeText={text => setPassword2(text)}
                    secureTextEntry
                />
                <Button 
                    title="Register" 
                    style={styles.button} 
                    onPress={() => registration(email, password1, password2, navigation)}
                    color='#403e3f' 
                />

                <Pressable
                    onPress={event => navigation.navigate('Admin')}
                    style={({pressed}) => [
                        {
                            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
                        },
                        styles.pressableadmin,
                ]}>
                    {({pressed}) => (
                        <Ionicons 
                            style={styles.admin}
                            name="shield" 
                            size={64} 
                            color="#403e3f" 
                        />
                    )}
                </Pressable>                    
            </View>
        </SafeAreaView>
    )
}

export default RegisterScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 15
    },
    button: {
        paddingTop: 30,
    },
    admin: {
        paddingTop: 30,
    }
  });