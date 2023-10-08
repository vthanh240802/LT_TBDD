import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.txtHeader}>LOGIN</Text>
      <View style={styles.inputContainer}>
        <input type="text" placeholder="Name" placeholderTextColor="#000" style={styles.input}></input>
        <Icon name="user" color="#000" size={30} style={styles.icon1} />
        <input type="text" placeholder="Password" style={styles.input}></input>
        <Icon name="lock" color="#000" size={30} style={styles.icon2} />
        <Icon name="eye" color="#000" size={30} style={styles.icon3} />
      </View>
      <input type='submit' value="LOGIN" style={styles.btnSubmit}></input>
      <Text style={styles.txtFooter}>Forgot your password?</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: 'linear-gradient(180deg, #FBCB00 0%, #BF9A00 100%)',
    alignItems: 'center',
  },
  txtHeader: {
    marginTop: '82px',
    marginRight:'275px',
    fontSize: '35px',
    fontWeight: 'bold',
    marginBottom: '60px',
  },
  inputContainer: {
    display: 'flex',
    position: 'relative',
  },
  input: {
    width: '300px',
    height: '25px',
    marginTop: '15px',
    marginBottom: 0,
    paddingLeft: '45px',
    paddingTop: '10px',
    paddingBottom: '10px',
    border: 'none',
  },
  icon1: {
    position: 'absolute',
    left: '10px',
    top: '21px'
  },
  icon2: {
    position: 'absolute',
    left: '10px',
    top: '81px'
  },
  icon3: {
    position: 'absolute',
    right: '10px',
    top: '81px'
  },

  btnSubmit: {
    marginTop: '50px',
    width: '349px',
    height: '45px',
    backgroundColor: '#000',
    color: '#fff',
    fontSize: '25px',
    fontWeight: 'bold',
    border: 'none'
  },
  txtFooter: {
    marginTop: '50px',
    fontSize: '20px',
    fontWeight: 'bold',

  },

});
