import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    width: '100%',
    height: '200%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex:1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    marginTop: 24
  },
  icon: {
    position: 'absolute',
    top: 100,
    left: 92,
    width: 180,
    height: 180,
    zIndex: 1,
    },
  text:{
    position: 'absolute',
    top: 300,
    left: 110,
    fontSize:32,
    color:'white',
    fontWeight:600,
  }
});
