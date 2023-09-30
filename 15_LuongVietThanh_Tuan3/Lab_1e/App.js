import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, checkBox } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import RadioForm, { } from 'react-native-simple-radio-button';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.txtHeader}>
        REGISTER
      </Text>
      <View style={styles.inputContainer}>
        <input type="text" placeholder="Name" style={styles.input}></input>
        <input type="text" placeholder="Phone" style={styles.input}></input>
        <input type="text" placeholder="Email" style={styles.input}></input>
        <input type="text" placeholder="Password" style={styles.input}></input>
        <Icon name="eye" color="#000" size={30} style={styles.icon} />
        <input type="text" placeholder="Birthday" style={styles.input}></input>
        <View style={styles.radio}>
          <RadioForm 
          radio_props={radio_props1}
          initial={1}
          formHorizontal={true}
          buttonColor={'#000'}
          selectedButtonColor={'#000'}
        />
        <RadioForm 
          radio_props={radio_props2}
          initial={1}
          formHorizontal={true}
          buttonColor={'#000'}
          selectedButtonColor={'#000'}
        />
        </View>
        
      </View>
      <View style={styles.footer}>
        <input type="submit" style={styles.btnSubmit} value="REGISTER" /> 
        <Text style={styles.txtFooter}>When you agree to terms and conditions</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

var radio_props1 = [
  { label: 'Male', value: 0 },
];
var radio_props2 = [
  { label: 'Female', value: 0 },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d8efde',
    alignItems: 'center',
  },
  txtHeader: {
    textAlign: 'center',
    marginTop: '40px',
    marginBottom: 0,
    fontSize: '30px',
    fontWeight: 'bold',
  },
  inputContainer: {
    display: 'flex',
    position: 'relative',
  },
  input: {
    width: '330px',
    height: '25px',
    marginTop: '15px',
    marginBottom: 0,
    padding: '10px',
    border: 'none'
  },
  radio: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '15px',
  },
  icon: {
    position: 'absolute',
    right: '10px',
    bottom: '118px'
  },
  btnSubmit: {
    marginTop: '15px',
    width: '340px',
    height: '45px',
    backgroundColor: '#E53935',
    border: 'none',
    color: '#FFFFFF',
    fontSize: '20px',
    fontWeight: 'bold',
  },
  txtFooter: {
    marginTop: '15px',
    textAlign: 'center',
  }

});
