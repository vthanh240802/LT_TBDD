import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/AntDesign";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import StarRating from "react-native-star-rating-widget";
import Screen1 from "./Screen1";

export default function Screen2({ navigation }) {
  const [rating, setRating] = useState(0);
  const array = [
    {
      id: 0,
      image: require("../assets/giacchuyen 1.png"),
      name: "Cáp chuyển từ Cổng USB sang PS2...",
      price: "69.900 đ",
      discount: "-39%",
    },
    {
      id: 1,
      image: require("../assets/daynguon 1.png"),
      name: "Cáp chuyển từ Cổng USB sang PS2...",
      price: "69.900 đ",
      discount: "-39%",
    },
    {
      id: 2,
      image: require("../assets/dauchuyendoipsps2 1.png"),
      name: "Cáp chuyển từ Cổng USB sang PS2...",
      price: "69.900 đ",
      discount: "-39%",
    },
    {
      id: 3,
      image: require("../assets/dauchuyendoi 1.png"),
      name: "Cáp chuyển từ Cổng USB sang PS2...",
      price: "69.900 đ",
      discount: "-39%",
    },
    {
      id: 4,
      image: require("../assets/carbusbtops2 1.png"),
      name: "Cáp chuyển từ Cổng USB sang PS2...",
      price: "69.900 đ",
      discount: "-39%",
    },
    {
      id: 5,
      image: require("../assets/daucam 1.png"),
      name: "Cáp chuyển từ Cổng USB sang PS2...",
      price: "69.900 đ",
      discount: "-39%",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          name="arrowleft"
          color="#fff"
          size={30}
          style={styles.iconHeader}
        />
        <Icon name="search1" color="#000" size={30} style={styles.iconSearch} />
        <input placeholder="Dây cáp usb" style={styles.input}></input>
        <Icon
          name="shoppingcart"
          color="#fff"
          size={30}
          style={styles.iconHeader}
        />
        <Icon
          name="ellipsis1"
          color="#fff"
          size={30}
          style={styles.iconHeader}
        />
      </View>
      <ScrollView>
        <View style={styles.content}>
          <FlatList
            numColumns={2}
            data={array}
            renderItem={({ item }) => {
              return (
                <View style={styles.items}>
                  <Image
                    source={item.image}
                    resizeMode="contain"
                    style={styles.img}
                  ></Image>
                  <Text style={styles.name}>{item.name}</Text>
                  <StarRating
                    rating={rating}
                    onChange={setRating}
                    starSize="20px"
                  />
                  <Text style={styles.price}>
                    {item.price} {item.discount}
                  </Text>
                </View>
              );
            }}
          ></FlatList>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity>
          <Icon name="bars" color="#fff" size={30} style={styles.iconHeader} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Screen1");
          }}
        >
          <Icon name="home" color="#fff" size={30} style={styles.iconHeader} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Screen1");
          }}
        >
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
    //    justifyContent: "center",
  },
  header: {
    position: "relative",
    width: "400px",
    height: "40px",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "10px",
    backgroundColor: "#1BA9FF",
  },
  iconHeader: {
    marginTop: "4px",
  },
  iconSearch: {
    position: "absolute",
    left: "66px",
    top: "4px",
  },
  input: {
    width: "192px",
    height: "30px",
    paddingLeft: "50px",
    border: "none",
    marginTop: "3px",
  },
  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20px",
  },
  items: {
    width: "160px",
    height: "200px",
    justifyContent: "center",
    borderRadius: "10px",
    backgroundColor: "#e5e5e5",
    margin: "20px",
  },
  img: {
    width: "150px",
    height: "100px",
  },
  price: {
    fontWeight: "bold",
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
