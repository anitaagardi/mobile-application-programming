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
    backgroundColor: 'rgb(29,36,51)',
  },
  cointainerLogin: {
    alignItems: 'center',
    marginBottom: 10,
  },
  darkBackground: {
    backgroundColor: 'rgb(29,36,51)',
  },
  paragraph: {
    fontSize: 18,
    color: 'rgb(185,255,125)',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
  },
  paragraphMargin: {
    fontSize: 18,
    color: 'rgb(185,255,125)',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 25,
    marginBottom: 25,
  },
  simpleText: {    
    color: 'rgb(185,255,125)',
  },
  logo: {
    height: 64,
    width: 64,
  },
  logoMargin: {
    height: 64,
    width: 64,
    marginTop: 25,
    marginLeft: 25
  },
  inputLogin: {
    width: WIDTH / 2,
    height: 30,
    borderRadius: 25,
    placeholderTextColor: 'lightgrey',
    color: 'lightgrey',
    textAlign: 'center',
    backgroundColor: 'cadetblue',
    margin: 1,
  },
  inputIcons: {
    position: 'absolute',
    top: 6,
    left: 6,
    color: 'darkcyan',
  },
  buttonLogin: {
    width: WIDTH / 2,
    height: 30,
    borderRadius: 25,
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(145,125,75)',
    color: 'lightgrey',
    marginTop: 10,
  },
  buttonText: {
    color: 'lightgrey',
    fontWeight: 'bold',
    textAlign: 'center',
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
    color: 'rgb(185,255,125)',
  },
  deleteItem: {
    position: 'absolute',
    alingItems: 'center',
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10,
    color: 'snow',
  },
  //headers
  header: {
    backgroundColor: 'darkcyan',
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
    backgroundColor: 'rgb(29,36,51)',
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
    backgroundColor: 'rgb(29,36,51)'
  },
  flexContainerEvent: {
    backgroundColor: 'rgb(29,36,51)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});