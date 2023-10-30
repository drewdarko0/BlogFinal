import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { auth } from '../lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import LoginScreen from "./Login";

const RegisterScreen = ({navigation}) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Check if authenticated
    onAuthStateChanged(auth, (user) => {
        console.log(user);
        if (user) {
        // View screen if authenticated
        setIsAuthenticated(true);
        } else {
        // View SignIn if not
        setIsAuthenticated(false);
        }
    })
    
    return (
        <View style={styles.container}>
            <Text>This is the registration screen</Text>
            { isAuthenticated ? <RegisterScreen /> : <LoginScreen /> }
        </View>
    )
}

export default RegisterScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });