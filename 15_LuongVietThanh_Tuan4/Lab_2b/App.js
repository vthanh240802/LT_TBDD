import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
        source={require('./assets/usb.png')}
        style={styles.imgUSB}
        />
        <Text style={styles.txtHeader}>USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa bluetooth</Text>
      </View>

      <Text style={styles.txtFeedback}>Cực kỳ hài lòng</Text>
      <View style={styles.icon}>
        <Icon name="star" color="#F2DD1B" size={30} style={styles.icon1} />
        <Icon name="star" color="#F2DD1B" size={30} style={styles.icon1} />
        <Icon name="star" color="#F2DD1B" size={30} style={styles.icon1} />
        <Icon name="star" color="#F2DD1B" size={30} style={styles.icon1} />
        <Icon name="star" color="#F2DD1B" size={30} style={styles.icon1} />
      </View>
      <View style={styles.img}>
        <Icon name="camera" color="#000" size={30} style={styles.icon2} />
        <Text style={styles.txtImg}>Thêm hình ảnh</Text>
      </View>
      <View style={styles.footer}>
        <TextInput style={styles.input} type="text" placeholder='Hãy chia sẻ những điều mà bạn thích về sản phẩm' multiline numberofLines = {5}>
        </TextInput>
        <input type="submit" value="Gửi" style={styles.btnSubmit}></input>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  //  justifyContent: 'center',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '20px'
  },
  txtHeader: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  imgUSB: {
    width: '70px',
    height: '70px',
    marginLeft: '20px'
  },
  txtFeedback: {
    marginTop: '50px',
    marginRight: '20px',
    fontSize: '20px',
    fontWeight: 'bold',
  },
  icon: {
    flexDirection: 'row'
  },
  icon1: {
    margin: '10px'
  },
  img: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: '20px',
    width: '293px',
    height: '68px',
    border: '1px solid #c4c4c4',
    borderRadius: '5px',
  },
  icon2: {

  },
  txtImg: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginLeft: '10px'
  },
  footer: {
    marginTop: '20px',
  },
  input: {
    width: '293px',
    height: '222px',
    border: '1px solid #c4c4c4',
    borderRadius: '5px',
    color: "#c4c4c4",
    fontWeight: 'bold',
    fontSize: '15px',
    padding: '10px',
  },
  btnSubmit: {
    marginTop: '20px',
    width: '298px',
    height: '44px',
    backgroundImage: 'linear-gradient(0deg, #0D5DB6, #0D5DB6), linear-gradient(0deg, #1511EB, #1511EB)',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '20px',
    fontWeight: 'bold',
  }
});
