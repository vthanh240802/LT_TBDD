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
      <View style={styles.txtContainer}>
      <Text style={styles.txt1}>GROW</Text>
      <Text style={styles.txt2}>YOUR BUSINESS</Text>
      <Text style={styles.txt3}>
        <p>We will help you to grow your business using online server</p>
      </Text>
      </View>
      <View style={styles.btnContainer}>
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
    backgroundImage: 'linear-gradient(180deg, #C7F4F7 0.03%, #D1F4F6 30.21%, #E5F4F5 85.42%, #00CCF9 100%)',
 //   alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: '140px',
    height: '140px',
    marginTop: '10px',
    marginLeft: '120px',
    marginRight: '110px',
    marginBottom: 0
  },
  txtContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  txt1: {
    fontSize: '30px',
    fontWeight: 'bold',
    marginTop: '50px',
    marginBottom: 0
  },
  txt2: {
    fontSize: '30px',
    fontWeight: 'bold',
    marginBottom: 0
  },
  txt3: {
    fontSize: '15px',
    fontWeight: 'bold',
    marginTop: '30px',
    textAlign:'center',
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btn: {
    marginTop: '20px',
    width: '119px',
    height: '48px',
    borderRadius: '5px',
    border:"none",
    backgroundColor: '#e3c000',
    fontWeight: 'bold',
    fontSize: '18px'
  }


});

