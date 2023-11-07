import React, { useState } from "react";
import { Button, StyleSheet, View, Text } from "react-native";
import { auth } from '../lib/firebase';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import LoginScreen from "./Login";
import { SafeAreaView } from "react-native-safe-area-context";


const AdminScreen = ({navigation}) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

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

    const register = () => {
        console.log('registering');
        navigation.navigate('Register');
        setEmail('');
        setPassword('');
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
        marginTop: "50%"
    },
    button: {
        marginTop: 15,
        marginLeft: 8, 
        marginRight: 8, 
    },
    buttonGroup: {
        flexDirection: 'row',
        display: 'flex',
        
    }
  });