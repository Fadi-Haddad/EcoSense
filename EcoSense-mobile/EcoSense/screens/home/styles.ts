import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    marginTop: 50,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft:8,
    paddingRight:8,
  },
  cell: {
    flex: 1,
    margin: 5,
  },
  details: {
    alignSelf:'flex-end',
    marginRight: '5%',
    fontWeight:'bold',
    marginBottom: '3%',
  },
  });

  export default styles;
