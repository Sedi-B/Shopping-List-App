import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput, // Add TextInput for search input
  StyleSheet,
  ScrollView,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../Redux/reducers";
import ItemForm from "../components/ItemsForm";
import Modal from "react-native-modal";
import home from "../assets/item.jpg";

function ItemListScreen() {
  const shoppingList = useSelector((state) => state);
  const dispatch = useDispatch();
  const [isModalVisible, setModalVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  // Calculate the total cost by multiplying price with quantity
  const totalCost = shoppingList.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const filteredList = shoppingList.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <SafeAreaView style={{ alignItems: "center" }}>
      <ScrollView>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for items..."
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
        />

        <Image
          source={home}
          style={{
            height: 400,
            width: 370,
            marginVertical: 20,
            alignSelf: "center",
          }}
        />

        <TouchableOpacity
          title="Create Shopping List"
          onPress={toggleModal}
          style={{
            backgroundColor: "brown",
            height: 40,
            width: "100%",
            marginVertical: 13,
            alignSelf: "center",
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              fontSize: 16,
              paddingTop: 9,
            }}
          >
            Create Shop list
          </Text>
        </TouchableOpacity>

        <ScrollView style={{ paddingVertical: 20 }}>
          {filteredList.map((item) => (
            <View key={item.id}>
              <View style={styles.listItemContainer}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <View style={styles.textContainer}>
                  <Text>{item.name}</Text>
                  <Text>Quantity: {item.quantity}</Text>
                  <Text>Price: R{item.price.toFixed(2)}</Text>
                </View>
                <TouchableOpacity onPress={() => handleRemoveItem(item.id)}>
                  <Text
                    style={{
                      color: "brown",
                      fontWeight: "600",
                      left: 97,
                      top: 23,
                    }}
                  >
                    Delete
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
        <View>
          <View style={styles.totalContainer}>
            <Text style={{ fontWeight: "800", fontSize: 20 }}>Total Cost:</Text>
            <Text style={{ fontSize: 20 }}>R{totalCost.toFixed(2)}</Text>
          </View>

          <Modal isVisible={isModalVisible}>
            <ItemForm toggleModal={toggleModal} image={home} />
          </Modal>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  listItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    padding: 10,
  },
  textContainer: {},
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchInput: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 5,
    paddingLeft: 10,
    marginTop: 60,
  },
});

export default ItemListScreen;
