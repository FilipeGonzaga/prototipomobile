//Pagina de Login

import React, { useRef } from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { Divider } from "react-native-elements";
import LoginForm from "../../components/Account/LoginForm";
import Toast from "react-native-easy-toast";
 import LoginFacebook from "../../components/Account/LoginFacebook";

export default function Login(props) {
  const { navigation } = props;
  const toastRef = useRef();

  //Importando Componentes para Login

  return (
    <ScrollView style={styles.fundo}>
      <Image
        source={require("../../../assets/love.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.viewContainer}>
        <LoginForm toastRef={toastRef} />
        <CreateAccount navigation={navigation} />
      </View>
      <Divider style={styles.divider} />
      <View style={styles.facebook}>
        <LoginFacebook toastRef={toastRef} navigation={navigation}/>
      </View> 
      <Toast ref={toastRef} position="center" opacity={0.5} />
    </ScrollView>
  );
}

function CreateAccount(props) {
  const { navigation } = props;

  return (
    <Text style={styles.textRegister}>
      Não tem uma conta? {" "}
      <Text
        style={styles.btnRegister}
        onPress={() => navigation.navigate("Register")}
      >
        Registre-se
      </Text>
    </Text>
  );
}

const styles = StyleSheet.create({

  fundo :{
      backgroundColor: "#fff"
  },

  logo: {
    width: "100%",
    height: 150,
    marginTop: 20
  },
  viewContainer: {
    marginRight: 40,
    marginLeft: 40,
    backgroundColor: "#fff"

  },
  textRegister: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    alignSelf: "center"
  
  },
  btnRegister: {
    color: "#192055",
    fontWeight: "bold",
    
  },
  divider: {
    backgroundColor: "#192055",
    margin: 40
  },

  facebook: {
    width: "50%",
    alignSelf: "center",
    marginTop: -25
  }
});
