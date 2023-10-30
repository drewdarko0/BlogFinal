import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { auth } from '../lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';

const LoginScreen = ({navigation}) => {

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
            <Text>This is the log in screen</Text>
            { isAuthenticated ? <AdminScreen /> : <LoginScreen /> }
        </View>
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
  });