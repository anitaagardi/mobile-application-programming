import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';
const { width: WIDTH } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#FF6666',
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
  },
  logo: {
    height: 150,
    width: 150,
  },

  logoList: {
    height: 40,
    width: 40,  
    position: 'absolute',
    top: 5,
    right: 15,
  },

  inputLogin: {
    width: WIDTH / 2,
    height: 30,
    borderRadius: 25,
    placeholderTextColor: 'white',
    textAlign: 'center',
    margin: 1,
  },
  inputIcons: {
    position: 'absolute',
    top: 6,
    left: 6,
    color: 'white',
  },
  buttonLogin: {
    width: WIDTH / 2,
    height: 30,
    borderRadius: 25,
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

buttonS: {
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 5,
    fontSize: 20,
    height: 40,
    backgroundColor: '#990000',
  },

  //items
  items: {
    position: 'relative',
    padding: 10,
    paddingright: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'red',
  },
  itemText: {
    paddingLeft: 25,
    borderLeftWidth: 10,
    borderLeftColor: 'red',
  },
  deleteItem: {
   position: 'absolute',
    alingItems: 'center',
    color: 'white',
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10,
  },
  header: {
    backgroundColor: 'red'
  },
  headerText: {
    width: WIDTH,
    color: 'white',
    padding: 15,
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollContainer: {
    backgroundColor: '#FF6666',
    borderBottomWidth: 2
  },
  
  textInput: {
    width: '100%',
    padding: 5,
    backgroundColor: '#FF6666'
  },
  flexItemContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  flexContainer: {
    backgroundColor: 'FF6666',
  },
});
