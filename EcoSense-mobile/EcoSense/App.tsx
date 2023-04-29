import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import LoginButton from './src/components/LoginButton';

export default function App() {
  return (
    <View style={styles.container}>
       <CoverPicture />
      <View style={styles.buttonContainer}>
        <LoginButton 
          title='Log in'
          onPress={() => alert('Button clicked!')}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // marginBottom:200,
  },

  buttonContainer: {
    // marginTop:100,
  },
});

