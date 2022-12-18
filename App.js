import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Nav from './Companent/Nav'
import Menu from './Companent/Menu'
export default function App() {
  return <>
    <Nav></Nav>
    <Menu></Menu>
  </>
  
  ;
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
