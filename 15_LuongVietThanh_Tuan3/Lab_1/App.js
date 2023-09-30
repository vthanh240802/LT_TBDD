import * as React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/Ellipse 8.png')}
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
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
 //   backgroundColor: 'rgba(0, 204, 249, 0.58)',
    backgroundImage: 'linear-gradient(180deg, #C7F4F7 0.03%, #D1F4F6 30.21%, #E5F4F5 85.42%, #00CCF9 100%)',
    justifyContent: 'center',
  },
  img: {
    marginTop: 105,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 0,
    width: 140,
    height: 140,
    border: 15
  },
  txt1: {
    marginTop: 52,
    marginBottom: 0,
    textAlign: 'center',

  },
  txt2: {
    marginTop: 20,
    marginBottom: 50,
    fontWeight: 800,
    fontSize: 16,
    textAlign: 'center'
  },
  containerbtn: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    
  },
  btn: {
    width: 119,
    height: 48,
    fontWeight: 1000,
    border: 'none',
    borderRadius: 10,
    backgroundColor: '#E3C000',
  }

});

