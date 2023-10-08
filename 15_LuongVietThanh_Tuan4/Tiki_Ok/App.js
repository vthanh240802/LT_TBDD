
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import { TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
        source={require('./assets/book.png')}
        style={styles.img}
        />
        <View style={styles.txt}>
          <Text style={styles.txt1}>Nguyên hàm tích phân và ứng dụng</Text>
          <Text style={styles.txt2}>Cung cấp bởi Tiki Trading</Text>
          <Text style={styles.txt3}>141.800 đ</Text>
          <Text style={styles.txt4}>141.800 đ</Text>
          <Text style={styles.number}>1</Text>
          <Icon name="minus" color="#000" size={10} style={styles.icon1} />
          <Icon name="plus" color="#000" size={10} style={styles.icon2} />
          <Text style={styles.txt5}>Mua sau</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', marginTop: '30px'}}>
        <Text style={styles.txt6}>Mã giảm giá đã lưu</Text>
        <Text style={styles.txt7}>Xem tại đây</Text>
      </View>
      <View style={styles.endHeader}>
        <View style={styles.voucher}>
          <TextInput style={styles.input1}></TextInput>
          <Text style={styles.txt8}>Mã giảm giá</Text>
        </View>
        <input type="submit" value="Áp dụng" style={styles.btnSubmit}></input>
      </View>
    {/*  */}
      <View style={styles.content1}>
        <Text style={styles.txt9}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
        <Text style={styles.txt10}>Nhập tại đây?</Text>
      </View> 
    {/*  */}
      <View style={styles.content2}>
        <Text style={styles.txt11}>Tạm tính</Text>
        <Text style={styles.txt12}>141.800 đ</Text>
      </View>
    {/*  */}
      <View style={styles.footer}>
        <Text style={styles.txt13}>Thành tiền</Text>
        <Text style={styles.txt14}>141.800 đ</Text>
      </View>
      <input type="submit" value="TIẾN HÀNH ĐẶT HÀNG" style={styles.btnFooter}></input>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
//    justifyContent: 'center',
  },
  img: {
    width: '104px',
    height: '127px'
  },
  header: {
    marginTop: '20px',
    flexDirection: 'row'
  },
  txt: {
    position: 'relative',
    marginLeft: '25px'
  },
  number: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginLeft: '28px'
  },
  txt1: {
    fontSize: '13px',
    fontWeight: 'bold'
  },
  txt2: {
    marginTop: '10px',
    fontSize: '13px',
    fontWeight: 'bold'
  },
    txt3: {
    marginTop: '10px',
    fontSize: '15px',
    fontWeight: 'bold',
    color: "red"
  },
    txt4: {
    marginTop: '10px',
    fontSize: '13px',
    fontWeight: 'bold',
    color: '#808080',
    textDecorationLine: 'line-through'
  },
  icon1: {
    position: 'absolute',
    top: '104px',
    backgroundColor: '#c4c4c4',
    padding: '4px'
  },
  icon2: {
    position: 'absolute',
    top: '104px',
    left: '52px',
    backgroundColor: '#c4c4c4',
    padding: '4px'
  },
  txt5: {
    position: 'absolute',
    color: '#134FEC',
    fontWeight: 'bold',
    top: '104px',
    right: 0
  },
  txt6: {
    marginLeft: '-110px',
    fontWeight: 'bold',
  },
  txt7: {
    marginLeft: '30px',
    fontWeight: 'bold',
    color: '#134FEC',
  },
  endHeader: {
    flexDirection: 'row',
    marginTop: '30px'
  },
  voucher: {
    flexDirection: 'row',
    border: '1px solid #c4c4c4',
    borderRadius: '2px',
    padding: '15px',
    width: '220px',
    height: '45px'
  },
  input1: {
    width: '32px',
    height: '16px',
    backgroundColor: '#F2DD1B'
  },
  txt8: {
    fontSize: '14px',
    fontWeight: 'bold',
    marginLeft: '10px'
  },
  btnSubmit: {
    backgroundColor: '#0a5eb7',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '20px',
    border: 'none',
    borderRadius: '2px',
    marginLeft: '30px'
  },
  content1: {
    flexDirection: 'row',
    marginTop: '20px'
  },
  txt9: {
    fontSize: '13px',
    fontWeight: 'bold',
  },
  txt10: {
    fontSize: '13px',
    fontWeight: 'bold',
    color: '#134FEC',
    marginLeft: '10px'
  },
  content2: {
    flexDirection: 'row',
    marginTop: '20px'
  },
  txt11: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  txt12: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: 'red',
    marginLeft: '190px'
  },
  footer: {
    flexDirection: 'row',
    marginTop: '100px'
  },
  txt13: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  txt14: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: 'red',
    marginLeft: '173px'
  },
  btnFooter: {
    marginTop: '20px',
    width: '345px',
    height: '45px',
    color: '#fff',
    fontSize: '20px',
    fontWeight: 'bold',
    backgroundColor: 'red',
    border: 'none',
    borderRadius: '2px'
  }
});
