import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import LoginButton from '../../src/components/LoginButton';
import CoverPicture from '../../src/components/CoverPicture';
import EmailInput from '../../src/components/EmailInput';
import PasswordInput from '../../src/components/PasswordInput';
import styles from './styles';

const LoginScreen = ()=>{
    return (
<View style={styles.container}>
<CoverPicture />
<EmailInput />
<PasswordInput />
<View>
  <LoginButton 
    title='Log in'
    onPress={() => alert('Button clicked!')}/>
</View>
<StatusBar style="auto" />
</View>)
}
export default LoginScreen;