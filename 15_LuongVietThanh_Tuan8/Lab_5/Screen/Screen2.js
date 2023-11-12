import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Screen1 from "./Screen1";
export default function Screen2({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/pink_donut 1.png")}
          resizeMode="contain"
          style={styles.img}
        ></Image>
        <Text style={styles.name}>Pink Donut</Text>
        <Text style={styles.note}>Spicy tasty donut family</Text>
        <Text style={styles.price}>$20.00</Text>
      </View>
      <View style={styles.content}>
        <Icon
          name="clockcircleo"
          color="#000"
          size={25}
          style={styles.iconClock}
        ></Icon>
        <Text style={styles.delivery}>Delivery in </Text>
        <Text style={styles.time}>30 min</Text>
        <View style={styles.quantity}>
          <TouchableOpacity style={styles.btnMinus}>
            <Icon
              name="minus"
              color="#fff"
              size={20}
              style={styles.iconMinus}
            ></Icon>
          </TouchableOpacity>
          <Text>1</Text>
          <TouchableOpacity style={styles.btnPlus}>
            <Icon
              name="plus"
              color="#fff"
              size={20}
              style={styles.iconPlus}
            ></Icon>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.txtFooter1}>Restaurants info</Text>
        <Text style={styles.txtFooter2}>
          Order a Large Pizza but the size is the equivalent {"\n"}of a
          medium/small from other places{"\n"}at the same price range.
        </Text>
        <TouchableOpacity
          style={styles.btnAdd}
          onPress={() => {
            navigation.navigate("Screen1");
          }}
        >
          <Text style={styles.txtAdd}>Add to cart</Text>
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
    position: "relative",
    width: "100%",
    marginTop: "10px",
  },
  img: {
    marginLeft: "15%",
    width: "272px",
    height: "278px",
  },
  name: {
    marginLeft: "20px",
    fontSize: "20px",
    fontWeight: "bold",
  },
  note: {
    marginTop: "10px",
    marginLeft: "25px",
    fontSize: "15px",
    fontWeight: "bold",
    color: "#757575",
  },
  price: {
    position: "absolute",
    fontSize: "20px",
    fontWeight: "bold",
    bottom: "4px",
    right: "20px",
  },
  content: {
    position: "relative",
    marginTop: "30px",
    width: "100%",
  },
  iconClock: {
    marginLeft: "20px",
  },
  delivery: {
    marginTop: "-25px",
    marginLeft: "60px",
    fontSize: "15px",
    fontWeight: "bold",
    color: "#757575",
  },
  time: {
    fontSize: "20px",
    fontWeight: "bold",
    marginTop: "10px",
    marginLeft: "48px",
  },
  quantity: {
    flexDirection: "row",
    position: "absolute",
    right: "20px",
    bottom: "10px",
  },

  btnMinus: {
    width: "20px",
    height: "20px",
    backgroundColor: "#f1b000",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "4px",
    marginRight: "10px",
  },
  btnPlus: {
    width: "20px",
    height: "20px",
    backgroundColor: "#f1b000",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "4px",
    marginLeft: "10px",
  },
  footer: {
    marginTop: "10px",
    marginleft: "20px",
    width: "100%",
  },
  txtFooter1: {
    marginLeft: "20px",
    fontSize: "20px",
    fontWeight: "bold",
  },
  txtFooter2: {
    marginTop: "10px",
    marginBottom: "30px",
    marginLeft: "20px",
    fontsize: "20px",
    fontWeight: "bold",
    color: "#545454",
    wordBreakMode: "break-all",
  },
  btnAdd: {
    marginLeft: "20px",
    width: "90%",
    height: "60px",
    backgroundColor: "#F1B000",
    borderRadius: "10px",
    border: "1px solid #c18d00",
    justifyContent: "center",
    alignItems: "center",
  },
  txtAdd: {
    fontSize: "30px",
    fontWeight: "bold",
    color: "#fff",
  },
});
