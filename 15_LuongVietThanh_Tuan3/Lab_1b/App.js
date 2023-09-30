import * as React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, icon} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';


export default function App() {
  return (
    
    <View style={styles.container}>
      <Image
        source={require('./assets/lock-152879 1.png')}
        style={styles.img}
      />
      <View style={styles.txtContainer}>
      <Text style={styles.txt1} >FORGET</Text>
      <Text style={styles.txt2} >PASSWORD</Text>
      <Text style={styles.txt3}>
        Provide your account’s email for which you want to reset your password
      </Text>
      </View>

      <View style={styles.inputContainer}>
        <input type="email" placeholder="Email" style={styles.inputEmail}></input>
        <Icon name="email" color="#000" size={30} style={styles.icon} />
      </View>
      <input type="submit" value="NEXT" style={styles.btnSubmit}></input>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: 'linear-gradient(180deg, #C7F4F7 0.03%, #D1F4F6 30.21%, #E5F4F5 85.42%, #00CCF9 100%)',
    alignItems: 'center',
  },
  img: {
    marginTop: '60px',
    width: '105px',
    height: '117px'
  },
  txtContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  txt1: {
    marginTop: '30px',
    fontSize: '30px',
    fontWeight: 'bold'
  },
  txt2: {
    fontSize: '30px',
    fontWeight: 'bold'
  },
  txt3: {
    marginTop: '20px',
    textAlign: 'center',
    fontSize: '13px',
    fontWeight: 'bold'
  },
  inputContainer: {
    display: 'flex',
    position: 'relative',
  },
  inputEmail: {
    width: '300px',
    height: '25px',
    border: 'none',
    marginTop: '30px',
    paddingTop: '10px',
    paddingBottom: '10px',
    paddingLeft: '50px',
    backgroundColor: '#c4c4c4'
  },
  icon: {
    position: 'absolute',
    top: '37px',
    left: '10px'
  },
  btnSubmit: {
    backgroundColor: '#e3c000',
    border: 'none',
    width: '351px',
    height: '45px',
    marginTop: '30px',
    padding: '10px',
    fontSize: '20px',
    fontWeight: 'bold',

  }




});

