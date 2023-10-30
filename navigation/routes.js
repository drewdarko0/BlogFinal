import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
import AdminScreen from '../screens/Admin';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
        <StatusBar style="auto"/>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home"
                          component={HomeScreen}
                          options={{ title: 'Home'}}
            />
            <Stack.Screen name="Login"
                          component={LoginScreen}
                          options={{ title: 'Login'}}
            />
            <Stack.Screen name="Register"
                          component={RegisterScreen}
                          options={{ title: 'Register'}}
            />
            <Stack.Screen name="Admin"
                          component={AdminScreen}
                          options={{ title: 'Admin'}}
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;