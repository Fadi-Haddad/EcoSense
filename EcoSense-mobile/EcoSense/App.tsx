import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import LoginButton from './src/components/LoginButton';


export default function App() {
  return (
    <View style={styles.container}>
    <Image source={require('./assets/background.png')} style={{width: 100, height:100}}/>
      <LoginButton 
      title='Log in'
      onPress={() => alert('Button clicked!')}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
