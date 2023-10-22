import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen2 from "./Screen2";

export default function Screen1({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          name="arrowleft"
          color="#fff"
          size={30}
          style={styles.iconHeader}
        />
        <Text style={styles.txtHeader}>Chat</Text>
        <Icon
          name="shoppingcart"
          color="#fff"
          size={30}
          style={styles.iconHeader}
        />
      </View>
      <ScrollView style={styles.content}>
        <Text style={styles.txtContent}>
          Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!
        </Text>
        <View style={styles.item1}>
          <Image
            resizeMode="contain"
            source={require("../assets/ca_nau_lau.png")}
            style={styles.img}
          />
          <Text style={styles.txt1}>Ca nấu lẩu, nấu mì mini...</Text>
          <Text style={styles.txt2}>Shop Devang</Text>
          <TouchableOpacity style={styles.btnChat}>
            <Text style={styles.txtbtnChat}>CHAT</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item1}>
          <Image
            resizeMode="contain"
            source={require("../assets/ga_bo_toi.png")}
            style={styles.img}
          />
          <Text style={styles.txt1}>1Kg khô gà bơ tỏi...</Text>
          <Text style={styles.txt2}>Shop LTD Food</Text>
          <TouchableOpacity style={styles.btnChat}>
            <Text style={styles.txtbtnChat}>CHAT</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item1}>
          <Image
            resizeMode="contain"
            source={require("../assets/xa_can_cau.png")}
            style={styles.img}
          />
          <Text style={styles.txt1}>Xe cần cẩu đa năng</Text>
          <Text style={styles.txt2}>Shop Thế giới đồ chơi</Text>
          <TouchableOpacity style={styles.btnChat}>
            <Text style={styles.txtbtnChat}>CHAT</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item1}>
          <Image
            resizeMode="contain"
            source={require("../assets/do_choi_dang_mo_hinh.png")}
            style={styles.img}
          />
          <Text style={styles.txt1}>Đồ chơi dạng mô hình</Text>
          <Text style={styles.txt2}>Shop Thế giới đồ chơi</Text>
          <TouchableOpacity style={styles.btnChat}>
            <Text style={styles.txtbtnChat}>CHAT</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item1}>
          <Image
            resizeMode="contain"
            source={require("../assets/lanh_dao_gian_don.png")}
            style={styles.img}
          />
          <Text style={styles.txt1}>Lãnh đạo giản đơn</Text>
          <Text style={styles.txt2}>Shop Minh Long Book</Text>
          <TouchableOpacity style={styles.btnChat}>
            <Text style={styles.txtbtnChat}>CHAT</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item1}>
          <Image
            resizeMode="contain"
            source={require("../assets/hieu_long_con_tre.png")}
            style={styles.img}
          />
          <Text style={styles.txt1}>Hiểu lòng con trẻ</Text>
          <Text style={styles.txt2}>Shop Minh Long Book</Text>
          <TouchableOpacity style={styles.btnChat}>
            <Text style={styles.txtbtnChat}>CHAT</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item1}>
          <Image
            resizeMode="contain"
            source={require("../assets/trump 1.png")}
            style={styles.img}
          />
          <Text style={styles.txt1}>Donal Trump thiên tài lãnh đạo</Text>
          <Text style={styles.txt2}>Shop Minh Long Book</Text>
          <TouchableOpacity style={styles.btnChat}>
            <Text style={styles.txtbtnChat}>CHAT</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Screen2");
          }}
        >
          <Icon name="bars" color="#fff" size={30} style={styles.iconHeader} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="home" color="#fff" size={30} style={styles.iconHeader} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="back" color="#fff" size={30} style={styles.iconHeader} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    //  justifyContent: 'center',
  },
  header: {
    width: "500px",
    height: "40px",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "10px",
    backgroundColor: "#1BA9FF",
  },
  txtHeader: {
    marginTop: "7px",
    fontSize: "20px",
    color: "#FFFFFF",
  },
  iconHeader: {
    marginTop: "5px",
  },
  content: {},
  txtContent: {
    marginTop: "10px",
    textAlign: "center",
  },
  img: {
    width: "74px",
    height: "74px",
  },
  item1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative",
    borderTop: "1px solid #000",
    backgroundColor: "#e5e5e5",
    marginBottom: "5px",
  },
  txt1: {
    position: "absolute",
    left: "80px",
    marginTop: "10px",
    fontSize: "15px",
  },
  txt2: {
    position: "absolute",
    fontSize: "14px",
    color: "red",
    left: "80px",
    top: "32px",
  },
  btnChat: {
    marginTop: "20px",
    marginRight: "10px",
    width: "88px",
    height: "38px",
    backgroundColor: "#F31111",
    textAlign: "center",
  },
  txtbtnChat: {
    color: "#FFF",
    textAlign: "center",
    marginTop: "8px",
  },
  footer: {
    zIndex: 2,
    width: "500px",
    height: "40px",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#1BA9FF",
  },
});
