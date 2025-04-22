import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Gabriel() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Gabriel2")}>
        <Image
          style={styles.image}
          source={{
            uri: "https://www.bloomberglinea.com/resizer/v2/ZTFACGSERVASZEGLLYBOERPAC4.jpg?auth=3cfc9b3edab25558f4a5f4be3d20a85a7a4301735b521fb6ff0227434a94822b&width=800&height=472&quality=80&smart=true",
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
    backgroundColor: "yellow",
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 150,
  },
});