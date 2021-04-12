import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';
const { width: WIDTH } = Dimensions.get('window');

export default StyleSheet.create({
  //login screen
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 15,
    backgroundColor: 'midnightblue',
  },
  paragraph: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  p2: {
    fontSize: 12,
    textAlign: 'center',
    color: 'white',
    marginBottom: 20,
  },
  logo: {
    height: 150,
    width: 150,
  },
  inputLogin: {
    width: WIDTH / 2,
    height: 30,
    borderRadius: 25,
    placeholderTextColor: 'lightgrey',
    color: 'lightgrey',
    textAlign: 'center',
    backgroundColor: 'mediumturquoise',
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
    backgroundColor: 'blue',
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
    borderBottomColor: 'midnightblue',
  },
  itemText: {
    paddingLeft: 25,
    borderLeftWidth: 10,
    borderLeftColor: 'midnightblue',
  },
  deleteItem: {
    position: 'absolute',
    alingItems: 'center',
    padding: 10,
    top: 45,
    right: 10,
    color: 'snow',
    borderRadius: 25,
    backgroundColor: 'red',
  },
  //headers
  header: {
    backgroundColor: 'midnightblue',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },
  headerText: {
    width: WIDTH,
    color: 'snow',
    textAlign: 'center',
    padding: 15,
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    borderBottomWidth: 2,
    borderBottomColor: 'midnightblue',
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
    backgroundColor: 'darkcyan',
  },
});
