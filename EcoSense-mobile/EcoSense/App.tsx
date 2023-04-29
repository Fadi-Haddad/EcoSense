import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
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
      <View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#ccc',paddingBottom:5, marginBottom:25}}>
      <MaterialIcons name='alternate-email' size={20} color="#666" style={{marginRight:5}}/>
      <TextInput placeholder='Email' style={{ flex:1,}}/>
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

