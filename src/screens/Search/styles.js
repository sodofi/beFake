import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'column',
    //justifyContent: 'space-between',
  },
  text: {
    flex: 1,
    paddingLeft: 10,
    fontSize: 15,
    fontWeight: '600'
  },
  textInput: {
    marginVertical: 20,
    marginHorizontal: 10,
    padding: 10,
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: '#1c1c1e',
    flexDirection: 'row',
  }
});

export default styles;