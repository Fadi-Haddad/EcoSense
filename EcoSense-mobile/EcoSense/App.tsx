import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import LoginButton from './src/components/LoginButton';
import CoverPicture from './src/components/CoverPicture';
import EmailInput from './src/components/EmailInput';
import PasswordInput from './src/components/PasswordInput';
import LoginScreen from './screens/login';


export default function App() {
  return (
    <LoginScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F4EEF2',
    alignItems: 'center',
    paddingTop:12,
  },
});
