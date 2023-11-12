import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

import Screen2 from "./Screen2";
import { useState } from "react";
const array = [
  {
    id: 0,
    image: require("../assets/donut_yellow 1.png"),
    name: "Tasty Donut",
    note: "Spicy tasty donut faily",
    title: "Donut",
    price: "$10.00",
  },
  {
    id: 1,
    image: require("../assets/tasty_donut 1.png"),
    name: "Pink Donut",
    note: "Spicy tasty donut faily",
    title: "Pink",
    price: "$20.00",
  },
  {
    id: 2,
    image: require("../assets/green_donut 1.png"),
    name: "Floating Donut",
    note: "Spicy tasty donut faily",
    title: "Floating",
    price: "$30.00",
  },
  {
    id: 3,
    image: require("../assets/donut_red 1.png"),
    name: "Tasty Donut",
    note: "Spicy tasty donut faily",
    title: "Floating",
    price: "$40.00",
  },
  {
    id: 4,
    image: require("../assets/pink_donut 1.png"),
    name: "Pink Donut",
    note: "Spicy tasty donut faily",
    title: "Pink",
    price: "$20.00",
  },
];
export default function Screen1({ navigation }) {
  const [category, setCategory] = useState("Pink");
  const [list, setList] = useState(array);

  const handleSearchCategory = (text) => {
    const fProduct = array.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    setList(fProduct);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.txtHeader1}>Welcome, Jala!</Text>
        <Text style={styles.txtHeader2}>Choice you Best food</Text>
        <input
          type="text"
          placeholder="Search food"
          style={styles.inputSearch}
        ></input>
        <TouchableOpacity style={styles.btnSearch}>
          <Icon
            name="search1"
            color="#fff"
            size={30}
            style={styles.iconSearch}
          />
        </TouchableOpacity>
        <View style={styles.button}>
          <TouchableOpacity style={styles.btnDonut}>
            <Text>Donut</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnPinkDonut}
            onPress={() => {
              setCategory("Pink");
              handleSearchCategory("Pink");
              console.log(category);
            }}
          >
            <Text>Pink Donut</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnFloating}
          >
            <Text>Floating</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        <FlatList
          data={array}
          renderItem={({ item }) => {
            return (
              <View style={styles.items}>
                <Image
                  source={item.image}
                  resizeMode="contain"
                  style={styles.img}
                ></Image>
                <View style={styles.text}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.note}>{item.note}</Text>
                  <Text style={styles.price}>{item.price}</Text>
                </View>
                <TouchableOpacity
                  style={styles.btnPlus}
                  onPress={() => {
                    navigation.navigate("Screen2");
                  }}
                >
                  <Icon
                    name="plus"
                    color="#fff"
                    size={30}
                    style={styles.iconPlus}
                  />
                </TouchableOpacity>
              </View>
            );
          }}
        ></FlatList>
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
  txtHeader1: {
    fontSize: "15px",
    fontWeight: "bold",
    color: "#595959",
    marginLeft: "15px",
  },
  txtHeader2: {
    fontSize: "20px",
    fontWeight: "bold",
    marginTop: "8px",
    marginLeft: "15px",
  },
  inputSearch: {
    marginTop: "10px",
    marginLeft: "15px",
    paddingLeft: "15px",
    width: "250px",
    height: "46px",
    backgroundColor: "#f9f9f9",
    border: "1px solid #c4c4c4",
    borderRadius: "2px",
  },
  iconSearch: {},
  btnSearch: {
    position: "absolute",
    top: "66px",
    right: "15px",
    backgroundColor: "#F1B000",
    width: "49px",
    height: "47px",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px",
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  btnDonut: {
    width: "100px",
    height: "35px",
    marginLeft: "15px",
    border: "1px solid #c4c4c4",
    borderRadius: "5px",
    backgroundColor: "#F1B000",
    justifyContent: "center",
    alignItems: "center",
  },
  btnPinkDonut: {
    width: "100px",
    height: "35px",
    border: "1px solid #c4c4c4",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
    justifyContent: "center",
    alignItems: "center",
  },
  btnFloating: {
    width: "100px",
    height: "35px",
    marginRight: "15px",
    border: "1px solid #c4c4c4",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "100%",
  },
  items: {
    position: "relative",
    flexDirection: "row",
    backgroundColor: "#F4DDDD",
    marginTop: "15px",
    marginLeft: "15px",
    marginRight: "15px",
    borderRadius: "15px",
  },
  img: {
    width: "100px",
    height: "100px",
    margin: "10px",
  },
  text: {
    justifyContent: "space-evenly",
  },
  name: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  note: {
    fontsize: "15px",
    fontWeight: "bold",
    color: "#706666",
  },
  price: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  btnPlus: {
    position: "absolute",
    right: "0px",
    bottom: "0px",
    width: "40px",
    height: "40px",
    backgroundColor: "#F1B000",
    borderTopRightRadius: "10px",
    borderTopLeftRadius: "50px",
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "15px",
    justifyContent: "center",
    alignItems: "center",
  },
});
