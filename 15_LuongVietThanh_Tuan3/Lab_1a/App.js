import * as React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (
    
    <View style={styles.container}>
      <Image
        source={require('./assets/Ellipse 1circle.svg')}
        style={styles.img}
      />
      <Text style={styles.txt1} >
        <h1> GROW <br></br>
          YOUR BUSINESS
        </h1>
      </Text>
      <Text style={styles.txt2}>
        <p>We will help you to grow your business using online server</p>
      </Text>
      <View style={styles.containerbtn}>
        <button style={styles.btn}>
          LOGIN
        </button>
        <button style={styles.btn}>
          SIGN UP
        </button>
      </View>
      <Text style={styles.txt3} >
        <h1>
          HOW WE WORK?
        </h1>
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 204, 249, 0.58)',
    justifyContent: 'center',
  },
  img: {
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 0,
    width: 140,
    height: 140,
    border: 15
  },
  txt1: {
    marginTop: 42,
    marginBottom: 0,
    textAlign: 'center',

  },
  txt2: {
    display: 'flex',
    marginTop: 10,
    marginBottom: 50,
    fontWeight: 800,
    fontSize: 16,
    textAlign: 'center'
  },
  containerbtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    marginBottom: 0
  },
  btn: {
    width: 119,
    height: 48,
    fontWeight: 1000,
    border: 'none',
    backgroundColor: '#E3C000',
  },
  txt3: {
    marginTop: 0,
    textAlign: 'center',
    Weight: 700,
    Size: 1,
   
  }

});

