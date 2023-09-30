import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.txtHeader}>
        LOGIN
      </Text>
      <View style={styles.inputContainer}>
        <input type="text" placeholder="Email" style={styles.input1}></input>
        <input type="text" placeholder="Password" style={styles.input2}></input>
        <Icon name="eye" color="#000" size={30} style={styles.icon} />
      </View>
      <View style={styles.btnContainer}>
        <input type="submit" value="LOGIN" style={styles.btn}></input>
      </View>
      <View style={styles.txtBottom}>
        <Text style={styles.txt1}>
          When you agree to terms and conditions
        </Text>
        <Text style={styles.txt2}>
          For got your password?
        </Text>
        <Text style={styles.txt3}>
          Or login with
        </Text>
      </View>
      <View style={styles.imgContainer}>
        <Image
        source={require('./assets/icofacebook-1924510 1.png')}
        style={styles.imgFB}
        />
        <Image
        source={require('./assets/icozalo.png')}
        style={styles.imgZL}
        />
         <Image
        source={require('./assets/icogoogle 1.png')}
        style={styles.imgGG}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d8efde',
    alignItems: 'center',
  },
  txtHeader: {
    textAlign: 'center',
    fontSize: '30px',
    fontWeight: 'bold',
    marginTop: '40px',
    marginBottom: 0

  },
  inputContainer: {
    display: 'flex',
    position: 'relative',
  },
  input1: {
    marginTop: '50px',
    width: '330px',
    height: '25px',
    padding: '10px',
    border: 'none'
  },
  input2: {
    marginTop: '20px',
    width: '330px',
    height: '25px',
    padding: '10px',
    border: 'none'
  },
  icon: {
    position: 'absolute',
    right: '15px',
    bottom: '8px'
  },
  btnContainer: { 
    display:'flex'
  },
  btn: {
    width: '350px',
    height: '45px',
    marginTop: '40px',
    borderRadius: '2px soild ',
    border: 'none',
    backgroundColor: '#E53935',
    color: '#FFFFFF',
    fontSize: '20px',
    fontWeight: 'bold'
  },
  txtBottom: {
    display: 'flex',
    alignItems: 'center'
  },
  txt1: {
    marginTop: '20px',
    marginBottom: 0,
    fontsize: '50px'
  },
  txt2: {
    marginTop: '20px',
    marginBottom: 0,
    color: 'blue',
  },
  txt3: {
    marginTop: '20px',
    marginBottom: '50px',
  },
  imgContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  imgFB: {
    width: '60px',
    height: '40px',
    backgroundColor: '#275a8d',
    padding: '0 30px 0 30px'

  },
  imgZL: {
    width: '60px',
    height: '40px',
    backgroundColor: '#1593c5',
    padding: '0 30px 0 30px'

  },
  imgGG: {
    width: '60px',
    height: '40px',
    backgroundColor: '#d8efde',
    padding: '0 30px 0 30px'
  }
});
