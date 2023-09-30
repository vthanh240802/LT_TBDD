import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native';
import { StyleSheet, Text, View, Input } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.txtContainer}>
        <Text style={styles.txt1}>
          CODE
        </Text>
        <Text style={styles.txt2}>
          VERIFICATION
        </Text>
        <Text style={styles.txt3}>
          Enter ontime password sent on ++849092605798
        </Text>
      </View>
      <View style = {styles.inputContainer}>
        <input style={styles.input} ></input>
        <input style={styles.input} ></input>
        <input style={styles.input} ></input>
        <input style={styles.input} ></input>
        <input style={styles.input} ></input>
        <input style={styles.input} ></input>
      </View>
      <View style = {styles.btnContainer}>
        <input type='submit' value='VERIFY CODE' style={styles.btn}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: 'linear-gradient(180deg, #C7F4F7 0.03%, #D1F4F6 30.21%, #E5F4F5 85.42%, #00CCF9 100%)',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  txtContainer: {
    display:'flex',
    alignItems: 'center',
  },
  txt1: {
    fontWeight: 'bold',
    fontSize: 70,
    marginTop: '113px',
    marginBottom: 0,
    textAlign: 'center',
  },
  txt2: {
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: '50px',
    marginBottom: 0,
    textAlign: 'center',
  },
  txt3: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: '50px',
    textAlign: 'center'

  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row'

  },
  input: {
    marginTop: 40,
    width: '50px',
    height: '50px',
  },
  btnContainer: {
    display: 'flex',
  },
  btn: {
    marginTop: '40px',
    width: 339,
    height: 50,
    border: 'none',
    fontWeight: 'bold',
    fontSize: '20px',
    backgroundColor: '#E3C000'
  }
});
