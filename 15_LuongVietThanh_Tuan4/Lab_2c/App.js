import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { TextInput } from 'react-native';
import { View, StyleSheet, Text} from 'react-native';
//import { Checkbox } from 'react-native-paper';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.txtHeader}>PASSWORD GENERATOR</Text>
        <TextInput style={styles.input1} ></TextInput>
        <View style={styles.content}>
        <Text style={styles.txtContent}>Password length</Text>  
        <TextInput style={styles.input2}></TextInput>
        </View>
      </View>
    </View>
  );
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundImage: 'radial-gradient(145% 145% at 50% 50%, #3B3B98 26.56%, rgba(196, 196, 196, 0) 87.36%)',
  },
  container1: {
    flex: 1,
    alignItems: 'center',
    marginTop: '20px',
    marginBottom: '20px',
    width: '330px',
    height: '620px',
    backgroundColor: '#23235B',
    borderRadius: '10px'
  },
  txtHeader: {
    color: '#FFFFFF',
    fontSize: '30px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '40px'
  },
  input1: {
    marginTop: '20px',
    border: 'none',
    width: '297px',
    height: '55px',
    backgroundColor: '#151537'
  },
  content: {
    flexDirection: 'row', 
    marginTop: '30px'
  },
  txtContent: {
    color: '#FFFFFF',
    fontSize: '18px',
    fontWeight: 'bold',

  },
  input2: {
    marginLeft: '30px',
    border: 'none',
    width: '118px',
    height: '33px',
    backgroundColor: '#FFFF',
    flexDirection: 'row'
  }
});
