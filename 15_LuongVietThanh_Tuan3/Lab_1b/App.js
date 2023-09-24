import * as React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, icon} from 'react-native';

export default function App() {
  return (
    
    <View style={styles.container}>
      <Image
        source={require('./assets/lock-152879 1.png')}
        style={styles.img}
      />
      <Text style={styles.txt1} >
        <h1> FORGET <br></br>
          PASSWORD
        </h1>
      </Text>
      <Text style={styles.txt2}>
        <p>Provide your account’s email for which you want to reset your password</p>
      </Text>

      <Image
        source={require('./assets/mail-2935365 1.png')}
        style={styles.icon}
        />
      <input style={styles.input} >
        
      </input>
      <View style={styles.containerbtn}>
        <button style={styles.btn}>
          NEXT
        </button>
      </View>
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
    marginTop: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 0,
    width: 105,
    height: 117,
    border: 15
  },
  icon: {
    color: 'red',
    Width: 48,
    Height: 45
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
    width: 305,
    height: 45,
    fontWeight: 1000,
    border: 'none',
    backgroundColor: '#E3C000',
  },

});

