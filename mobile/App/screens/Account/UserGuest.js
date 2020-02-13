//Pagina Inicial


import React from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { Button } from "react-native-elements";
import { withNavigation } from "react-navigation";

// console.log(props); Exportando dessa forma, toda navegação fica dentro como obj
function UserGuest(props) {
  const { navigation } = props;

  return (
    <ScrollView style={styles.viewBody} centerContent={true}>
      <Image
        source={require("../../../assets/love.png")}
        style={styles.image}
        resizeMode="contain"
      />

      <Image
        source={require("../../../assets/iconelgbt.png")}
        style={styles.img}
        resizeMode="contain"
      />

      <Text style={styles.title}>O Amor pode Mudar o Mundo</Text>
      <Text style={styles.description}>
        Como você descreveria o seus lugares? Pesquise e visualize o melhor
        ambiente de uma maneira simples. Você gostou? Avalie e tenha
        experiências incríveis.
      </Text>

      <View style={styles.viewBtn}>
        <Button
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          title="Ver seu perfil"
          onPress={() => navigation.navigate("Login")} //Redireciona para Tela de Login
        />
      </View>
    </ScrollView>
  );
}

export default withNavigation(UserGuest);

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    backgroundColor: "#CCC",
    flexDirection: "column",
    backgroundColor: "#192055"
  },
  image: {
    height: 300,
    width: "100%",
    marginBottom: 0
  },
  img: {
    height: 50,
    width: "50%",
    alignSelf: "center",
    marginTop: -20
  },

  title: {
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 10,
    textAlign: "center",
    color: "#fff"
  },
  description: {
    textAlign: "center",
    marginBottom: 20,
    color: "#fff"
  },
  viewBtn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end"
  },
  btnStyle: {
    backgroundColor: "#add8e6"
  },
  btnContainer: {
    width: "70%",
    backgroundColor: "#fff"
  }
});
