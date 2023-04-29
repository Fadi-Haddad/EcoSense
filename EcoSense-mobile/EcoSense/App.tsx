import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import LoginButton from './src/components/LoginButton';
import CoverPicture from './src/components/coverPicture';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function App() {
  return (
    <View style={styles.container}>
       <CoverPicture />
      <View>
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
    paddingTop:12,
  },
});

