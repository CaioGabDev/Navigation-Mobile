import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Caio2() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Caio")}>
        <Image
          style={styles.image}
          source={{
            uri: "https://www.meioemensagem.com.br/wp-content/uploads/2025/01/neymar-2012-santosx-cred-divulgacao.jpg",
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "darkgray",
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 150,
  },
});