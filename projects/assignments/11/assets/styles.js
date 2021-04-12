import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';
const { width: WIDTH } = Dimensions.get('window');

export default StyleSheet.create({
  //login screen
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'black',
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
    color: 'white',
  },
  logo: {
    height: 64,
    width: 64,
  },

  textColor: {
    color: 'white',
  },
  inputLogin: {
    width: WIDTH / 2,
    height: 30,
    borderRadius: 25,
    placeholderTextColor: 'lightgrey',
    color: 'lightgrey',
    textAlign: 'center',
    backgroundColor: 'brown',
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
    backgroundColor: 'black',
    color: 'lightgrey',
    marginTop: 10,
  },
  buttonText: {
    color: 'lightgrey',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  buttonBackground: {
    backgroundColor: 'brown'
  },
  
  //items
  items: {
    position: 'relative',
    padding: 10,
    paddingright: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'grey',
  },
  itemText: {
    paddingLeft: 25,
    borderLeftWidth: 10,
    borderLeftColor: 'grey',
  },
  deleteItem: {
    position: 'absolute',
    alingItems: 'center',
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10,
    color: 'black',
  },
  //headers
  header: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },
  headerText: {
    width: WIDTH,
    color: 'snow',
    padding: 15,
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },
  footer: {
    bottom: 0,
    left: 0,
    right: 0,
  },
  textInput: {
    width: '50%',
    padding: 5,
    backgroundColor: 'whitesmoke',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  flexItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexContainer: {
    flex: 1,
    backgroundColor: 'brown',
  },
});
